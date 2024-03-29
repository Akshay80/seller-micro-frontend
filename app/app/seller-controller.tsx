'use client';
import { GraphQLQuery } from '@aws-amplify/api';
import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

const SellerController = () => {
    const [seller, setSeller] = useState<any>({})
    const [sellers, setSellers] = useState<any>({})
    const [user,setUser] = useState<any>({})

    useEffect(() => {
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                let currentSellerId = JSON.parse(window.localStorage.getItem("seller") || '');
                let allSellers = JSON.parse(window.localStorage.getItem("sellers") || '');
                setSeller(currentSellerId)
                setSellers(allSellers)
            } else {
                console.log("not avaialable");
            }
            getUserInfo()
        } catch (error) {
            window.location.href = "/"
          console.log(error)
        }
    }, [])

    async function getUserInfo() {
        try {
            let user: any = await Auth.currentAuthenticatedUser()
            const currentUser = await API.graphql<GraphQLQuery<any>>({
                query: customGetUser,
                variables: {
                    id: user?.attributes?.sub
                }
            })
            setUser(currentUser?.data?.getUser)
        } catch (error) {
            console.log(error)
            window.location.href = "/"
        }
    }

    const handleGetPresentSeller = async (data: any) => {
        try {
            const presentSellerData: any = await API.graphql<GraphQLQuery<any>>({
                query: sellerUsersByUserId,
                variables: {
                    filter: { sellerId: { eq: data?.sellerId } },
                    userId: seller?.userId,
                },
            });
            localStorage.setItem('seller', JSON.stringify(presentSellerData?.data?.sellerUsersByUserId?.items[0]))
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };

    async function handleLogout() {
        try {
            await Auth.signOut()
            window.localStorage.clear()
            window.location.href = "/"
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <ul className="list-unstyled d-flex align-items-center mb-0 ms-5 ms-lg-0">
                <p className='mt-3'>Welcome, {user?.name}</p>
                <li className="dropdown ms-4">
                    <a
                        href=""
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {seller?.seller?.image ? (
                            <img
                                src={seller?.seller?.image}
                                width={200}
                                alt=""
                                className="avatar avatar-md rounded-circle"
                            />
                        ) : (
                            <img
                                src="https://wtx-cdn.s3.amazonaws.com/img/profile.png"
                                width={200}
                                alt=""
                                className="avatar avatar-md rounded-circle"
                            />
                        )}
                    </a>
                    <div className="dropdown-menu dropdown-menu-end p-0">
                        <div className="border-top px-1 py-1">
                            <div>
                                {sellers?.length > 0 &&
                                    <>
                                        <ul className="list-unstyled px-2 py-3">
                                            {sellers?.map((item: any, index: number) => (
                                                <li key={index} className="mb-1">
                                                    <div
                                                        className="d-flex gap-1 align-items-center cursor-pointer"
                                                        onClick={() => handleGetPresentSeller(item)}
                                                    >
                                                        <img
                                                            src={item?.seller?.image || "https://wtx-cdn.s3.amazonaws.com/img/profile.png"}
                                                            alt=""
                                                            width={200}
                                                            className="avatar avatar-md rounded-circle"
                                                        />
                                                        <p>{item?.seller?.name}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <hr className="p-0 m-0" />
                                    </>
                                }
                                <ul className="list-unstyled py-3">
                                    <li>
                                        <a className="dropdown-item" style={{ cursor: "pointer" }} href="/app/profile">
                                            Profile
                                        </a>
                                    </li>
                                    <li >
                                        <button className="dropdown-item" style={{ cursor: "pointer" }} onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                    {/* <LogoutPage /> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SellerController;

const sellerUsersByUserId = /* GraphQL */ `
  query SellerUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSellerUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sellerUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sellerId
        userId
        role
        seller {
          age
          address
          email
          image
          documents
          name
          phone
          profile
          rating
          verified
          active
        }
        user {
          email
          id
          deleted
          phone
          photo
          role
          name
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

const customGetUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
    }
  }
`;