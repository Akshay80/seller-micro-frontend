'use client'
import { API } from 'aws-amplify';
import moment from 'moment';
import { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select';
import shipment from '../../../../data/shipment.json';
import { useParams } from 'next/navigation';

const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    code
    items
    rating
    buyerId
    buyer {
      id
      buyerType
      name
      profile
      phone
      email
      address
      images
      documents
      categories
      rating
      age
      gender
      createdAt
      updatedAt
      buyerCartId
      __typename
    }
    sellerId
    seller {
      id
      name
      profile
      image
      phone
      email
      website
      address
      images
      rating
    }
    paymentId
    payment {
      id
      buyerId
      userId
      amount
      currency
      status
      paymentIntentId
      paymentIntent
      createdAt
      updatedAt
      __typename
    }
    userId
    user {
      id
      name
      photo
      phone
      email
      role
      deleted
      createdAt
      updatedAt
      __typename
    }
    phone
    currency
    taxTotal
    deliveryTotal
    subTotal
    total
    reason
    pickupAddress
    billingAddress
    deliveryAddress
    orderStatus
    changeLog
    shipmentDetails
    orderDate
    extCarrierId
    serviceCode
    extShipmentId
    rateId
    specialInstructions
    deliveryInstructions
    createdAt
    updatedAt
    __typename
  }
}
` ;

const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
    id
  }
}
`;

