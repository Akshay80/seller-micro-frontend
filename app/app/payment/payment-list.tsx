"use client"
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import paymentJson from '../../../data/paymentList.json'
import { TableHeader } from '../../../libs/shared/ui/src/lib/table-header/TableHeader';
import Spinner from '@/libs/shared/ui/src/components/spinner/spinner';
import VerifySeller from '../../../components/verify-seller/verify-seller';

const PaymentList = () => {
  const [currentSeller, setCurrentSeller] = useState<any>()
  const [listPayments, setListPayments] = useState<any>();
  const [from, setFrom] = useState(0);
  const [limit, setLimit] = useState(10);
  const [totalPayments, setTotalPayments] = useState<any>()
  const [spinner, showSpinner] = useState<boolean>(false)
  const [count, setCount] = useState<number | null>(null);
  const [selectFilter, setSelectFilter] = useState<any>('all');

  useEffect(() => {
    getData(null)
    let temp = (JSON.parse(localStorage?.getItem('seller') || ''))
    setCurrentSeller(temp)
  }, [])

  useEffect(() => {
    showSpinner(true)
    fetchPayments()
  }, [from, selectFilter])

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
      query: searchPayments,
      variables: { limit: 1000, nextToken: token }
    })
    return { count: res?.data?.searchPayments?.items?.length, nextToken: res?.data?.searchPayments?.nextToken };
  }

  const fetchPayments = async () => {
    let filter: any = {}
    try {
      if (selectFilter) {
        let status: any = paymentJson?.data.filter((data: any) => {
          let returnData = data?.search_value === selectFilter && data?.search_value
          return returnData
        })
        if (selectFilter !== 'All') {
          filter = { status: { eq: status[0]?.value } }
        }
      }
      const paymentList = await API.graphql<GraphQLQuery<any>>({
        query: searchPayments,
        variables: { limit, from, filter }
      })
      setListPayments(paymentList?.data?.searchPayments?.items)
      setTotalPayments(paymentList.data?.searchPayments?.total ?? 0)
      showSpinner(false)
    } catch (err) {
      console.log(err)
      showSpinner(false)
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
    if (from + limit < totalPayments) {
      setFrom(from + limit)
    }
  }

  return (
    <div className="row ">
      <div className="col-xl-12 col-12 mb-5">
        <div className="card h-100 card-lg">
          <TableHeader statusOptions={paymentJson?.data[paymentJson?.data?.length - 2].options || []} handleChange={(e: any) => setSelectFilter(e.target.value)} />
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                <Spinner show={spinner}>
                  <thead className="bg-light">
                    <tr>
                      {paymentJson?.data[paymentJson?.data.length - 1]?.tableColumn?.map((column) => (
                        <th key={column} className={`${column !== 'Buyer Name' && 'text-center'}`} >
                          {column}
                        </th>))}
                    </tr>
                  </thead>
                  <tbody>
                    {(currentSeller?.seller?.verified && currentSeller?.seller?.active) ?
                      listPayments?.length !== 0 ? (
                        listPayments?.map((paymnet: any) => {
                          return (
                            <tr key={paymnet?.id} className='cursor-pointer'>
                              <td>{paymnet?.user?.name ? paymnet?.user?.name : 'User'}</td>
                              <td className='text-center'>{paymnet?.orders?.items[0]?.code || 'n/a'}</td>
                              <td className='text-center'>$ {paymnet?.amount}</td>
                              <td className='text-center'>{paymnet?.currency}</td>
                              <td className='text-center'>{paymnet?.status.charAt(0).toUpperCase() + paymnet?.status?.substring(1).toLowerCase()}</td>
                              <td className='text-center'>{paymnet?.createdAt?.substring(0, 10)}</td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr className='text-center py-3'>
                          <td colSpan={8}>
                            <h3 className='m-0 text-muted py-4'>
                              <i className="fa fa-warning me-2" />
                              No Payments Available
                            </h3>
                          </td>
                        </tr>
                      ) :
                      <td colSpan={7}>
                        <VerifySeller />
                      </td>
                    }
                  </tbody>
                </Spinner>
              </table>
            </div>
          </div>
          <div className=" border-top d-md-flex justify-content-between align-items-center px-6 py-6">
            {count !== 0 && currentSeller?.seller?.verified && currentSeller?.seller?.active && <>
              <span>Showing {from + 1} to {(count && from + limit <= count ? from + limit : count)} of {count} entries</span>
              <nav className="mt-2 mt-md-0">
                <ul className="pagination mb-0 ">
                  <li onClick={prevPage} className={`btn btn-primary ${from - limit < 0 ? "disabled" : ""}`}><a className="text-light">Previous</a></li>
                  <li onClick={nextPage} className={`btn btn-primary ms-2 ${from + limit > totalPayments ? "disabled" : ""}`}><a className="text-light">Next</a></li>
                </ul>
              </nav>
            </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentList

const searchPayments = /* GraphQL */ `query SearchPayments(
    $filter: SearchablePaymentFilterInput
    $sort: [SearchablePaymentSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePaymentAggregationInput]
  ) {
    searchPayments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        buyerId
        userId
        amount
        currency
        status
        paymentIntentId
        paymentIntent
        createdAt
        user {
        name
      }
        orders {
        items {
          code
          currency
          orderDate
        }
      }
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
