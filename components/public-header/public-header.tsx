"use client"

import { Auth } from 'aws-amplify';
import headerData from '../../data/header.json';
import {useEffect,useState} from "react"


export function PublicHeader() {
  const [loggedIn,setLoggedIn] = useState(false)
  const [cognitoData,setCognitoData] = useState<any>({})

  async function checkAuth() {
    try {
      let res = await Auth.currentAuthenticatedUser()
      setCognitoData(res?.attributes)
      setLoggedIn(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  async function handleLogout() {
    try {
      Auth.signOut()
      window.localStorage.clear()
      window.location.href = "/"
      setLoggedIn(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='pt-sm-5 px-sm-4 px-lg-0 pt-lg-0 '>
      <div className='border-bottom '>
        <div className='pb-3'>
          <div className='row w-100 align-items-center gx-lg-2 gx-0'>
            <div className='col-xxl-2 col-lg-3'>
              <div className='d-flex justify-content-between w-100 d-lg-none'>
                <a className='navbar-brand' href='/'>
                  <img src='https://wtx-cdn.s3.amazonaws.com/img/wtx-logo.png' alt='' width={200} />
                </a>
                <div className='d-flex align-items-center lh-1 gap-2'>
                  <div className='d-flex align-items-center gap-3'>
                    <a className='cursor-pointer' href='/login'>Sign In</a>
                    <button type='button' className='btn btn-outline-dark btn-radius btn-padding'>Upgrade</button>
                    <a className='btn btn-dark btn-radius' type='submit' href='/register'>Start Selling</a>
                  </div>
                  <button className='navbar-toggler collapsed' type='button' data-bs-toggle='offcanvas' data-bs-target='#navbar-default' aria-controls='navbar-default' aria-label='Toggle navigation'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' className='bi bi-text-indent-left text-dark' viewBox='0 0 16 16'>
                      <path d='M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z'></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <nav className='navbar navbar-expand-lg navbar-light navbar-default py-3' aria-label='Offcanvas navbar large'>
            <div className='offcanvas offcanvas-start' tabIndex={-1} id='navbar-default' aria-labelledby='navbar-defaultLabel'>
              <div className='offcanvas-header pb-1'>
                <img src='https://wtx-cdn.s3.amazonaws.com/img/wtx-logo.png' alt='eCommerce HTML Template' width={400} />
                <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
              </div>
              <div className='offcanvas-body'>
                <div className='d-block d-lg-none mb-4'>
                  <div className='text-center'>
                    <a className='nav-link' href='/'>
                      <img src='https://wtx-cdn.s3.amazonaws.com/img/wtx-logo.png' alt='' width={250} height={40} />
                    </a>
                  </div>
                </div>
                <div className='me-3 d-none d-lg-block'>
                  <ul className='navbar-nav align-items-center '>
                    <li className='nav-item dropdown w-100 w-lg-auto'>
                      <a className='nav-link' href='/'>
                        <img src='https://wtx-cdn.s3.amazonaws.com/img/wtx-logo.png' alt='' width={200} height={40} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                  <ul className='navbar-nav align-items-center'>
                    {
                      headerData?.map((data: any, index: number) => (
                        data?.subMenu?.length ?
                          <li className='nav-item dropdown w-100 w-lg-auto' key={index}>
                            <a className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                              {data?.label}
                            </a>
                            <ul className='dropdown-menu'>
                              {data?.subMenu?.map((subData: any, index: number) => (
                                <li key={index}>
                                  <a className='dropdown-item cursor-pointer' href={subData?.link}>
                                    {subData?.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li> :
                          <li className='nav-item w-100 w-lg-auto cursor-pointer' key={index}>
                            <a className='nav-link' href={data?.link} >
                              {data?.label}
                            </a>
                          </li>
                      ))
                    }
                    {
                      loggedIn &&
                      <li className='nav-item dropdown w-100 w-lg-auto'>
                          <a className='nav-link dropdown-item cursor-pointer text-dark' href='/sso'>Dashboard</a>
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <div className='me-4 d-none d-xl-block d-lg-block'>
          {loggedIn ? (
          <>
          <span className='mx-3 fw-bold'>Welcome {cognitoData?.name}</span>
          <button className='btn btn-dark btn-radius' type='submit' onClick={handleLogout}>Logout</button>
          </>)
            :
            <div className='d-flex align-items-center gap-3 pe-3'>
              <a className='text-dark cursor-pointer' href='/login'>Sign In</a>
              <a className='btn btn-dark btn-radius' type='submit' href='/register'>Start Selling</a>
            </div>
          }
            
          </div>
        </div>
      </div>
    </div >
  );
}

export default PublicHeader;