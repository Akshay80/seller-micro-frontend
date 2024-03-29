'use client'
import { API, GraphQLQuery } from '@aws-amplify/api';
import { useEffect, useState } from 'react'
import Spinner from '../../../libs/shared/ui/src/components/spinner/spinner';
import DoughnutChart from '../../../libs/shared/ui/src/lib/chart/chart';
import Linechart from '../../../libs/shared/ui/src/lib/line-chart/chart';
import VerifySeller from '../../../components/verify-seller/verify-seller';
import moment from 'moment';

const DashboardControl = () => {
    const [currentSeller, setCurrentSeller] = useState<any>()
    const [ordersData, setOrdersData] = useState<any>([])
    const [chatObject, setChatObject] = useState<any>()
    const [totalOrders, setTotalOrders] = useState(0)
    const [spinner, showSpinner] = useState<boolean>(true)
    const [fakeData, setFakeData] = useState({
        "dataSet": [
            10,
            10,
            10,
            10,
            10,
            10,
            10,
            null,
            null
        ],
        "labels": [
            "OPEN",
            "READY_FOR_PICKUP",
            "IN_TRANSIT",
            "DELIVERED",
            "RETURNED",
            "CLOSED",
            "CANCELLED",
            "RETURN_REQUESTED",
            "RETURN_ACCEPTED"
        ]
    })

    useEffect(() => {
        let temp = (JSON.parse(localStorage?.getItem('seller') || ''))
        setCurrentSeller(temp)
    }, [])

    useEffect(() => {
        if (currentSeller?.sellerId) {
            const fetchData = async () => {
                await getData();
            };
            fetchData();
        }
    }, [currentSeller]);

    useEffect(() => {
        if (ordersData?.length > 0) {
            const statusCount = countOrderStatus();
            const resultObject = createResultObject(statusCount);
            setChatObject(resultObject);
        }
    }, [ordersData]);

    const getData = async (nextToken: string | null = null) => {
        let count = 0;
        do {
            const result: any = await numberOfOrders(nextToken);
            result.data.length > 0 && setOrdersData([...ordersData, ...result?.data]);
            count += result?.total
            nextToken = result?.nextToken;
        } while (nextToken);
        setTotalOrders(count);
        showSpinner(false)
    }

    const numberOfOrders = async (token: string | null) => {
        try {
            const res = await API.graphql<GraphQLQuery<any>>({
                query: searchOrders,
                variables: { limit: 1000, nextToken: token, filter: { sellerId: { eq: currentSeller?.sellerId } } }
            })
            return { data: res?.data?.searchOrders?.items, nextToken: res?.data?.searchOrders?.nextToken, total: res?.data?.searchOrders?.items?.length };
        } catch (err) {
            console.log(err)
            showSpinner(false)
        }
    }

    const countOrderStatus = () => {
        const statusCounts: any = {
            OPEN: 0,
            READY_FOR_PICKUP: 0,
            IN_TRANSIT: 0,
            DELIVERED: 0,
            RETURNED: 0,
            CLOSED: 0,
            CANCELLED: 0
        };

        ordersData.forEach((order: any) => {
            statusCounts[order.orderStatus]++;
        });

        return statusCounts;
    }

    const createResultObject = (statusCounts: any) => {
        const dataSet = Object.values(statusCounts);
        const labels = Object.keys(statusCounts);
        return {
            dataSet,
            labels
        };
    }

    const getOrderTotal = () => {
        const result = ordersData.length > 0 && ordersData?.reduce((acc: any, curr: any) => {
            const orderTotal = typeof curr.total === "number" ? curr.total : 0;
            return acc + orderTotal;
        }, 0)
        return result || 0;
    }

    const getOrderStatusColor = (status: any) => {
        switch (status) {
            case 'OPEN':
                return 'bg-light-primary';
            case 'READY_FOR_PICKUP':
                return 'bg-light-success';
            case 'IN_TRANSIT':
                return 'bg-light-warning';
            case 'DELIVERED':
                return 'bg-light-info';
            case 'CANCELLED':
                return 'bg-light-danger';
            case 'RETURN_REQUESTED':
                return 'bg-light-purple';
            case 'RETURN_ACCEPTED':
                return 'bg-light-orange';
            case 'RETURNED':
                return 'bg-light-teal';
            case 'CLOSED':
                return 'bg-light-dark';
            default:
                return 'bg-light-primary';
        }
    }

    const countUniqueBuyerIds = (data: any) => {
        const uniqueBuyerIds = new Set();
        data.forEach((order: any) => {
            uniqueBuyerIds.add(order.buyerId)
        });
        return uniqueBuyerIds.size;
    }

    const uniqueBuyerCount = countUniqueBuyerIds(ordersData);

    return (
        <section>
            <div className='card bg-light border-0 rounded-top' style={{ backgroundImage: 'url(https://freshcart.codescandy.com/assets/images/slider/slider-image-1.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right' }}>
                <div className='card-body p-lg-12'>
                    <h1>Welcome back!</h1>
                    <p>The Leading E-commerce Platform for Trade</p>
                    <a href="/app/product/create" className="btn btn-primary mb-2">Create Product</a>
                </div>
            </div>
            <div className=''>
                <Spinner show={spinner}>
                    {
                        (!currentSeller?.seller?.verified || !currentSeller?.seller?.active) &&
                        <VerifySeller />
                    }
                    <div className="table-responsive-xl mb-6 mb-lg-0 mt-5">
                        <div className="row flex-nowrap pb-3 pb-lg-0">
                            <div className="col-lg-4 col-12 mb-6">
                                {/* card */}
                                <div className="card h-100 card-lg">
                                    {/* card body */}
                                    <div className="card-body p-6">
                                        {/* heading */}
                                        <div className="d-flex justify-content-between align-items-center mb-6">
                                            <div>
                                                <h4 className="mb-0 fs-5">Total Earnings</h4>
                                            </div>
                                            <div className="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
                                                <i className="bi bi-currency-dollar fs-5" />
                                            </div>
                                        </div>
                                        {/* project number */}
                                        <div className="lh-1">
                                            <h1 className="mb-2 fw-bold fs-2">${getOrderTotal()?.toFixed(2)}</h1>
                                            <span>Monthly revenue</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 mb-6">
                                {/* card */}
                                <div className="card h-100 card-lg">
                                    {/* card body */}
                                    <div className="card-body p-6">
                                        {/* heading */}
                                        <div className="d-flex justify-content-between align-items-center mb-6">
                                            <div>
                                                <h4 className="mb-0 fs-5">Total Orders</h4>
                                            </div>
                                            <div className="icon-shape icon-md bg-light-warning text-dark-warning rounded-circle">
                                                <i className="bi bi-cart fs-5" />
                                            </div>
                                        </div>
                                        {/* project number */}
                                        <div className="lh-1">
                                            <h1 className="mb-2 fw-bold fs-2 ms-2"> <i className="bi bi-bag fs-5" /> {totalOrders > 0 ? ` ${totalOrders}` : '0'}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 mb-6">
                                {/* card */}
                                <div className="card h-100 card-lg">
                                    {/* card body */}
                                    <div className="card-body p-6">
                                        {/* heading */}
                                        <div className="d-flex justify-content-between align-items-center mb-6">
                                            <div>
                                                <h4 className="mb-0 fs-5">Customer</h4>
                                            </div>
                                            <div className="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
                                                <i className="bi bi-people fs-5" />
                                            </div>
                                        </div>
                                        {/* project number */}
                                        <div className="lh-1">
                                            <h1 className="mb-2 fw-bold fs-2">{uniqueBuyerCount}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-6">
                            <div className='card h-100'>
                                <div className='card-header'>
                                    <h4 className='card-header-title py-2 m-0'>{totalOrders > 0 ? `Total Orders (${totalOrders})` : 'No Orders'}</h4>
                                </div>
                                <div className={`card-body`}>
                                    <Linechart data={ordersData || []} total={ordersData?.length} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-6">
                            <div className='card h-100'>
                                <div className='card-header'>
                                    <h4 className='card-header-title py-2 m-0'>{totalOrders > 0 ? `Total Orders (${totalOrders})` : 'No Orders'}</h4>
                                </div>
                                <div className={`card-body`}>
                                    <DoughnutChart data={chatObject || fakeData} total={ordersData?.length} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-6">
                            <div className="card h-100 card-lg">
                                {/* heading */}
                                <div className="p-6">
                                    <h3 className="mb-0 fs-5">Recent Orders</h3>
                                </div>
                                <div className="card-body p-0">
                                    {/* table */}
                                    <div className="table-responsive">
                                        <table className="table table-centered table-borderless text-nowrap table-hover">
                                            <thead className="bg-light">
                                                <tr>
                                                    <th scope="col">Order Number</th>
                                                    <th scope="col">Buyer Name</th>
                                                    <th scope="col">Order Date</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ordersData?.length > 0 ? ordersData?.sort((a: any, b: any) => moment(b?.orderDate).valueOf() - moment(a?.orderDate).valueOf()).slice(0, 5).map((order: any) => {
                                                    const formattedDate = moment(order?.orderDate).format('DD-MMM-YY, HH:mm')
                                                    const statusColorClass = getOrderStatusColor(order?.orderStatus)
                                                    return (
                                                        <tr key={order?.id}>
                                                            <td>#{order?.code}</td>
                                                            <td>{order?.buyer?.name}</td>
                                                            <td>{formattedDate}</td>
                                                            <td>${order?.total}</td>
                                                            <td>
                                                                <span className={`badge ${statusColorClass} text-dark-primary`}>
                                                                    {order?.orderStatus}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    )
                                                }) : '' }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Spinner>
            </div>
        </section>
    );
};

export default DashboardControl;

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
        buyerId
        buyer {
          name
        }
        orderDate
        createdAt
        orderStatus
        total
        code
      }
      total
      nextToken
    }
  }
`;