export default function OrderDetails({ params }: any) {
  const orderStatusData = require('../../../../data/order_status.json')
  const { id } = useParams()
  const [orderItems, setOrderItems] = useState([])
  const [orderCharges, setOrderCharges] = useState({
    subTotal: 0,
    taxTotal: 0,
    deliveryTotal: 0,
    total: 0,
  })
  const [buyerDetails, setBuyerDetails] = useState({ name: "", email: "", phone: "" })
  const [deliveryAddress, setDeliveryAddress] = useState({ address_line1: "", address_line2: "", city: "", state: "", postal_code: "", country: "" })
  const [orderDetails, setOrderDetails] = useState({ orderId: "", orderStatus: "", orderDate: "", orderTotal: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState("")

  const fetchOrder = async () => {
    setIsLoading(true)
    try {
      const { data } = await API.graphql<any>({ query: getOrder, variables: { id: id } })
      setOrderItems(data?.getOrder?.items && JSON.parse(data?.getOrder?.items));
      setBuyerDetails(data?.getOrder?.buyer);
      setDeliveryAddress(JSON.parse(data?.getOrder?.deliveryAddress ?? ""));
      setOrderDetails({
        orderId: data?.getOrder?.code ?? "",
        orderDate: data?.getOrder?.orderDate ?? "",
        orderStatus: data?.getOrder?.orderStatus ?? "",
        orderTotal: data?.getOrder?.total ?? 0
      });
      setOrderCharges({
        subTotal: data?.getOrder?.subTotal ?? 0,
        taxTotal: data?.getOrder?.taxTotal ?? 0,
        total: data?.getOrder?.total ?? 0,
        deliveryTotal: data?.getOrder?.deliveryTotal ?? 0,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("Error Get Order", error)
    }
  }

  async function updateOrderfn() {
    try {
      const orderStatus = status === "accept" ? "READY_FOR_PICKUP" : "CANCELLED"
      const msg = status === "accept" ? "accepted" : "rejected"
      await API.graphql({ query: updateOrder, variables: { input: { id, orderStatus } } })
      status === "accept" ? toast.success(`Order has been ${msg}.`) : toast.error(`Order has been ${msg}.`)
      setOrderDetails((prev) => ({ ...prev, orderStatus }))
      setShow(false)
    } catch (e) {
      console.log(e)
    }
  }

  async function updateOrderStatus(status: any) {
    try {
      await API.graphql({ query: updateOrder, variables: { input: { id, orderStatus: status, shipmentDetails: JSON.stringify(shipment) } } })
      toast.success(`Order status has been updated to ${status}.`)
      setOrderDetails((prev) => ({ ...prev, orderStatus: status }))
    } catch (error) {
      toast.error("Failed to update order.")
      console.log(error)
    }
  }

  useEffect(() => {
    if (id) {
      fetchOrder();
    }
  }, [])

  return (
    <>
      <div>
        <Toaster />
        <div className='text-end py-5'>
          <button className='btn btn-dark' onClick={() => window.location.href = '/app/order'}>Back</button>
        </div>
        <div className="row ">
          <div className="col-xl-12 col-12 mb-5">
            {/* card */}
            <div className="card h-100 card-lg">
              <div className="card-body p-6">
                {isLoading ?
                  (<><div className="d-flex justify-content-center align-items-lg-center h-100">
                    <div className="spinner-border primary" role="status">
                    </div>
                  </div></>) :
                  (<>
                    <div className="d-md-flex justify-content-between">
                      <div className="d-flex align-items-center mb-2 mb-md-0">
                        <h2 className="mb-0">Order ID: {orderDetails.orderId}</h2>
                        <span className={`${orderStatusData?.data?.find((data: any) => data?.orderStatus === orderDetails.orderStatus && data?.order_css)?.order_css} ms-2`}>
                          {orderStatusData?.data?.find((data: any) => data?.orderStatus === orderDetails.orderStatus && data?.order_css)?.search_value}
                        </span>
                      </div>
                      {/* select option */}
                      <div className="mb-2 mb-md-0">
                        {orderDetails?.orderStatus !== "OPEN" && (
                          <Select
                            placeholder="Change Order Status"
                            options={orderStatusData?.filter ? orderStatusData?.filter : []}
                            defaultValue={{ label: orderDetails?.orderStatus, value: orderDetails?.orderStatus }}
                            onChange={(e) => updateOrderStatus(e?.value!)}
                          />
                        )}
                        {orderDetails?.orderStatus === "OPEN" && (
                          <>
                            <button className='btn btn-primary rounded me-1' onClick={() => {
                              setStatus("accept")
                              setShow(true)
                            }}>Accept</button>
                            <button className='btn btn-danger rounded' onClick={() => {
                              setStatus("reject")
                              setShow(true)
                            }}>Reject</button>
                          </>
                        )}
                      </div>
                      {/* button */}
                    </div>
                    <div className="mt-8">
                      <div className="row">
                        {/* address */}
                        <div className="col-lg-4 col-md-4 col-12">
                          <div className="mb-6">
                            <h6>Customer Details</h6>
                            <p className="mb-1 lh-lg">{buyerDetails?.name!}<br />
                              {buyerDetails?.email}<br />
                              {buyerDetails?.phone}</p>
                          </div>
                        </div>
                        {/* address */}
                        <div className="col-lg-4 col-md-4 col-12">
                          <div className="mb-6">
                            <h6>Shipping Address</h6>
                            <p className="mb-1 lh-lg">{deliveryAddress?.address_line1}<br />
                              {deliveryAddress?.address_line2}<br />
                              {deliveryAddress?.city}, {deliveryAddress?.state}<br />
                              {deliveryAddress?.postal_code} {deliveryAddress?.country}</p>
                          </div>
                        </div>
                        {/* address */}
                        <div className="col-lg-4 col-md-4 col-12">
                          <div className="mb-6">
                            <h6>Order Details</h6>
                            <p className="mb-1 lh-lg">Order ID: <span className="text-dark">{orderDetails.orderId}</span><br />
                              Order Date: <span className="text-dark">{moment(orderDetails?.orderDate).local().format("D-MMM-YY, HH:mm").toString()}</span><br />
                              Order Total: <span className="text-dark">${orderDetails.orderTotal}</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>)
                }
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    {/* Table */}
                    <table className="table mb-0 text-nowrap table-centered">
                      {/* Table Head */}
                      <thead className="bg-light">
                        <tr>
                          <th>Products</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      {/* tbody */}
                      <tbody>
                        {
                          orderItems && orderItems.map((orderItem: any) => (
                            <tr key={orderItem?.name}>
                              <td>
                                <a href="#" className="text-inherit">
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <img src={orderItem?.thumbnail} className="icon-shape icon-lg" />
                                    </div>
                                    <div className="ms-lg-4 mt-2 mt-lg-0">
                                      <h5 className="mb-0 h6">
                                        {orderItem.name}
                                      </h5>
                                    </div>
                                  </div>
                                </a>
                              </td>
                              <td><span className="text-body">${orderItem?.price?.toFixed(2)}</span></td>
                              <td>{orderItem.quantity}<span> {orderItem.unit}</span></td>
                              <td>${(orderItem.quantity * orderItem.price)?.toFixed(2)}</td>

                            </tr>
                          ))
                        }
                        <tr>
                          <td className="border-bottom-0 pb-0" />
                          <td className="border-bottom-0 pb-0" />
                          <td colSpan={1} className="fw-medium text-dark ">
                            {/* text */}
                            Sub Total :
                          </td>
                          <td className="fw-medium text-dark ">
                            {/* text */}
                            ${orderCharges.subTotal}
                          </td>
                        </tr>
                        <tr>
                          <td className="border-bottom-0 pb-0" />
                          <td className="border-bottom-0 pb-0" />
                          <td colSpan={1} className="fw-medium text-dark ">
                            {/* text */}
                            Tax Total :
                          </td>
                          <td className="fw-medium text-dark ">
                            {/* text */}
                            ${orderCharges.taxTotal ?? 0}
                          </td>
                        </tr>
                        <tr>
                          <td className="border-bottom-0 pb-0" />
                          <td className="border-bottom-0 pb-0" />
                          <td colSpan={1} className="fw-medium text-dark ">
                            {/* text */}
                            Shipping Cost
                          </td>
                          <td className="fw-medium text-dark  ">
                            {/* text */}
                            ${orderCharges.deliveryTotal ?? 0}
                          </td>
                        </tr>
                        <tr>
                          <td />
                          <td />
                          <td colSpan={1} className="fw-semi-bold text-dark ">
                            {/* text */}
                            <strong>Grand Total</strong>
                          </td>
                          <td className="fw-semi-bold text-dark ">
                            {/* text */}
                            <strong> ${orderCharges.total}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          d</div>
      </div>
      <Modal centered size='sm' show={show} onHide={() => setShow(false)}>
        <form onSubmit={(e) => {
          e.preventDefault()
          updateOrderfn()
        }}>
          <Modal.Header>
            <Modal.Title className='mx-auto'>Are you Sure ?</Modal.Title>
          </Modal.Header>
          <Modal.Footer className='d-flex justify-content-center '>
            <Button variant="light" onClick={() => setShow(false)}>No</Button>
            <Button type="submit"> Yes</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}
