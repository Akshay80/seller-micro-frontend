/* eslint-disable */
// @ts-nocheck
'use client'
import { GraphQLQuery } from '@aws-amplify/api';
import { Spinner } from '@/libs/shared/ui/src/lib/spinner/spinner';
import Star from '../../../components/star/star';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

interface ProductItem {
    active: boolean,
    createdAt: string,
    productCategory: {
        name: string
    },
    id: string,
    image: string,
    listPrice: number,
    name: string,
    tierPrice: string,
    unitPrice: number
}

interface Products {
    items: ProductItem[],

}

interface Seller {
    id: string,
    name?: string | null,
    profile?: string | null,
    image?: string | null,
    active?: boolean | null,
    verified?: boolean | null,
    phone?: string | null,
    email?: string | null,
    address?: string | null,
    images?: string | null,
    documents?: string | null,
    rating?: number | null,
    products?: Products,
    createdAt: string,
    updatedAt: string,
}

interface DeliveryAddress {
    address_line1: string,
    address_line2: string,
    city: string,
    state: string,
    country: string,
    postal_code: string
}

interface Certificate {
    url: string
    type: string
}

export type GetSellerQuery = {
    getSeller?: Seller,
};

const SellerProfileLayout = () => {
    const [currentSeller, setCurrentSeller] = useState()
    const [seller, setSeller] = useState<Seller>()
    const [sellerAddress, setSellerAddress] = useState<DeliveryAddress>()
    const [spinner, showSpinner] = useState<boolean>(true)
    const [image, setImage] = useState<any>()
    const [modal, showModal] = useState(false)
    const [key, setKey] = useState<number>(Math.random())

    useEffect(() => {
        setCurrentSeller(JSON.parse(window.localStorage.getItem("seller") || ''))
    }, [])

    const fetchSeller = async () => {
        let currentSeller: any = JSON.parse(window.localStorage.getItem("seller") || '');

        showSpinner(true)
        try {
            const res = await API.graphql<GraphQLQuery<GetSellerQuery>>({
                query: customGetSeller,
                variables: { id: currentSeller.sellerId }
            });
            const sellerData = res?.data?.getSeller;
            setKey(Math.random())
            if (sellerData) {
                try {
                    let media = sellerData?.images
                    let documents = sellerData?.documents
                    if (media) {
                        let allMedia = JSON.parse(media)
                    }
                    if (documents) {
                        let allDocuments = JSON.parse(documents)
                    }
                    setSeller(sellerData);
                    setSellerAddress(JSON.parse(sellerData?.address || "{}"));
                } catch (error) {
                    console.error("Error parsing JSON data:", error);
                }
            } else {
                console.error("Seller data not found in the response.");
            }
            showSpinner(false)
            setKey(Math.random())
        } catch (error) {
            showSpinner(false)
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchSeller()
    }, [currentSeller])

    return (
        <>
            <Spinner show={spinner}>
                <section key={key}>
                    <div className={'mx-5 mb-5'}>
                        <div className="row">
                            <div className="col mb-3">
                                <h2 className='p-0 m-0'>Seller Details</h2>
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-primary" onClick={() => window.location.href = "/app/seller-profile/edit"}>Edit</button>
                            </div>
                        </div>
                    </div>
                    <section className='pb-4'>
                        <div className='d-lg-flex px-3 pb-3'>
                            <div className="card col p-0 m-0">
                                <div className="card-body ">
                                    <div className="row align-items-center">
                                        <div className="col-md-4 col-12">
                                            <div className="text-center position-relative">
                                                <span>
                                                    <img src={seller?.image ? seller?.image : ''}
                                                        alt="Grocery Ecommerce Template"
                                                        className="mb-3 img-fluid rounded " />
                                                </span>
                                            </div>
                                        </div>
                                        <div className='col-md-8 col-12 flex-grow-1'>
                                            <h2 className='p-0 m-0'>{seller?.name ?? ""}</h2>
                                            <div className="row align-items-center pb-2 ">
                                                <div className="col">
                                                    <h6 className="mb-0">
                                                        Seller Name
                                                    </h6>
                                                </div>
                                                <div className="col-auto">
                                                    <p className="text-muted">
                                                        {seller?.name}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row align-items-center pb-2 ">
                                                <div className="col">
                                                    <h6 className="mb-0">
                                                        Email ID
                                                    </h6>
                                                </div>
                                                <div className="col-auto">
                                                    <p className="text-muted">
                                                        {seller?.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row align-items-center pb-2">
                                                <div className="col">
                                                    <h6 className="mb-0">
                                                        Mobile Number
                                                    </h6>
                                                </div>
                                                <div className="col-auto">
                                                    <p className="text-muted">
                                                        {seller?.phone ? seller?.phone : <>Number not available</>}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row align-items-center  pb-2">
                                                <div className="col">
                                                    <h6 className="mb-0">
                                                        Registered on
                                                    </h6>
                                                </div>
                                                <div className="col-auto">
                                                    <p className="text-muted">
                                                        {seller?.createdAt}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row align-items-center pb-4">
                                                <div className="col">
                                                    <h6 className="mb-0">
                                                        Address
                                                    </h6>
                                                </div>
                                                <div className="col-auto">
                                                    {
                                                        sellerAddress?.address_line1 ? (<p className="text-muted m-0">
                                                            {`${sellerAddress?.address_line1},${sellerAddress?.address_line2},${sellerAddress?.city},${sellerAddress?.postal_code}`}
                                                        </p>)
                                                            : (<p className="text-muted">Address not available</p>)
                                                    }
                                                </div>
                                            </div>
                                            <div className="row align-items-center pb-2">
                                                <div className="col">
                                                    <h6 className="mb-0">
                                                        Owner Rating
                                                    </h6>
                                                </div>
                                                <div className="col-auto">
                                                    {seller?.rating ? <Star rating={seller?.rating} maxRating={5} /> : <p className="text-muted">No Ratings Available</p>}
                                                </div>
                                            </div>
                                            {seller?.verified === true && seller?.active === true &&
                                                <div className="d-flex mt-6 gap-1  justify-content-center">
                                                    <h5 className="text-success">
                                                        Seller Verified
                                                    </h5><i className="bi bi-patch-check text-success"></i>
                                                </div>}

                                            {seller?.verified === false && seller?.active === false &&
                                                <div className="d-flex mt-6 gap-1  justify-content-center">
                                                    <h5 className="text-danger">
                                                        Seller Rejected
                                                    </h5><i className="bi bi-x-octagon-fill text-danger"></i>
                                                </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className="row mx-4">
                                <div className="card pt-3">
                                    <h4>About the company</h4>
                                    {seller?.profile ? <p>  {seller?.profile} </p> : <p>NO DESCRIPTION AVAILABLE</p>}
                                </div>
                            </div>
                        </div>
                        <h4 className='p-3'>Company Awards and Achievements</h4>
                        <div className='row ms-2'>
                            {(seller?.images && JSON.parse(seller?.images || '')?.certificates.length > 0) ? JSON.parse(seller?.images || '')?.certificates?.map((certificate: Certificate) =>
                                <div className="col-lg-3 mb-2">
                                    <div key={certificate.url} className="card p-1">
                                        {certificate?.type === 'image' && certificate?.url && (
                                            <img className="d-block w-100 cursor-pointer" width="200px" height="200px" src={certificate.url} onClick={() => { setImage(certificate); showModal(true) }} alt="Certificate" key={certificate?.url} />
                                        )}
                                        {certificate?.type === 'video' && certificate?.url && (
                                            <video style={{ height: '464px' }} className='cursor-pointer' autoPlay loop muted key={certificate?.url}>
                                                <source src={certificate.url} type='video/mp4' />
                                            </video>
                                        )}
                                        {
                                            certificate?.type === 'document' &&
                                            <a href={certificate.url}>
                                                <img className="d-block w-100" width="200px" height="200px" src='https://wtx-cdn.s3.amazonaws.com/img/pdf.jpg' key={certificate?.url} />
                                            </a>
                                        }
                                    </div>
                                </div>
                            )
                                :
                                <div className="card col-lg-12 p-1 align-items-center justify-content-center" style={{ height: "200px" }}>
                                    <p>No Awards Or Achievements Uploaded</p>
                                </div>
                            }
                        </div>
                        <h4 className='p-3 mt-4'>Registration Certificates</h4>
                        <div className='row ms-2'>
                            {
                                (seller?.documents && JSON.parse(seller?.documents || '').length > 0) ? JSON.parse(seller?.documents)?.map((document: any) =>
                                    <div className='col-lg-3'>
                                        {
                                            document?.medias?.length > 0 && document?.medias?.map((item: any, index: number) => (
                                                <div key={item.url} className="card p-4">
                                                    <div className="d-lg-flex flex-col align-items-center"><h5 className='mt-3 ms-1'>{document?.documentName}</h5></div>
                                                    <img className="d-block w-100" width="200px" height="200px" src={item?.url} onClick={() => { setImage({ url: item?.url, type: 'image' }); showModal(true) }} />
                                                </div>
                                            ))
                                        }
                                    </div>)
                                    :
                                    <div className="card col-lg-12 p-1 align-items-center justify-content-center" style={{ height: "200px" }}>
                                        <p>No Certificates Uploaded</p>
                                    </div>
                            }
                        </div>
                    </section>
                    <Modal show={modal} onHide={() => showModal(false)}>
                        {(image && image?.type === 'image') ?
                            <img className="avatar-img" src={image?.url} alt="..." style={{ 'height': '500px' }} /> :
                            <>
                                <video style={{ height: '464px' }} autoPlay loop muted key={image?.url}>
                                    <source src={image?.url} type='video/mp4' />
                                </video>
                            </>
                        }
                    </Modal>
                </section>
            </Spinner>
        </>
    )
}

export default SellerProfileLayout

const customGetSeller = `
  query GetSeller($id: ID!) {
    getSeller(id: $id) {
      active
      verified
      name
      images
      profile
      rating
      updatedAt
      createdAt
      documents
      email
      id
      image
      address
      phone
      products {
        items {
          active
          createdAt
          productCategory {
            name
          }
          id
          image
          listPrice
          name
          tierPrice
          unitPrice
        }
      }
    }
  }
`;