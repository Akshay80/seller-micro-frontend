/* eslint-disable */
"use client"

import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import moment from 'moment';
import { useEffect, useState } from "react";
import orderStatusData from '../../../data/order_status.json';
import { TableHeader } from '../../../libs/shared/ui/src/lib/table-header/TableHeader';
import VerifySeller from '../../../components/verify-seller/verify-seller';

// QUERIES START
const searchOrders = /* GraphQL */ `
  query SearchOrders(
    $filter: SearchableOrderFilterInput
    $sort: [SearchableOrderSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableOrderAggregationInput]

  ) {
    searchOrders(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        buyer {
          name
        }
        orderDate
        orderStatus
        total
        code
      }
      total
      nextToken
    }
  }
`;

// QUERIES END
interface SearchOrdersQuery {
  searchOrders?: {
    items: Array<Orders>,
    total?: number
    nextToken: String | null,
  } | null,
};

interface Orders {
  id: string,
  buyer: {
    name: string
  },
  orderDate: string,
  orderStatus: string,
  total: number | string,
  code: string
}

interface OrdersProps { }

function OrderList(props: OrdersProps) {

  const [currentSeller, setcurrentSeller] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let currentSeller = JSON.parse(window.localStorage.getItem("seller") || '');
      setcurrentSeller(currentSeller)
    } else {
      console.log("not avaialable");
    }
  }, []);

  const [orders, setOrders] = useState<Array<Orders>>()
  const [totalOrders, setTotalOrders] = useState<number>(0)
  const [limit, setLimit] = useState(10);
  const [from, setFrom] = useState(0);
  const [searchParam, setSearchParam] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectFilter, setSelectFilter] = useState<any>('all');
  const [count, setCount] = useState<number | null>(null);


  useEffect(() => {
    if (currentSeller) {
      fetchOrders()
    }
  }, [from, searchParam, selectFilter, currentSeller]);

  const fetchOrders = async () => {
    setIsLoading(true);
    let filter = {}
    if (selectFilter) {
      let status: any = orderStatusData?.data.filter((data: any) => {
        let returnData = data.search_value === selectFilter && data.orderStatus
        return returnData
      })

      if (selectFilter === 'all') {
        filter = { code: { wildcard: `${searchParam}*` }, sellerId: { eq: currentSeller?.sellerId } }
      } else {
        filter = { orderStatus: { eq: status[0]?.orderStatus }, code: { wildcard: `${searchParam}*` }, sellerId: { eq: currentSeller?.sellerId } }
      }
    }

    try {
      const res = await API.graphql<GraphQLQuery<SearchOrdersQuery>>({
        query: searchOrders,
        variables: { limit, from, filter: filter, sort: { direction: 'desc', field: 'createdAt' }, }
      })      
      res.data?.searchOrders?.items.forEach((item) => {
        if (item?.orderDate) {
          item.orderDate = (moment(item?.orderDate).local().format("D-MMM-YY, HH:mm")).toString();
        }
      })
      setOrders(res.data?.searchOrders?.items)
      setTotalOrders(res.data?.searchOrders?.total ?? 0)
      setIsLoading(false);
    } catch (error) {
      console.log("error", error)
    }
  }


  // 34 entries count
  useEffect(() => {
    if (currentSeller?.sellerId) {
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
    const res = await API.graphql<GraphQLQuery<SearchOrdersQuery>>({
      query: searchOrders,
      variables: { limit: 1000, nextToken: token, filter: { sellerId: { eq: currentSeller?.sellerId } } }
    })
    return { count: res?.data?.searchOrders?.items?.length, nextToken: res?.data?.searchOrders?.nextToken };
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
    <div className="row ">
      <div className="col-xl-12 col-12 mb-5">
        {/* card */}
        <div className="card h-100 card-lg">
          <TableHeader statusOptions={orderStatusData?.data[orderStatusData?.data?.length - 2].options || []} searchPlaceholder='Search By Order Number' onChange={(e:any) => { setSearchParam(e.target.value) }} handleChange={(e: any) => setSelectFilter(e.target.value)} />
          {/* card body */}
          {isLoading ?
            (
              <div className="d-flex justify-content-center align-items-lg-center" style={{ height: "30rem" }}>
                <div className="spinner-border primary" role="status">
                </div>
              </div>
            ) :
            (<div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                  <thead className="bg-light">
                    <tr>
                      {orderStatusData?.data[orderStatusData?.data?.length - 1].tableColumn?.map((column) => (
                        <th key={column}>
                          {column}
                        </th>))}
                    </tr>
                  </thead>
                  <>
                    {console.log(currentSeller?.seller,'hello current seller')}
                  </>
                  <tbody>
                    {(currentSeller?.seller?.verified && currentSeller?.seller?.active) ?
                     ( orders && orders?.length !== 0 ? orders!.map((order: Orders) => (
                        <tr key={order.code} onClick={() => window.location.href = `/app/order/${order?.id}`} style={{ cursor: "pointer" }}>
                          <td><a href={`/app/order/${order?.id}`} className="text-reset">{order.code}</a></td>
                          <td>{order.buyer?.name}</td>
                          <td>
                            <span className=
                              {`${orderStatusData?.data?.find((data: any) => data?.orderStatus === order.orderStatus && data?.order_css)?.order_css}`}
                            >{orderStatusData?.data?.find((data: any) => data?.orderStatus === order.orderStatus && data?.order_css)?.search_value}</span>
                          </td>
                          <td>${typeof order.total === "string" ? order.total : order.total.toFixed(2)}</td>
                          <td>{order.orderDate}</td>
                        </tr>
                      ))
                        :
                        <tr className='text-center py-3'>
                          <td colSpan={7}>
                            <h3 className='m-0 text-muted py-4'>
                              <i className="fa fa-warning me-2" />
                              No Orders Available
                            </h3>
                          </td>
                        </tr>) :
                        <td colSpan={7}>
                          <VerifySeller/>
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
  );
}

export default OrderList;