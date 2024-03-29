/* eslint-disable */
// @ts-nocheck
'use client'
import { GraphQLQuery } from '@aws-amplify/api';
import { AdminPageHeader, Spinner } from '@/libs/shared/ui/src';
import Star from '../../../../components/star/star';
import { API } from 'aws-amplify';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      active
      name
      attributes
      description
      image
      images
      listPrice
      tierPrice
      unitPrice
      weight
      rating 
      stock
      seller {
        id
        name
        email
        address
        profile
        rating
        phone
        website
    }
  }
}
`;
// QUERIES END
export interface IdProps { }

// INTERFACES
interface GetProductQuery {
    getProduct?: Product
};
interface Product {
    id?: string | null;
    active?: boolean | null;
    name?: string | null;
    attributes?: string | null;
    description?: string | null;
    image?: string | null;
    images?: string | null;
    listPrice?: number | null;
    tierPrice?: string | null;
    unitPrice?: number | null;
    weight?: number | null;
    rating?: number | null;
    stock?: number | null;
    seller?: Seller;
}
interface Attribute {
    name: string;
    id: string;
    type: string;
    value: string;
}
interface Address {
    country: string;
    country_code: string;
    address_line1: string | null;
    address_line2: string | null;
    city: string | null;
    latitude: number | null;
    state: string | null;
    label: string | null;
    state_code: string | null;
    postal_code: string | null;
    longitude: number | null;
}
interface Seller {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    address?: string | null;
    profile?: string | null;
    rating?: number | null;
    phone?: string | null;
    website?: string | null;
}
// type Attribute = { name: string | null; value: string };

const ProductDetailLayout = () => {
    const [tab, setTab] = useState('details');
    const [showAll, setShowAll] = useState(false);
    const [product, setProduct] = useState<Product>()
    const [attributes, setAttributes] = useState<Attribute[] | Attribute>()
    const [seller, setSeller] = useState<Seller>()
    const [sellerAddress, setSellerAddress] = useState<Address>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const params = useParams();
    const Id = params.id;

    useEffect(() => {
        fetchProduct()
    }, [])
    const fetchProduct = async () => {
        try {
            setIsLoading(true);
            const res = await API.graphql<GraphQLQuery<GetProductQuery>>({
                query: getProduct,
                variables: { id: Id }
            })
            setProduct(res?.data?.getProduct);
            setAttributes(JSON.parse(res?.data?.getProduct?.attributes || ""));
            setSeller(res?.data?.getProduct?.seller);
            setSellerAddress(JSON.parse(res?.data?.getProduct?.seller?.address ?? ""))
            setIsLoading(false);
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <>
            <div className='pt-3'>
                <AdminPageHeader name={"Product Details"} buttonName='Back' link='/app/product' />
            </div>
            <Spinner show={isLoading}>
                <div className='d-lg-flex px-3 pb-3'>
                    <div className="card col">
                        <div className="card-body ">
                            <div className="row align-items-center">
                                <div className="col-md-4 col-12">
                                    <div className="text-center position-relative">
                                        <span>
                                            <img src={product?.image ? product?.image : ''}
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid" />
                                        </span>
                                    </div>
                                </div>
                                <div className='col-md-8 col-12 flex-grow-1'>
                                    <h4>{product?.name}</h4>
                                    <p>
                                        {showAll ? product?.description : (product?.description || "").substring(0, 200)} {" "}
                                        <span className='cursor-pointer' onClick={() => setShowAll(!showAll)}>{showAll ? <b> Show Less</b> : <b>Show More</b>}</span>
                                    </p>
                                    <h4 className="mt-3">Price:</h4>
                                    <p> $ {product?.listPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TABS */}
                <ul className="nav nav-tabs nav-overflow header-tabs mt-1 cursor-pointer">
                    <li className="nav-item">
                        <div className={`nav-link ${tab === 'details' && 'active'}`} aria-current="page" onClick={() => { setTab("details") }}>Product Details</div>
                    </li>
                    <li className="nav-item">
                        <div className={`nav-link ${tab === 'products' && 'active'}`} onClick={() => { setTab("products") }}>Seller Details</div>
                    </li>
                </ul>
                {
                    tab == "details" ?
                        <div className="ms-1 mt-5">
                            <h5>Product Specification</h5>

                            <p>{product?.description}</p>
                            <>
                                <h5 className='mt-5'>Key Specifications</h5>
                                {Array.isArray(attributes) ? attributes?.map((data: Attribute) => (

                                    <div className="d-flex w-50" key={data?.id} >
                                        <ul className="list-group rounded-0 w-50">
                                            <li className="list-group-item list-group-item-secondary border-right-0">{data?.name}</li>
                                        </ul>
                                        <ul className="list-group rounded-0 w-50">
                                            <li className="list-group-item border-left-0">{data?.value}</li>
                                        </ul>
                                    </div>
                                )) :
                                    <>
                                        <div>

                                            <div className="d-flex w-100">
                                                <ul className="list-group rounded-0 w-50">
                                                    {Object.keys(attributes || "").map((key, index) => (
                                                        <li key={index} className="list-group-item list-group-item-secondary border-right-0">
                                                            {key}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <ul className="list-group rounded-0 w-50">
                                                    {Object.values(attributes || "").map((value, index) => (
                                                        <li key={index} className="list-group-item border-left-0">
                                                            {value}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                }
                            </>
                            <h5 className='mt-5'>Product Rating</h5>
                            <div className="col-auto">
                                <Star rating={product?.rating || 0} maxRating={5} />
                            </div>
                        </div> :
                        <div className='ms-1 mt-5'>
                            <h5>{seller?.name}</h5>
                            <div className="d-flex mt-5" >
                                <ul className="list-group rounded-0 w-50">
                                    <li className="list-group-item list-group-item-secondary border-right-0">Email:</li>
                                    <li className="list-group-item list-group-item-secondary border-right-0">Phone:</li>
                                    <li className="list-group-item list-group-item-secondary border-right-0">Website:</li>
                                    <li className="list-group-item list-group-item-secondary border-right-0">Address:</li>
                                </ul>
                                <ul className="list-group rounded-0 w-50">
                                    <li className="list-group-item border-left-0">{seller?.email}</li>
                                    <li className="list-group-item border-left-0">{seller?.phone}</li>
                                    <li className="list-group-item border-left-0">{seller?.website}</li>
                                    <li className="list-group-item border-left-0">{`${sellerAddress?.address_line1 || ''}, ${sellerAddress?.address_line2 || ""},${sellerAddress?.city || ""},${sellerAddress?.postal_code || ""}`}
                                    </li>
                                </ul>
                            </div>
                            <h5 className='mt-5'>Seller Rating</h5>
                            <div className="col-auto">
                                <div>
                                    <Star rating={seller?.rating || 0} maxRating={5} />
                                </div>
                            </div>
                        </div>
                }
            </Spinner>
        </>
    )
}

export default ProductDetailLayout