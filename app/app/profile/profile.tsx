"use client"
import { GraphQLQuery } from '@aws-amplify/api';
import { Spinner } from "../../../libs/shared/ui/src/lib/spinner/spinner";
import { API, Amplify, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import awsmobile from '@/src/aws-exports';
// import profiles from '../../public/Images/profile.svg'

const customGetUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
`;

interface UserDataProps {
    id?: string
    name?: string
    photo?: string | null
    phone?: string | null
    email: string
    role: string | null
    deleted?: boolean | null
}
interface UserProps {
    getUser: UserDataProps
}

const Profile = () => {
    const [spinner, showSpinner] = useState<boolean>(true)
    const [profile, setProfile] = useState<UserDataProps>()

    useEffect(() => {
        Amplify.configure(awsmobile)
        handleGetUser()
    }, [])

    const handleGetUser = async () => {
        try {
            showSpinner(true)
        let user: any = await Auth.currentAuthenticatedUser()
        const currentUser = await API.graphql<GraphQLQuery<UserProps>>({
            query: customGetUser,
            variables: {
                id: user?.username
            }
        })
        if(currentUser?.data?.getUser === null){
            window.location.href = "/"
        }
        setProfile({
            name: currentUser.data?.getUser?.name ? currentUser.data?.getUser?.name : '',
            photo: currentUser?.data?.getUser?.photo ? currentUser?.data?.getUser?.photo : '',
            email: currentUser?.data?.getUser?.email ? currentUser?.data?.getUser?.email :'',
            role: currentUser?.data?.getUser?.role ? currentUser?.data?.getUser?.role : null,
        })
        } catch (error) {
            console.log(error)
            window.location.href = "/"
        }finally{showSpinner(false)}
        
    }

    async function handleLogout() {
        try {
            await Auth.signOut()
            window.localStorage.clear()
            window.location.href = "/"
        } catch (error) {
            console.log(error)
        }
    }

    const handleGoBack = () => {
        history.go(-1)
    }

    return (
            <section className="pt-5">
                <nav className="header">
                    <div className="container">
                        <div className="header-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="col">
                                    <h1 className="header-title">My Profile</h1>
                                </div>
                                <div >
                                    <button className='btn btn-primary' onClick={() => handleGoBack()}>Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-7 col-lg-6'>
                            <div className='card mt-5'>
                                <div className='card-body'>
                                    <Spinner show={spinner}>
                                        <form noValidate>
                                            <div className='form-group py-3'>
                                                <label className='form-label'>
                                                    Full Name<span className='text-danger'>*</span>
                                                </label>
                                                <input className='form-control' type='text' name='name' placeholder='e.g. John Doe' value={profile?.name} disabled />
                                            </div>
                                            <div className='form-group pb-3'>
                                                <label className='form-label'>Role<span className='text-danger'>*</span></label>
                                                <input className='form-control bg-light' type='text' name='title' value={profile?.role ? profile?.role : 'No Role'} disabled />
                                            </div>
                                            <div className='form-group pb-3'>
                                                <label className='form-label'>
                                                    Email Address<span className='text-danger'>*</span>
                                                </label>
                                                <input className='form-control bg-light' disabled type='text' name='email' placeholder='e.g. address@example.com' value={profile?.email} />
                                            </div>
                                        </form>
                                        <button type='button' onClick={handleLogout} className='btn btn-primary'>Logout</button>
                                    </Spinner>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5 col-lg-6 d-none d-lg-flex'>
                            {/* <img src={profiles?.svg} className='img-fluid' alt='...' data-aos='fade-up' data-aos-delay='100' /> */}
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Profile