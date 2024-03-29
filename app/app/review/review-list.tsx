'use client'

import { useEffect, useState } from "react";
import { Modal } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import moment from "moment";
import { Spinner, TableHeader } from "@/libs/shared/ui/src";
import Star from '../../../components/star/star';
import feesbackStatus from "../../../data/feedback.json"
import VerifySeller from "../../../components/verify-seller/verify-seller";

const ReviewList = () => {
    const [currentSeller, setcurrentSeller] = useState<any>(null)
    const [modal, showModal] = useState<boolean>(false)
    const [totalReviews, setTotalReviews] = useState<number>(0)
    const [count, setCount] = useState<number>()
    const [searchParam, setSearchParam] = useState<string>("");
    const [feedback, setFeedback] = useState<any>()
    const [productDetails, setProductDetails] = useState<any>([])
    const [modalProductName, setModalProductName] = useState<string>('')
    const [from, setFrom] = useState(0);
    const [spinner, showSpinner] = useState<boolean>(false)
    const [limit, setLimit] = useState(10);
    const [selectFilter, setSelectFilter] = useState<any>('all');

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            let currentSeller = JSON.parse(window.localStorage.getItem("seller") || '');
            setcurrentSeller(currentSeller)
        } else {
            console.log("not avaialable");
        }
    }, []);

    useEffect(() => {
        if (currentSeller) {
            fetchReviews()
        }
    }, [from, selectFilter, searchParam, currentSeller])


    useEffect(() => {
        if (currentSeller) {
            getData()
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
        showSpinner(false)
    }

    const numberOfOrders = async (token: string | null) => {
        const res = await API.graphql<GraphQLQuery<any>>({
            query: customSearchProducts,
            variables: { limit: 1000, nextToken: token, filter: { sellerId: { eq: currentSeller?.sellerId } }, sort: { direction: 'desc', field: 'createdAt' }, }
        })
        return { count: res?.data?.searchProducts?.items?.length, nextToken: res?.data?.searchProducts?.nextToken };
    }

    const fetchReviews = async () => {
        if (currentSeller) {
            showSpinner(true);
            let filter: any = { sellerId: { eq: currentSeller?.sellerId } }
            if (selectFilter) {
                let status: any = feesbackStatus?.data.filter((data: any) => {
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
                const res = await API.graphql<GraphQLQuery<any>>({
                    query: customSearchProducts,
                    variables: { limit, from, filter: filter }
                })
                res?.data?.searchProducts?.items.forEach((item: any) => {
                    if (item?.orderDate) {
                        item.orderDate = (moment(item?.orderDate).local().format("D-MMM-YY, HH:mm")).toString();
                    }
                })
                setFeedback(res?.data?.searchProducts?.items)
                setTotalReviews(res?.data?.searchProducts?.total ?? 0)
                showSpinner(false)
            } catch (error) {
                console.log("error", error)
            }
        }
    }

    const prevPage = () => {
        if (from - limit > 0) {
            setFrom(from - limit)
        } else {
            setFrom(0)
        }
    }

    const nextPage = () => {
        if (from + limit < totalReviews) {
            setFrom(from + limit)
        }
    }

    const handleGetProductFeedback = (data: any) => {
        setProductDetails([])
        data?.feedbacks?.items?.forEach((feedback: any) => {
            if (feedback?.isVerified === true) {
                setProductDetails((prev: any) => ([...prev, feedback]))
            }
        })
        setModalProductName(data?.name || '')
        showModal(true)
    }

    return (
        <section>
            <div className={'container p-0 m-0'}>
                <div className="row ">
                    <div className="col-xl-12 col-12 mb-5">
                        <div className="card h-100 card-lg">
                            <TableHeader statusOptions={feesbackStatus?.data[feesbackStatus?.data?.length - 1]?.options || []} onChange={(e:any) => { setSearchParam(e.target.value) }} handleChange={(e: any) => setSelectFilter(e.target.value)} searchPlaceholder='Search product' />
                            <div className="px-6 py-6 ">
                                <div className="card-body p-0">
                                        <Spinner show={spinner}>
                                    <div className="table-responsive">
                                            <table className="table table-centered table-hover text-nowrap table-borderless mb-0">
                                                <thead className="bg-light">
                                                    <tr>
                                                        <th>Image</th>
                                                        <th>Product Name</th>
                                                        <th className='text-center'>Status</th>
                                                        <th className='text-center'>Rating</th>
                                                        <th className='text-center'>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(currentSeller?.seller?.verified && currentSeller?.seller?.active) ?
                                                        feedback?.length > 0 ? feedback?.map((data: any, index: number) => (
                                                            <tr key={index} className="cursor-pointer">
                                                                <td><img src={data?.image ? data?.image : ''} className="icon-shape icon-md" /></td>
                                                                <td>{data?.name}</td>
                                                                <td className='text-center'>
                                                                    {data?.active ? <span className='text-success'>Active</span> : <span className='text-danger'>In Active</span>}
                                                                </td>
                                                                <td className='text-center'>
                                                                    <Star rating={data?.rating || 0} maxRating={5} />
                                                                </td>
                                                                <td className='text-center'>
                                                                    <div className="dropdown">
                                                                        <a className="text-reset" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handleGetProductFeedback(data)}>
                                                                            <i className="bi bi-eye" />
                                                                        </a>
                                                                        <ul className="dropdown-menu" >
                                                                            <li className="dropdown-item"><i className="bi bi-eye me-3" />View</li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )) :
                                                            <tr className='text-center py-3'>
                                                                <td colSpan={7}>
                                                                    <h3 className='m-0 text-muted'>
                                                                        No Reviews found
                                                                    </h3>
                                                                </td>
                                                            </tr> :
                                                        <td colSpan={9}>
                                                            <VerifySeller />
                                                        </td>
                                                    }
                                                </tbody>
                                            </table>
                                    </div>
                                        </Spinner>
                                </div>
                                <div className=" border-top d-md-flex justify-content-between align-items-center px-6 py-6">
                                    <span>Showing {from + 1} to {(count && from + limit <= count ? from + limit : count)} of {count} reviews</span>
                                    <nav className="mt-2 mt-md-0">
                                        <ul className="pagination mb-0 ">
                                            <li onClick={prevPage} className={`btn btn-primary ${from - limit < 0 ? "disabled" : ""}`}><a className="text-light">Previous</a></li>
                                            <li onClick={nextPage} className={`btn btn-primary ms-2 ${from + limit > totalReviews ? "disabled" : ""}`}><a className="text-light">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={modal}>
                <Modal.Header>
                    <h2>{modalProductName}</h2>
                </Modal.Header>
                {
                    productDetails?.length ? productDetails?.map((data: any, index: number) => (
                        <div key={index}>
                            {data?.isVerified &&
                                <>
                                    <section className='p-3'>
                                        <p className='m-0'>{data?.buyerUser?.buyer?.name}</p>
                                        <p className='my-1'>{data?.comment}</p>
                                        <StarRatings rating={data?.rating || 0} starRatedColor='#FFCD3C' starDimension='14px' starSpacing='1px' />
                                    </section>
                                    <hr className='p-0 m-0' />
                                </>
                            }
                        </div>
                    )) : <p className='text-center m-1 fs-5'>No Ratings</p>
                }
                <Modal.Footer>
                    <button onClick={() => { showModal(false); }}
                        className="btn bg-primary text-white">
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </section>
    )
}

export default ReviewList

const customSearchProducts = /* GraphQL */ `
  query SearchProducts(
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
        sellerId
        productCategoryId
        productSubCategoryId
          feedbacks {
        items {
          id
          comment
          createdAt
          rating
          productId
          updatedAt
          media
          isVerified
          product {
            name
          }
          buyerUser {
            buyer {
              name
              email
            }
          }
        }
      }
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
`;