'use client';

import { GraphQLQuery } from '@aws-amplify/api';
import Spinner from '../../../libs/shared/ui/src/components/spinner/spinner';
import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

const SsoControl = () => {
    const [spinner, showSpinner] = useState<boolean>(true)

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(async (user: any) => {
            const sellers: any = await API.graphql<GraphQLQuery<any>>({
                query: sellerUsersByUserId,
                variables: {
                    userId: user.attributes.sub
                }
            })
            if (sellers.data?.sellerUsersByUserId?.items?.length > 0) {
                localStorage.setItem('sellers', JSON.stringify(sellers.data?.sellerUsersByUserId?.items))
                localStorage.setItem('seller', JSON.stringify(sellers?.data?.sellerUsersByUserId?.items[0]))
              if (sellers.data?.sellerUsersByUserId?.items.some((data: any) => data?.seller?.verified && data?.seller?.active)){
                window.location.href = '/app/dashboard';
              }else{
                window.location.href = '/account-pending'
              }
            } else {
                localStorage.setItem('sellers', JSON.stringify([]))
                localStorage.setItem('seller', JSON.stringify({}))
                window.location.href = '/onboarding';
            }

            showSpinner(false)
        }).catch((error: any) => {
            console.error('error', error)
        })
    }, [])

    return (
        <div className='col-12 col-md-6 col-xl-4 my-5 offset-md-3 offset-xl-4'>
            <Spinner show={spinner}>
                <div className='text-center my-5'>
                    Please wait
                </div>
            </Spinner>
        </div>
    )
}

export default SsoControl;

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
          active
          verified
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