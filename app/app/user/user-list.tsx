"use client"
import { API } from "aws-amplify";
import { useEffect, useState } from "react"
import usersListData from '../../../data/usersList.json';
import moment from "moment";
import { AdminPageHeader } from "@/libs/shared/ui/src/lib/admin-page-header/admin-page-header";
import { GraphQLQuery } from "@aws-amplify/api";
import toast from "react-hot-toast";

const UserList = () => {

  const [currentSeller, setcurrentSeller] = useState<any>(null)
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let currentSeller = JSON.parse(window.localStorage.getItem("seller") || '');
      setcurrentSeller(currentSeller)
    } else {
      console.log("not avaialable");
    }
  }, []);

  useEffect(() => {
    if (currentSeller?.sellerId) {
      fetchListUsers()
    }
  }, [currentSeller])

  const fetchListUsers = async () => {
    setIsLoading(true)
    try {
      const response = await API.graphql<any>({
        query: searchSellerUsers,
        variables: {
          filter: { sellerId: { eq: currentSeller?.sellerId } },
          sort: { direction: 'desc', field: 'createdAt' },
        }
      });
      response.data?.searchSellerUsers?.items.forEach((item: any) => {
        if (item?.createdAt) {
          item.createdAt = (moment(item?.createdAt).local().format("D-MMM-YY, HH:mm")).toString();
        }
      })
      setUsersList(response?.data?.searchSellerUsers?.items)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const handelRemoveUser = (seller: any, index: any) => {
    setIsLoading(true)
    try {
      if (currentSeller?.user?.id === seller?.user?.id || currentSeller?.role !== 'OWNER') {
        toast.error('User not authorised')
        setIsLoading(false)
        return
      }
      else {
        if (seller?.role !== 'OWNER') {
          const deleteUser = API.graphql<GraphQLQuery<any>>({
            query: deleteSellerUser,
            variables: {
              input: {
                id: seller?.id
              }
            }
          })
          let temp = [...usersList]
          temp.splice(index, 1)
          setUsersList(temp)
          toast.success('User removed successfully')
          setIsLoading(false)
        } else {
          toast.error('')
          setIsLoading(false)
        }
      }

    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  return (
    <div className="row ">
      <AdminPageHeader name='Users' buttonName={'Invite User'} link={'/app/user/invite'} />

      <div className="col-xl-12 col-12 mb-5">
        <div className="card h-100 card-lg">
          {/* <TableHeader statusOptions={usersListData?.data[usersListData?.data?.length - 2].options || []} searchPlaceholder='Search By Product Name' onChange={(e) => { setSearchParam(e.target.value) }}  /> */}

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
                        {usersListData?.data[usersListData?.data?.length - 1].tableColumn?.map((column: any) => (
                          <th key={column}>
                            {column}
                          </th>))}
                      </tr>
                    </thead>
                    <tbody>
                      {
                        usersList.length !== 0 ? (
                          usersList.map((sellerUser: any, index: number) => {
                            return (
                              <tr key={sellerUser?.id}>
                                <td> <img src={sellerUser?.user?.photo || 'https://wtx-cdn.s3.amazonaws.com/img/profile.png'} style={{ width: '50px' }} alt="" className="img-fluid" /> </td>
                                <td>{sellerUser?.user?.name ? sellerUser?.user?.name : 'n/a'}</td>
                                <td>{sellerUser?.user?.email ? sellerUser?.user?.email : 'n/a'}</td>
                                <td>{sellerUser?.user?.phone ? sellerUser?.user?.phone : 'n/a'}</td>
                                <td>{sellerUser?.role ? sellerUser?.role : 'n/a'}</td>
                                <td>{sellerUser?.createdAt ? sellerUser?.createdAt : 'n/a'}</td>
                                <td>
                                  <div className='dropdown'>
                                    <a className='ps-5 nav-link' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
                                      <i className="bi bi-three-dots-vertical"></i>
                                    </a>
                                    <div className='dropdown-menu'>
                                      <a className="nav-link" href={`/app/user/edit/${sellerUser?.id}`}>
                                        <div className='dropdown-item cursor-pointer'>
                                          Edit
                                        </div>
                                      </a>
                                      <div className='dropdown-item cursor-pointer' onClick={() => { handelRemoveUser(sellerUser, index) }}>
                                        Remove User
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr className='text-center py-3'>
                            <td colSpan={7}>
                              <h3 className='m-0 text-muted py-4'>
                                <i className="fa fa-warning me-2" />
                                No Users Available
                              </h3>
                            </td>
                          </tr>
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </div>)
          }

          {/* <div className=" border-top d-md-flex justify-content-between align-items-center px-6 py-6">
          <span>Showing {from + 1} to {from + limit} of {count} entries</span>
          <nav className="mt-2 mt-md-0">
            <ul className="pagination mb-0 ">
              <li onClick={prevPage} className={`btn btn-primary ${from - limit < 0 ? "disabled" : ""}`}><a className="text-light">Previous</a></li>
              <li onClick={nextPage} className={`btn btn-primary ms-2 ${from + limit > totalOrders ? "disabled" : ""}`}><a className="text-light">Next</a></li>
            </ul>
          </nav>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default UserList

const deleteSellerUser = /* GraphQL */ `
  mutation DeleteSellerUser(
    $input: DeleteSellerUserInput!
    $condition: ModelSellerUserConditionInput
  ) {
    deleteSellerUser(input: $input, condition: $condition) {
      id
      sellerId
      seller {
        id
        name
        profile
        image
        taxId
        active
        verified
        phone
        email
        website
        address
        attributes
        images
        documents
        rating
        bank
        age
        gender
        industryId
        businessId
        createdAt
        updatedAt
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
      }
      role
      createdAt
      updatedAt
    }
  }
`;

const searchSellerUsers = /* GraphQL */ `
  query SearchSellerUsers(
    $filter: SearchableSellerUserFilterInput
    $sort: [SearchableSellerUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableSellerUserAggregationInput]
  ) {
    searchSellerUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        sellerId
        userId
        role
        createdAt
        updatedAt
        __typename
        user {
            name
            id
            email
            photo
            role
            phone
            createdAt
          }
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