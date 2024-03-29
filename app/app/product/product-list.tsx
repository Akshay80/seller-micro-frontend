"use client"
import { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import productListData from '../../../data/product_list.json';
import moment from 'moment';
import { TableHeader } from '@/libs/shared/ui/src/lib/table-header/TableHeader';
import VerifySeller from '../../../components/verify-seller/verify-seller';
import { AdminPageHeader } from "@/libs/shared/ui/src/lib/admin-page-header/admin-page-header";

const searchProducts = /* GraphQL */ `query SearchProducts(
    $filter: SearchableProductFilterInput
    $sort: [SearchableProductSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableProductAggregationInput]
  ) {
    searchProducts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        code
        name
        description
        image
        images
        documents
        listPrice
        unitPrice
        tierPrice
        unitType
        taxCategoryId
        attributes
        weight
        active
        verified
        taxExempt
        keywords
        leadTime
        rating
        stock
        tierPrice
        sellerId
        productCategoryId
        productSubCategoryId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
  `

const ProductList = () => {
    const [currentSeller, setcurrentSeller] = useState<any>(null)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            let currentSeller = JSON.parse(window.localStorage.getItem("seller") || '');
            setcurrentSeller(currentSeller)
        } else {
            console.log("not avaialable");
        }
    }, []);


    const [productList, setProductList] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [totalOrders, setTotalOrders] = useState<number>(0)
    const [limit, setLimit] = useState(10);
    const [from, setFrom] = useState(0);
    const [searchParam, setSearchParam] = useState<string>("");
    const [count, setCount] = useState<number | null>(null);
    const [selectFilter, setSelectFilter] = useState<any>('all');



    useEffect(() => {
        if (currentSeller) {
            fetchListProducts()
        }
    }, [from, searchParam, currentSeller, selectFilter])

    const fetchListProducts = async () => {
        setIsLoading(true)
        let filter: any = { sellerId: { eq: currentSeller?.sellerId } };

        if (searchParam) {
            filter = { name: { matchPhrasePrefix: `${searchParam}*` }, active: { eq: productListData?.data[productListData?.data?.length - 2].options }, sellerId: { eq: currentSeller?.sellerId } }
        }
        if (selectFilter) {
            let status: any = productListData?.data.filter((data: any) => {
                let returnData = data?.search_value === selectFilter && data
                return returnData
            })
            if (searchParam) {
                filter = { name: { matchPhrasePrefix: searchParam }, sellerId: { eq: currentSeller?.sellerId } }
            }
            if (searchParam !== 'all' && searchParam) {
                filter = { active: { eq: status[0]?.value }, name: { matchPhrasePrefix: searchParam }, sellerId: { eq: currentSeller?.sellerId } }
            }
            if (searchParam !== 'all' && !searchParam) {
                filter = { active: { eq: status[0]?.value }, sellerId: { eq: currentSeller?.sellerId } }
            }

        }
        try {
            const response = await API.graphql<any>({
                query: searchProducts,
                variables: { limit, from, filter: filter, sort: { direction: 'desc', field: 'createdAt' }, }
            });
            response.data?.searchProducts?.items.forEach((item: any) => {
                if (item?.createdAt) {
                    item.createdAt = (moment(item?.createdAt).local().format("D-MMM-YY, HH:mm")).toString();
                    item.tierPrice = item?.tierPrice && JSON.parse(item?.tierPrice || '')
                }
            })
            setProductList(response?.data?.searchProducts?.items)
            setTotalOrders(response.data?.searchProducts?.total ?? 0)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (currentSeller) {
            getData(null)
        }
    }, [currentSeller])

    const getData = async (nextToken: string | null = null) => {
        let count = 0;
        do {
            const result: any = await numberOfOrders(nextToken);
            count += result?.count;
            nextToken = result?.nextToken;
        } while (nextToken);
        setCount(count);
    }

    const numberOfOrders = async (token: string | null) => {
        const res = await API.graphql<any>({
            query: searchProducts,
            variables: { limit: 1000, nextToken: token, filter: { sellerId: { eq: currentSeller?.sellerId } } }
        })
        return { count: res?.data?.searchProducts?.items?.length, nextToken: res?.data?.searchProducts?.nextToken };
    }

    const prevPage = () => {
        if (from - limit > 0) {
            setFrom(from - limit)
        } else {
            setFrom(0)
        }
    }

    const nextPage = () => {
        if (from + limit < totalOrders) {
            setFrom(from + limit)
        }
    }
    return (
        <>
            <AdminPageHeader name='Products' buttonName={(currentSeller?.seller?.verified && currentSeller?.seller?.active) ? 'Create Product' : ''} link="/app/product/create" />
            <div className="row ">
                <div className="col-xl-12 col-12 mb-5">
                    <div className="card h-100 card-lg">
                        <TableHeader statusOptions={productListData?.data[productListData?.data?.length - 2].options || []} searchPlaceholder='Search By Product Name' onChange={(e: any) => { setSearchParam(e.target.value) }} handleChange={(e: any) => setSelectFilter(e.target.value)} />

                        {isLoading ?
                            (
                                <div className="d-flex justify-content-center align-items-lg-center" style={{ height: "30rem" }}>
                                    <div className="spinner-border primary" role="status">
                                    </div>
                                </div>
                            ) :
                            (
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                                            <thead className="bg-light">
                                                <tr>
                                                    {productListData?.data[productListData?.data?.length - 1].tableColumn?.map((column) => (
                                                        <th key={column}>
                                                            {column}
                                                        </th>))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {(currentSeller?.seller?.verified && currentSeller?.seller?.active) ?
                                                    productList.length !== 0 ? (
                                                        productList.map((product: any) => {
                                                            return (
                                                                <tr key={product?.id} onClick={() => window.location.href = `/app/product/${product?.id}`} className='cursor-pointer'>
                                                                    <td><a href={`/app/product/${product?.id}`}>
                                                                        <img src={product?.image || 'https://wtx-cdn.s3.amazonaws.com/img/profile.png'} alt={product?.name} style={{ width: '50px' }} className="img-fluid" /></a>
                                                                    </td>
                                                                    <td><a href={`/app/product/${product?.id}`} className="text-reset">{product?.name ? product?.name : 'n/a'}</a></td>
                                                                    <td>{product?.productCategoryId ? product?.productCategoryId : 'n/a'}</td>
                                                                    <td>{product?.unitPrice ? product?.unitPrice : 'n/a'}</td>
                                                                    <td>{product?.unitType ? product?.unitType : 'n/a'}</td>
                                                                    <td>{product?.stock ? product?.stock : 'n/a'}</td>
                                                                    <td>  {product?.active ? <span className='text-success'>Active</span> : <span className='text-danger'>In Active</span>}</td>
                                                                    <td>{product?.createdAt ? product?.createdAt : 'n/a'}</td>
                                                                    <td><a href={`/app/product/edit/${product?.id}`} className="btn bg-light text-dark"><i className="bi bi-pencil"></i></a></td>
                                                                </tr>
                                                            );
                                                        })
                                                    ) : (
                                                        <tr className='text-center py-3'>
                                                            <td colSpan={9}>
                                                                <h3 className='m-0 text-muted py-4'>
                                                                    <i className="fa fa-warning me-2" />
                                                                    No Products Available
                                                                </h3>
                                                            </td>
                                                        </tr>
                                                    ) :
                                                    <td colSpan={9}>
                                                        <VerifySeller />
                                                    </td>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>)
                        }
                        <div className=" border-top d-md-flex justify-content-between align-items-center px-6 py-6">
                            {count !== 0 && <>
                                <span>Showing {from + 1} to {(count && from + limit <= count ? from + limit : count)} of {count} entries</span>
                                <nav className="mt-2 mt-md-0">
                                    <ul className="pagination mb-0 ">
                                        <li onClick={prevPage} className={`btn btn-primary ${from - limit < 0 ? "disabled" : ""}`}><a className="text-light">Previous</a></li>
                                        <li onClick={nextPage} className={`btn btn-primary ms-2 ${from + limit > totalOrders ? "disabled" : ""}`}><a className="text-light">Next</a></li>
                                    </ul>
                                </nav>
                            </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList