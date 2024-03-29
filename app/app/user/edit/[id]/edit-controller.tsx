'use client'
import { GraphQLQuery } from '@aws-amplify/api';
import { AdminPageHeader, Spinner } from "@/libs/shared/ui/src";
import { API } from 'aws-amplify';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';

interface sellerProps {
    getSellerUser: {
        items: any,
        id: any
    }
}

function Page() {
    const params = useParams()
    const [spinner, showSpinner] = useState(true)
    const [buttonSpinner, showButtonSpinner] = useState<boolean>(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
    });

    useEffect(() => {
        if (params?.id) {
            fetchData(params?.id)
        }
    }, [])

    const fetchData = async (id: any) => {
        showSpinner(true)
        try {
            const seller = await API.graphql<GraphQLQuery<sellerProps>>({
                query: getSellerUser,
                variables: {
                    id: id
                }
            })
            if (seller?.data?.getSellerUser) {
                const item: any = seller?.data?.getSellerUser
                setFormData({
                    name: item?.user?.name,
                    email: item?.user?.email,
                    role: item?.role,
                })
            }
            showSpinner(false)
        } catch (error) {
            showSpinner(false)
        }

    }

    const onSubmit = async (e: any) => {
        e.preventDefault()
        showButtonSpinner(true)
        try {
            if (params?.id) {
                const seller = await API.graphql<GraphQLQuery<sellerProps>>({
                    query: updateSellerUser,
                    variables: {
                        input: {
                            id: params?.id,
                            role: formData?.role
                        }
                    }
                })

                if (seller) {
                    toast.success("User updated successfully")
                    setTimeout(() => {
                        window.location.href = '/app/user'
                        showButtonSpinner(false)
                    }, 2000)
                }
            } else {
                toast.error("Something went wrong, Please try again later")
                showButtonSpinner(false)
            }
        } catch (error) {
            toast.error("Something went wrong, Please try again later")
            showButtonSpinner(false)
        }
    }

    const handleChange = (e: any) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <AdminPageHeader name='Update User' buttonName={'Back'} link={'/app/user'} />
            <div className={'container'}>
                <Spinner show={spinner}>
                    <form onSubmit={onSubmit}>
                        <div className="form-group pb-3">
                            <label className="form-label">
                                Name<span className="text-danger">*</span>
                            </label>
                            <input
                                className="form-control "
                                type="text"
                                name="name"
                                value={formData?.name}
                                style={{ cursor: 'not-allowed' }}
                                disabled
                            />
                        </div>
                        <div className="form-group pb-3">
                            <label className="form-label">
                                Email<span className="text-danger">*</span>
                            </label>
                            <input
                                className="form-control "
                                type="text"
                                name="email"
                                value={formData?.email}
                                style={{ cursor: 'not-allowed' }}
                                disabled
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
                            >
                                <option selected disabled>
                                    Select Role
                                </option>
                                <option value={'OWNER'}>Owner</option>
                                <option value={'VIEWER'}>Viewer</option>
                                <option value={'EDITOR'}>Editor</option>
                            </select>
                        </div>
                        <Spinner show={buttonSpinner}>
                            <button className="btn btn-dark" type="submit">Update</button>
                        </Spinner>
                    </form>
                </Spinner>
            </div>
        </>
    )
}

export default Page

const getSellerUser = /* GraphQL */ `query GetSellerUser($id: ID!) {
    getSellerUser(id: $id) {
      id
      sellerId
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
      role
      createdAt
      updatedAt
      __typename
    }
  }
  `

const updateSellerUser = /* GraphQL */ `mutation UpdateSellerUser(
    $input: UpdateSellerUserInput!
    $condition: ModelSellerUserConditionInput
  ) {
    updateSellerUser(input: $input, condition: $condition) {
      id
      sellerId
      userId
      role
      createdAt
      updatedAt
      __typename
    }
  }
  `