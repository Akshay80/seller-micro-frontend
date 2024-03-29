'use client'
import { GraphQLQuery } from '@aws-amplify/api'
import { LoadScript } from '@react-google-maps/api'
import Spinner from '../../../libs/shared/ui/src/components/spinner/spinner';
import { API, Amplify, Auth, Storage } from 'aws-amplify'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete'
import awsExports from '@/src/aws-exports'

const Onboarding = () => {
    Amplify.configure(awsExports);
    const path = usePathname()
    const edit = path?.includes("edit")
    const [listSpinner, showListSpinner] = useState<boolean>(false)
    const certificateNames = ["Trade Certificate", "FSSAI Certificate", "Agriculture Certificate"]
    const [industries, setIndustries] = useState<any>([])
    const [businesses, setBusiness] = useState<any>([])
    const [spinner, showSpinner] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState<any>({
        business_name: "",
        business_email: '',
        business_phone: '',
        website: "",
        bank_name: '',
        account_name: '',
        account_number: '',
        routing_number: '',
        contact_name: "",
        business_type: '',
        industry_type: '',
        address: {
            address_line1: '',
            address_line2: '',
            lat: '',
            long: '',
            state: '',
            city: '',
            country: '',
            zip_code: '',
        },
        about_company: '',
    })
    const [documents, setDocuments] = useState<any>([
        {
            id: Math.random().toString(36),
            documentName: "Trade Certificate",
            documentNumber: "",
            medias: []
        }
    ])
    const [gallery, setGallery] = useState([])
    const [certificates, setCertificates] = useState<any>([])
    const [profileImg, setProfileImg] = useState<any>("")
    const [cognitoData, setCognitoData] = useState<any>({})

    useEffect(() => {
        showListSpinner(true)
        handleGetItems()
    }, [])

    const handleGetItems = async () => {
        try {
            const listBusiness = await API.graphql<GraphQLQuery<any>>({
                query: searchBusinesses,
            })
            const listIndustries = await API.graphql<GraphQLQuery<any>>({
                query: searchIndustries,
            })
            setBusiness(listBusiness?.data?.searchBusinesses?.items)
            setIndustries(listIndustries?.data?.searchIndustries?.items)
            showListSpinner(false)
        } catch (err) {
            console.log(err)
        }

    }

    const handleUploadImg = async (e: React.ChangeEvent<HTMLInputElement>, state: any, setState: any) => {
        const toastId = toast.loading('Uploading...');
        try {
            e.preventDefault()
            if (e.target.files) {
                const file = e.target.files[0]
                const result: any = await Storage.put(`WTX-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type });
                const url = await Storage.get(result.key, { level: 'public' })
                let ImageUrl = url.split('?')[0]

                let newState = [...state]
                let temp: any = {};
                temp.id = result.key;
                temp.name = result.key;
                temp.type = file?.type.substring(0, file?.type.indexOf("/"));
                temp.url = ImageUrl

                newState.push(temp)
                setState(newState)
                toast.success("Uploaded")
            }
        } catch (error) {
            toast.error("Failed to Uploaded.Try Again !")
        } finally { toast.dismiss(toastId) }

    }

    const handleChangeProfile = async (e: any) => {
        const toastId = toast.loading('Uploading...');
        try {
            e.preventDefault()
            if (e.target.files) {
                const file = e.target.files[0]
                const result: any = await Storage.put(`WTX-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type });
                const url = await Storage.get(result.key, { level: 'public' })
                let imgUrl = url.split('?')[0]

                setProfileImg(imgUrl)
                toast.success("Uploaded")
            }
        } catch (error) {
            toast.error("Failed to Uploaded.Try Again !")
        } finally { toast.dismiss(toastId) }

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>, name: string) => {
        setFormData((prev: any) => ({
            ...prev,
            [name]: e.target.value,
        }));
    }

    const handleRemoveImage = (url: any, setState: any) => {
        setState((prev: any) => prev.filter((item: any) => item?.url !== url))
    }

    const handleUploadDocx = async (e: React.ChangeEvent<HTMLInputElement>, idx: any) => {
        const toastId = toast.loading('Uploading...');
        if (e.target.files) {
            try {
                const file = e.target.files[0]
                const result: any = await Storage.put(`WTX-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type });
                const url = await Storage.get(result.key, { level: 'public' })
                let ImageUrl = url.split('?')[0]

                let newState = structuredClone(documents)
                let temp: any = {};
                temp.id = result.key;
                temp.name = result.key;
                temp.type = file?.type.substring(0, file?.type.indexOf("/"));
                temp.url = ImageUrl

                newState[idx].medias.push(temp)
                setDocuments(newState)
                toast.success("Uploaded")

            } catch (error) {
                console.log(error)
                toast.error("Failed to upload ! Try again .")
            } finally { toast.dismiss(toastId) }
        }

    }

    const handleAddMoreDocx = () => {
        setDocuments((prev: any) => ([...prev, {
            id: Math.random().toString(36),
            documentName: "Trade Certificate",
            documentNumber: "",
            medias: []
        }]))
    }

    const handleSubmit = async () => {
        showSpinner(true)
        try {
            let input: any = {
                name: formData?.business_name,
                email: formData?.business_email,
                phone: formData?.business_phone?.length > 9 ? formData?.business_phone : null,
                image: profileImg || null,
                profile: formData?.about_company,
                documents: JSON.stringify(documents),
                website: formData?.website ? (!formData?.website?.includes('https://') ? "https://" + formData?.website : formData?.website) : null,
                images: JSON.stringify({ certificates, gallery }),
                industryId: formData?.industry_type && formData?.industry_type,
                businessId: formData?.business_type && formData?.business_type,
                address: JSON.stringify({
                    address_line1: formData?.address?.address_line1,
                    address_line2: formData?.address?.address_line2,
                    state: formData?.address?.state,
                    city: formData?.address?.city,
                    postal_code: formData?.address?.zip_code,
                    country: formData?.address?.country,
                    latitude: formData?.address?.lat,
                    longitude: formData?.address?.long
                }),
                bank: JSON.stringify({
                    bank_name: formData?.bank_name,
                    account_name: formData?.account_name,
                    account_number: formData?.account_number,
                    routing_number: formData?.routing_number
                })
            }
            // if it is onboarding page
            if (!edit) {
                let res = await API.graphql<any>({
                    query: createSeller,
                    variables: { input }
                })
                let userData: any = await API.graphql({
                    query: createUser,
                    variables: {
                        input: {
                            id: cognitoData?.sub,
                            name: formData?.contact_name,
                            email: cognitoData?.email,
                        },
                    },
                })

                await API.graphql({
                    query: createSellerUser,
                    variables: {
                        input: {
                            sellerId: res?.data?.createSeller?.id,
                            userId: userData?.data?.createUser?.id,
                            role: "OWNER",
                        },
                    },
                })
                window.location.href = "/sso"
            } else {
                //if it is update seller page
                let seller = JSON.parse(window.localStorage.getItem("seller") || '');
                if (seller?.sellerId) {
                    input = { ...input, id: seller?.sellerId }
                    await API.graphql({ query: updateSeller, variables: { input } })
                } else {
                    toast.error("Seller not found.")
                }
                window.location.href = "/app/seller-profile"
            }
            toast.success("Profile updated successfully.")
        } catch (err: any) {
            if (err?.errors && err?.errors[0]?.message?.includes("Variable 'phone' has an invalid value")) {
                toast.error("Invalid Phone Number !")
            } else {
                toast.error("Failed to update seller profile, please fill all the fields that are required")
            }
            console.log(err)
        } finally { showSpinner(false) }
    }

    const handleAddressChange = (address: any) => {
        setFormData((prevData: any) => ({
            ...prevData,
            address: {
                ...prevData.address,
                address_line1: address,
            },
        }));
    }

    const handleAddressSelect = async (address: any, placeId: any) => {
        let results = await geocodeByPlaceId(placeId);
        if (results.length > 0) {
            setFormData((prevData: any) => ({
                ...prevData,
                address: {
                    ...prevData.address,
                    address_line1: results[0].formatted_address,
                    lat: results[0].geometry.location.lat(),
                    long: results[0].geometry.location.lng(),
                    city: results[0].address_components.filter((x) => x.types.includes('locality'))[0]?.long_name,
                    state: results[0].address_components.filter((x) => x.types.includes('administrative_area_level_1'))[0]?.long_name,
                    country: results[0].address_components.filter((x) => x.types.includes('country'))[0]?.long_name,
                    zip_code: results[0].address_components.filter((x) => x.types.includes('postal_code'))[0]?.long_name,
                },
            }));
        }
    };

    const getUser = async (sellerId: String) => {
        try {
            setLoading(true)
            let res: any = await API.graphql({ query: getSellerQuery, variables: { id: sellerId } })
            const data = res.data.getSeller

            setProfileImg(data?.image)
            const address = JSON.parse(data?.address)
            const images = JSON.parse(data?.images)
            const bank = JSON.parse(data?.bank)
            setGallery(images?.gallery)
            setCertificates(images?.certificates)
            setDocuments(JSON.parse(data?.documents))
            setFormData({
                business_name: data?.name,
                business_email: data?.email,
                business_phone: data?.phone,
                website: data?.website,
                bank_name: bank?.bank_name,
                account_name: bank?.account_name,
                account_number: bank?.account_number,
                routing_number: bank?.routing_number,
                business_type: data?.business?.id,
                industry_type: data?.industry?.id,
                address: {
                    address_line1: address?.address_line1,
                    address_line2: address?.address_line2,
                    state: address?.state,
                    city: address?.city,
                    country: address?.country,
                    zip_code: address?.postal_code,
                    lat: address?.latitude,
                    long: address?.longitude,
                },
                about_company: data?.profile,
            })
        } catch (error) {
            console.log(error)
        } finally { setLoading(false) }
    }

    useEffect(() => {
        Auth.currentAuthenticatedUser().then((res: any) => {
            setFormData((prev: any) => ({ ...prev, business_email: res.attributes.email }))
            setCognitoData(res?.attributes)
            let currentSeller = JSON.parse(window.localStorage.getItem("seller") || '');
            if (edit && currentSeller?.sellerId) {
                getUser(currentSeller?.sellerId)
            }
        }).catch(e => {
            console.log(e)
        })
    }, [])

    // if (loading) return <div className="d-flex justify-content-center align-items-lg-center" style={{ height: "30rem" }}>
    //     <div className="spinner-border primary" role="status">
    //     </div>
    // </div>

    return (
        <section className='row my-5'>
            <div className={`${edit ? "col-md-8" : "col-md-6"} mx-auto`}>
                {edit && <h2>Edit Seller Profile</h2>}
                <div>
                    <div>
                        {!edit &&
                            <h3 className='text-center'>Register Your Business</h3>
                        }
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                            <div className='form-group mt-3'>
                                <div>
                                    <div className='card p-3 my-3'>
                                        <div>
                                            <div className='form-group mb-3'>
                                                <label className='text-dark'>Business Name <span className='text-danger'>*</span></label>
                                                <input type='text' required className='form-control' value={formData?.business_name} onChange={(e) => handleChange(e, 'business_name')} placeholder='e.g.: ABC Company' />
                                            </div>

                                            <div className='form-group text-dark mb-3'>
                                                <label>Type of Business <span className='text-danger'>*</span></label>
                                                <select
                                                    className="form-select"
                                                    value={formData?.business_type || ''}
                                                    onChange={(e) => handleChange(e, 'business_type')}
                                                    aria-label="business_type"
                                                >
                                                    <option value='' className='text-muted'>Select Business</option>
                                                    {businesses?.map((item: any) => (
                                                        <option key={item?.id} value={item?.id}>
                                                            {item?.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className='form-group text-dark mb-3'>
                                                <label>Type of Industry <span className='text-danger'>*</span></label>
                                                <select
                                                    className="form-select"
                                                    value={formData?.industry_type || ''}
                                                    onChange={(e) => handleChange(e, 'industry_type')}
                                                    aria-label="industry_type"
                                                >
                                                    <option value='' className='text-muted'>Select Industry</option>
                                                    {industries?.map((item: any) => (
                                                        <option key={item?.id} value={item?.id}>
                                                            {item?.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>


                                        {!edit && (
                                            <div className='form-group mb-3'>
                                                <label className='text-dark'>Contact Name <span className='text-danger'>*</span></label>
                                                <input type='text' required className='form-control' value={formData?.contact_name} onChange={(e) => handleChange(e, 'contact_name')} placeholder='e.g.: Jhon Doe' />
                                            </div>
                                        )}

                                        <div className='form-group text-dark mb-3'>
                                            <label>Business Email</label>
                                            <input disabled type='email' required className='form-control' onChange={(e) => handleChange(e, 'business_email')} placeholder='Business Email' value={formData?.business_email} />
                                        </div>

                                        <div className='my-1 text-dark mb-3'>
                                            <label>Business Phone</label>
                                            <div className='input-group'>
                                                <PhoneInput
                                                    inputProps={{
                                                        name: "phone",
                                                        required: false,
                                                        autoFocus: false,
                                                    }}
                                                    country={"us"}
                                                    value={formData?.business_phone}
                                                    onChange={(phone: any) => setFormData((prev: any) => ({ ...prev, business_phone: "+" + phone }))}
                                                />
                                            </div>

                                        </div>

                                        <div className='form-group text-dark mb-3'>
                                            <label>Website </label>
                                            <div className='input-group'>
                                                <input className='form-control' onChange={(e) => handleChange(e, 'website')} placeholder='e.g. www.wtx.com' value={formData?.website} />
                                            </div>
                                        </div>

                                        <div>
                                            <div className='row mb-3'>
                                                <div className='col-md-6'>
                                                    <label className='text-dark'>Addresss Line 1 <span className='text-danger'>*</span></label>
                                                    <LoadScript googleMapsApiKey={'AIzaSyC1U6s_cNHlar4BQQP17PDbwx93m8kRkp4'} libraries={["places"]}>
                                                        <PlacesAutocomplete value={formData?.address?.address_line1} onChange={handleAddressChange} onSelect={handleAddressSelect}>
                                                            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                                                                <div>
                                                                    <input required {...getInputProps({ className: 'form-control' })} placeholder='Select address' />
                                                                    <div className='autocomplete-container rounded'>
                                                                        {suggestions.map((suggestion, index) => {
                                                                            return (
                                                                                <div key={index} className='border bg-light cursor-pointer'>
                                                                                    <div {...getSuggestionItemProps(suggestion)} className='suggestion-item p-2' >
                                                                                        {suggestion.description}
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </PlacesAutocomplete>
                                                    </LoadScript>
                                                </div>
                                                <div className='col-md-6'>
                                                    <label className='text-dark'>Addresss Line 2</label>
                                                    <input type='text' className='form-control' value={formData?.address?.address_line2} placeholder='e.g.: Street Name' onChange={(e) => {
                                                        let temp = structuredClone(formData)
                                                        temp.address.address_line2 = e.target.value
                                                        setFormData(temp)
                                                    }} />
                                                </div>
                                            </div>
                                            <div className='row mb-3'>
                                                <div className='col-md-6'>
                                                    <label className='text-dark'>City <span className='text-danger'>*</span></label>
                                                    <input type='text' required disabled className='form-control' value={formData?.address?.city} placeholder='City' onChange={(e) => {
                                                        let temp = structuredClone(formData)
                                                        temp.address.city = e.target.value
                                                        setFormData(temp)
                                                    }} />
                                                </div>
                                                <div className='col-md-6'>
                                                    <label className='text-dark'>State <span className='text-danger'>*</span></label>
                                                    <input type='text' required disabled className='form-control' value={formData?.address?.state} placeholder='State' onChange={(e) => {
                                                        let temp = structuredClone(formData)
                                                        temp.address.state = e.target.value
                                                        setFormData(temp)
                                                    }} />
                                                </div>
                                            </div>
                                            <div className='row mb-3'>
                                                <div className='col-md-6'>
                                                    <label className='text-dark'>Zip Code <span className='text-danger'>*</span></label>
                                                    <input type='text' required disabled className='form-control' value={formData?.address?.zip_code} placeholder='Zip Code' onChange={(e) => {
                                                        let temp = structuredClone(formData)
                                                        temp.address.zip_code = e.target.value
                                                        setFormData(temp)
                                                    }} />
                                                </div>
                                                <div className='col-md-6'>
                                                    <label className='text-dark'>Country <span className='text-danger'>*</span></label>
                                                    <input required type='text' className='form-control' disabled value={formData?.address?.country} placeholder='Country' onChange={(e) => {
                                                        let temp = structuredClone(formData)
                                                        temp.address.country = e.target.value
                                                        setFormData(temp)
                                                    }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='form-group mb-3 text-dark'>
                                            <label>About Company <span className='text-danger'>*</span></label>
                                            <textarea required className='form-control' id='exampleFormControlTextarea1' onChange={(e) => handleChange(e, 'about_company')} value={formData?.about_company} rows={4} />
                                        </div>

                                        <div>
                                            <label className='text-dark'>Company Logo</label>
                                            <input name='image' className='form-control' accept='image/*' width={100} type='file' id='profile' onChange={(e) => handleChangeProfile(e)} />
                                            <i className="bi bi-info-circle" /><span className='text-muted fs-6 ps-2'>300 x 300px recommended. JPGs, JPEGs, and PNGs supported.</span>
                                            {
                                                profileImg &&
                                                <div className='pb-2'>
                                                    <img src={profileImg} width={'500'} alt="" className='preview' />
                                                </div>
                                            }
                                        </div>

                                        <div className='mb-3 mt-3 text-dark' >
                                            <label className='text-dark my-1'>Company Images / videos</label>
                                            <div className='form-group d-flex flex-wrap gap-2'>
                                                <label htmlFor="VideoUpload" className='bg-light d-flex justify-content-center align-items-center  cursor-pointer' style={{ height: 100, width: 100, borderRadius: 7 }}>
                                                    <strong><i className="fs-5 pe-1 bi bi-upload" /> Upload</strong>
                                                </label>
                                                <input
                                                    id='VideoUpload'
                                                    type='file'
                                                    style={{ display: 'none' }}
                                                    multiple
                                                    accept='image/*,video/mp4'
                                                    onChange={(e) => handleUploadImg(e, gallery, setGallery)}
                                                />
                                                {gallery?.map((item: any, index: any) => (
                                                    (item?.type === 'video') ?
                                                        <a href={item?.url} target='_blank' className='d-flex gap-2 mx-2 position-relative bg-light rounded-2 text-dark' key={index}>
                                                            <video autoPlay muted loop className='d-block ' style={{ width: '100px', height: '100px' }}>
                                                                <source src={item?.url} type='video/mp4' />
                                                            </video>
                                                            <i className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer" key={item?.url} onClick={() => handleRemoveImage(item?.url, setGallery)}></i>
                                                        </a>
                                                        :
                                                        <div key={index} className='mx-2 position-relative '>
                                                            <div className='d-flex gap-2' >
                                                                <a href={item?.url} target='_blank'>
                                                                    <img alt='product_image' src={item?.url} height={100} width={160} style={{ cursor: 'pointer', objectFit: "cover", borderRadius: 7 }} />
                                                                </a>
                                                                <i className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer" key={item?.id} onClick={() => handleRemoveImage(item?.url, setGallery)}></i>
                                                            </div>
                                                        </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className='mb-3 text-dark' id='fileUploadDiv'>
                                            <label className='my-1'>Images of Awards and Recognitions</label>
                                            <div className='form-group d-flex flex-wrap gap-2'>
                                                <label htmlFor="fileUpload" className='bg-light d-flex justify-content-center align-items-center  cursor-pointer' style={{ height: 100, width: 100, borderRadius: 7 }}>
                                                    <strong><i className="fs-5 pe-1 bi bi-upload" /> Upload</strong>
                                                </label>
                                                <input
                                                    id='fileUpload'
                                                    type='file'
                                                    style={{ display: 'none' }}
                                                    multiple
                                                    accept='image/*'
                                                    onChange={(e) => handleUploadImg(e, certificates, setCertificates)}
                                                />
                                                {certificates?.map((item: any, index: any) => (
                                                    <div key={index} className='mx-2 position-relative'>
                                                        {item?.type === "image" ?
                                                            <div className='d-flex gap-2' >
                                                                <a href={item?.url} target='_blank'>
                                                                    <img alt='product_image' src={item?.url} height={100} width={160} style={{ cursor: 'pointer', objectFit: "cover", borderRadius: 7 }} />
                                                                </a>
                                                                <i className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer" key={item?.id} onClick={() => handleRemoveImage(item?.url, setCertificates)}></i>
                                                            </div> :
                                                            <div className='d-flex gap-2' >
                                                                <a href={item?.url} target='_blank'>
                                                                    <img alt='product_image' src={"https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png"} height={100} width={100} style={{ cursor: 'pointer', objectFit: "contain", borderRadius: 7 }} />
                                                                </a>
                                                                <i className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer" key={item?.id} onClick={() => handleRemoveImage(item?.url, setCertificates)}></i>
                                                            </div>
                                                        }
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    </div>

                                    <h4 className='mb-5 mt-7 text-center'>Business Documents</h4>
                                    <section>
                                        <div className='card p-3'>
                                            <label className='text-dark'>Business Registration Certificates <span className='text-danger'>*</span></label>
                                            {documents?.map((item: any, index: any) =>
                                                <div className='bg-light p-2 rounded mt-3 d-flex flex-column gap-2' key={index}>
                                                    <select className="form-select" aria-label="Certificate" value={item?.documentName} required onChange={(e: any) => {
                                                        let temp = structuredClone(documents)
                                                        temp[index].documentName = e.target.value
                                                        setDocuments(temp)
                                                    }}>
                                                        {certificateNames?.map((item: any) => (
                                                            <option key={item} value={item}>{item}</option>
                                                        ))}
                                                    </select>
                                                    <div>
                                                        <input required type="text" placeholder='e.g.: 123ASD123JH' className='form-control' value={item?.documentNumber} onChange={(e: any) => {
                                                            let temp = structuredClone(documents)
                                                            temp[index].documentNumber = e.target.value
                                                            setDocuments(temp)
                                                        }} />
                                                    </div>
                                                    <div className='d-flex gap-2 cursor-pointer flex-wrap'>
                                                        <input
                                                            id={index + "idx"}
                                                            type='file'
                                                            style={{ display: 'none' }}
                                                            accept='image/*,.pdf'
                                                            onChange={(e) =>
                                                                handleUploadDocx(e, index)}
                                                        />
                                                        <label htmlFor={index + "idx"} className='bg-white d-flex justify-content-center align-items-center ' style={{ height: 100, width: 100, borderRadius: 7 }}>
                                                            <strong><i className="fs-5 pe-1 bi bi-upload" /> Upload</strong>
                                                        </label>
                                                        {item?.medias?.map((media: any, i: any) => (
                                                            <div key={i}>
                                                                {media?.type === "image" ?
                                                                    <div className='position-relative '>
                                                                        <a href={media?.url} target='_blank'>
                                                                            <img alt='docx' src={media?.url} height={100} width={100} style={{ cursor: 'pointer', objectFit: "cover", borderRadius: 7 }} />
                                                                        </a>
                                                                        <i className="bi bi-x-circle-fill p-1 bg-white rounded position-absolute top-0 end-0 cursor-pointer" onClick={() => {
                                                                            let temp = structuredClone(documents)
                                                                            temp[index].medias = temp[index]?.medias.filter((item: any) => item.url !== media?.url)
                                                                            setDocuments(temp)
                                                                        }}></i>

                                                                    </div> :
                                                                    <div className='position-relative '>
                                                                        <a href={media?.url} target='_blank'>
                                                                            <img alt='docx' src={"https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png"} height={100} width={100} style={{ cursor: 'pointer', objectFit: "contain", borderRadius: 7 }} />
                                                                        </a>
                                                                        <i className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer" onClick={() => {
                                                                            let temp = structuredClone(documents)
                                                                            temp[index].medias = temp[index]?.medias.filter((item: any) => item.url !== media?.url)
                                                                            setDocuments(temp)
                                                                        }}></i>

                                                                    </div>}
                                                            </div>
                                                        ))}
                                                        {index !== 0 && (
                                                            <i className="bi bi-trash-fill ms-auto text-danger cursor-pointer" onClick={() => {
                                                                let temp = structuredClone(documents)
                                                                temp = temp.filter((x: any) => x.id !== item.id)
                                                                setDocuments(temp)
                                                            }}></i>
                                                        )}
                                                    </div>

                                                </div>
                                            )}
                                            <div className='card-body p-0 m-0'>
                                                <div className='ms-auto mt-1 text-center'>
                                                    <button className='btn btn-light cursor-pointer' onClick={handleAddMoreDocx}>
                                                        Add More +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <div>
                                        <h4 className='mt-7 text-center'>Bank Details</h4>
                                        <div className=''>
                                            <div className='p-2 rounded border'>
                                                <div className='d-flex align-items-center gap-2 text-muted'><i className="bi bi-info-circle fs-2 text-muted" />
                                                    <p className='p-0 m-0' style={{ fontSize: '10px' }}>
                                                        The supplier has multiple bank accounts which each represent a specific currency. They are requesting that payment according to an invoice currency to the respective bank currency.
                                                        A supplier has divided business and wishes accounting for a specific segment be remitted to a specific account.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card p-3 my-3'>
                                        <div className='row mb-3'>
                                            <div className='col-lg-6'>
                                                <label className='text-dark'>Bank Name <span className='text-danger'>*</span></label>
                                                <input type='text' required className='form-control' onChange={(e) => handleChange(e, 'bank_name')} placeholder='e.g.: Bank of America' value={formData?.bank_name} />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='text-dark'>Account Holder Name <span className='text-danger'>*</span></label>
                                                <input type='text' required className='form-control' onChange={(e) => handleChange(e, 'account_name')} placeholder='e.g.: Jhon Doe' value={formData?.account_name} />
                                            </div>
                                        </div>

                                        <div className='row mb-3'>
                                            <div className='col-lg-6'>
                                                <label className='text-dark'>Account Number <span className='text-danger'>*</span></label>
                                                <input type='number' required className='form-control' onChange={(e) => e.target.value.length < 13 && handleChange(e, 'account_number')} placeholder='e.g.: 123456789012' value={formData?.account_number} />
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='text-dark'>Routing Number <span className='text-danger'>*</span></label>
                                                <input required maxLength={9} className='form-control' onChange={(e) => handleChange(e, 'routing_number')} placeholder='e.g.: 123456789' value={formData?.routing_number} />
                                            </div>
                                        </div>
                                    </div>
                                    {!edit &&
                                        <div className='mt-4'>
                                            <input type="checkbox" required /> I Verify that I am an authorized representative of this organization and I have the right to act on its behalf in the
                                            creation and management of this page. The organizationand I agree to the additional terms for pages
                                            <u className='cursor-pointer ps-2'><strong>Read The WTX Pages Terms & Conditions</strong></u>
                                        </div>
                                    }
                                    <div className='mt-3'>
                                        <Spinner show={spinner}>
                                            <button className='btn btn-dark w-100' type='submit'>{edit ? "Update" : "Create Account"}</button>
                                        </Spinner>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Onboarding;


const getSellerQuery = /* GraphQL */ `query GetSeller($id: ID!) {
    getSeller(id: $id) {
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
      industry {
      name
      id
    }
    business {
      name
      id
    }
    }
  }`

const createSeller = /* GraphQL */ `mutation CreateSeller(
    $input: CreateSellerInput!
  ) {
    createSeller(input: $input) {
      id
    }
  }
  `
const createUser = /* GraphQL */ `mutation CreateUser(
    $input: CreateUserInput!
  ) {
    createUser(input: $input) {
      id
    }
  }
  `
const createSellerUser = /* GraphQL */ `mutation CreateSellerUser(
    $input: CreateSellerUserInput!
  ) {
    createSellerUser(input: $input) {
      id
    }
  }
  `
const updateSeller = /* GraphQL */ `mutation UpdateSeller(
    $input: UpdateSellerInput!
    $condition: ModelSellerConditionInput
  ) {
    updateSeller(input: $input, condition: $condition) {
      id
    }
  }
  `

const searchIndustries = /* GraphQL */ `
  query SearchIndustries(
    $filter: SearchableIndustryFilterInput
    $sort: [SearchableIndustrySortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableIndustryAggregationInput]
  ) {
    searchIndustries(
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

const searchBusinesses = /* GraphQL */ `
  query SearchBusinesses(
    $filter: SearchableBusinessFilterInput
    $sort: [SearchableBusinessSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableBusinessAggregationInput]
  ) {
    searchBusinesses(
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