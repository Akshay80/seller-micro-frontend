'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import Spinner from '../../../libs/shared/ui/src/components/spinner/spinner';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

export default function RegisterControl() {
    const [spinner, showSpinner] = useState<boolean>(true)

    useEffect(() => {
        Auth.currentAuthenticatedUser().then((user: any) => {
            Auth.signOut();
            window.localStorage.clear();
        })
        showSpinner(false);
    }, [])


    
    const components: any = {
        Header() {
            return (
                <div className='text-center'>
                    <h1 className='text-dark mb-2'>Start Selling</h1>
                </div>
            )
        },
        Footer() {
            <div className='text-muted text-center fs-6'>
                Already have an account yet? <span onClick={() => window.location.href = '/login'} className='text-blue cursor-pointer fs-6' >Sign In</span>
            </div>
        }
    };

    const formFields = {
        signUp: {
            name: {
                order: 1,
                isRequired: true,
                label: 'Your Name *',
                placeholder: 'Enter your full name',
            },
            email: {
                order: 2,
                isRequired: true,
                label: 'Business Email *',
                placeholder: 'Enter your business email',
            },
            password: {
                order: 4,
                isRequired: true,
                placeholder: 'Enter your password',
            },
            confirm_password: {
                order: 5,
                isRequired: true,
                placeholder: 'Please confirm your password',
            },
        },
    }

    return (
        <div className='col-12 col-md-6 col-xl-4 my-5 offset-md-3 offset-xl-4'>
            <Spinner show={spinner}>
                <Authenticator formFields={formFields} initialState='signUp' components={components}>
                    {
                        ({ user }) => {
                            if (user) window.location.href = '/sso';
                            return <></>
                        }
                    }
                </Authenticator>
            </Spinner>
        </div>
    )
}