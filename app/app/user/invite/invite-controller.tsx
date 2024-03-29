'use client';

import { GraphQLQuery } from '@aws-amplify/api';
import { Spinner } from '@/libs/shared/ui/src/lib/spinner/spinner';
import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface searchUsersProps {
  searchUsers?: {
    items: any;
    total?: number;
    nextToken: string | null;
  } | null;
}

interface SellerUsersBySellerIdProps {
  sellerUsersBySellerId: {
    items: {
      id: string | null
      sellerId: string | null
      userId: string | null
      role: string | null
      createdAt: string | null
      user: {
        email: string | null
        id: string | null
        name: string | null
        photo: string | null
        role: string | null
        deleted: boolean | null
      }
    }[]
    nextToken: string | null
  }
}


const InviteController = () => {
  const [seller, setSeller] = useState<any>()
  const [spinner, showSpinner] = useState(false)
  const [formData, setFormData] = useState<any>({
    name: '',
    email: '',
    role: '',
    password: 'X@5d#9qM'
  });

  useEffect(() => {
    let sellerUser = JSON.parse(localStorage.getItem('seller') || '')
    setSeller(sellerUser)
  }, [])

  const handleChange = (e: any) => {
    setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    showSpinner(true)
    let flag = false
    try {
      let userDetails = await API.graphql<GraphQLQuery<any>>({
        query: searchUsers,
        variables: {
          filter: { email: { eq: formData.email.trim().toLowerCase() } }
        }
      })
      if (userDetails?.data?.searchUsers?.items?.length > 0) {
        flag = true
        const sellerData: any = await API.graphql<GraphQLQuery<SellerUsersBySellerIdProps>>({
          query: customSellerUsersBySellerId,
          variables: {
            sellerId: seller?.sellerId,
            sort: { direction: 'desc', field: 'createdAt' },
          }
        })
        const allSellerData = sellerData?.data?.sellerUsersBySellerId?.items
        if (allSellerData?.length > 0) {
          const filter = allSellerData?.filter((item: any) => item?.user?.email === formData?.email);
          if (filter?.length > 0) {
            toast.error('User already exist');
            showSpinner(false)
            return;
          }
        }
      } if (!flag) {
        const signUpUser = await Auth.signUp({
          username: formData.email,
          password: formData.password,
        })
        if (signUpUser?.userSub) {
          const userCreate = await API.graphql<GraphQLQuery<any>>({
            query: createUser,
            variables: {
              input: {
                id: signUpUser?.userSub,
                name: formData?.name,
                email: formData?.email.trim().toLowerCase(),
              }
            }
          })
          if (userCreate?.data?.createUser?.id) {
            const sellerUserCreate = await API.graphql<GraphQLQuery<any>>({
              query: createSellerUser,
              variables: {
                input: {
                  userId: userCreate?.data?.createUser?.id,
                  sellerId: seller?.sellerId,
                  role: formData?.role
                }
              }
            })
            toast.success('User Invited successfully')
            setTimeout(() => {
              showSpinner(false)
              window.location.href = '/app/user'
            }, 2000)
          }
        }
      } else {
        const sellerUserCreate = await API.graphql<GraphQLQuery<any>>({
          query: createSellerUser,
          variables: {
            input: {
              userId: userDetails?.data?.searchUsers?.items[0]?.id,
              sellerId: seller?.sellerId,
              role: formData?.role
            }
          }
        })
        toast.success('User Invited successfully')
        setTimeout(() => {
          window.location.href = '/app/user'
        }, 2000)
      }

    } catch (err: any) {
      console.log(err)
      toast.error(err.message)
      showSpinner(false)
    }
  };

  return (
    <>
      <div className={'container'}>
        <div className="row mb-8">
          <div className="col-md-12">
            <div className="d-lg-flex justify-content-between align-items-center">
              <div>
                <h2>Invite User</h2>
              </div>
              <a href='/app/user'>
                <button className='btn btn-dark'>Back</button>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group pb-3">
            <label className="form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              className="form-control "
              type="text"
              name="name"
              onChange={handleChange}
              value={formData?.name}
              required
            />
          </div>
          <div className="form-group pb-3">
            <label className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              className="form-control "
              type="email"
              name="email"
              onChange={handleChange}
              value={formData?.email}
              required
            />
          </div>
          <div className="form-group pb-3">
            <label className="form-label">
              Role<span className="text-danger">*</span>
            </label>
            <select
              className="form-control "
              name="role"
              onChange={handleChange}
              value={formData?.role}
              required
            >
              <option value="" selected disabled>
                Select Role
              </option>
              <option value={'OWNER'}>Owner</option>
              <option value={'VIEWER'}>Viewer</option>
              <option value={'EDITOR'}>Editor</option>
            </select>
          </div>
          <Spinner show={spinner}>
            <button className="btn btn-dark" type="submit">
              {' '}
              Invite
            </button>
          </Spinner>
        </form>
      </div>
    </>
  );
};

export default InviteController;

const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(
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
        email
      }
    }
  }
`;

const createSellerUser = /* GraphQL */ `
  mutation CreateSellerUser(
    $input: CreateSellerUserInput!
    $condition: ModelSellerUserConditionInput
  ) {
    createSellerUser(input: $input, condition: $condition) {
      id
      sellerId
      userId
      role
    }
  }
`;


const customSellerUsersBySellerId = /* GraphQL */ `
  query SellerUsersBySellerId(
    $sellerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSellerUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sellerUsersBySellerId(
      sellerId: $sellerId
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
        createdAt
        updatedAt
         user {
        email
        id
        name
        photo
        role
        deleted
      }
      }
      nextToken
    }
  }
`;

const customCreateUser = /* GraphQL */ `mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      photo
      phone
      email
      role
      deleted
      buyers {
        nextToken
        __typename
      }
      sellers {
        nextToken
        __typename
      }
      devices {
        nextToken
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      payments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
  `

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
}
`
