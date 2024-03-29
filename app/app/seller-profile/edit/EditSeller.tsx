'use client'
import { LoadScriptNext } from '@react-google-maps/api'
import Spinner from '@/libs/shared/ui/src/components/spinner/spinner'
import { API, Amplify, Storage } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { NumericFormat } from 'react-number-format'
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete'
import awsExports from '@/src/aws-exports'


const CreateSeller = () => {
    Amplify.configure(awsExports);
    const [currentSeller,setCurrentSeller] = useState<any>({})
    const [errors, showErrors] = useState<boolean>(false)
    const [spinner, showSpinner] = useState<boolean>(false)
    const [images, setImages] = useState<any>({
        profileImage: '',
        companyImages: [],
        awards: [],
        businessCertificates: [{
            documentName: '',
            documentNumber: '',
            image: ''
        }]
    })
    const [loading,setLoading] = useState(false)
    const [formData, setFormData] = useState<any>({
        business_name: "",
        business_email: '',
        business_phone: '',
        bank_name: '',
        account_name: '',
        account_number: '',
        routing_number: '',
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
    const [documnets, setDocumnets] = useState([])
    const [gallery, setGallery] = useState([{ id: "", name: "", type: "", url: "" }])
    const [certificates, setCertificates] = useState<any>([{ id: "", name: "", type: "", url: "" }])
    const [profileImg, setProfileImg] = useState<any>("")

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, state: any, setState: any) => {
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
        }
    }

    const handleChangeProfile = async (e: any) => {
        e.preventDefault()
        if (e.target.files) {
            const file = e.target.files[0]
            const result: any = await Storage.put(`WTX-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type });
            const url = await Storage.get(result.key, { level: 'public' })
            let imgUrl = url.split('?')[0]

            setProfileImg(imgUrl)
        }
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, name: string) => {
        setFormData((prev: any) => ({
            ...prev,
            [name]: e.target.value,
        }));
    }

    const handleRemoveImage = (id: any, setState: any) => {
        setState((prev: any) => prev.filter((item: any) => item?.id !== id))
    }
    const handleSubmit = async () => {
        console.log(currentSeller?.sellerId)
        console.log(currentSeller)
        showSpinner(true)
        try {
            await API.graphql<any>({
                query: updateSellerQuery,
                variables: {
                    input: {
                        id: currentSeller?.sellerId,
                        name: formData?.business_name,
                        email: formData?.business_email,
                        phone: `${formData?.business_phone}`,
                        image: profileImg,
                        profile: formData?.about_company,
                        images: JSON.stringify({ certificates, gallery }),
                        address: JSON.stringify({
                            address_line1: formData?.address?.address_line1,
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
                }
            })
            toast.success("Seller profile updated successfully.")
            window.location.href = "/app/seller-profile"
        } catch (err) {
            toast.error("Failed to update seller profile.")
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

    async function getSellerDetails(currentSellerId:any) {
        try {
            setLoading(true)
            const res = await API.graphql<any>({ query: getSellerQuery, variables: { id: currentSellerId } })
            const seller = res.data.getSeller
            const bank = JSON.parse(seller?.bank || "")
            const address = JSON.parse(seller?.address || "")
            const images = JSON.parse(seller?.images || "")

            setFormData({
                business_name: seller?.name,
                business_email: seller?.email,
                business_phone: seller?.phone,
                bank_name: bank?.bank_name,
                account_name: bank?.account_name,
                account_number: bank?.account_number,
                routing_number: bank?.routing_number,
                address: {
                    address_line1: address?.address_line1,
                    address_line2: address?.address_line2,
                    lat: address?.latitude,
                    long: address?.longitude,
                    state: address?.state,
                    city: address?.city,
                    country: address?.country,
                    zip_code: address?.postal_code,
                },
                about_company: seller?.profile,
            })
            setDocumnets(JSON.parse(seller?.documents))
            setGallery(images?.gallery)
            setCertificates(images?.certificates)
            setProfileImg(seller?.image)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }finally{setLoading(false)}
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            let currentSeller = JSON.parse(window.localStorage.getItem("seller") || '');
            setCurrentSeller(currentSeller)
            getSellerDetails(currentSeller?.sellerId)
          } else {
            console.log("not avaialable");
          }
    }, [])

    if (loading) return <div className="d-flex justify-content-center align-items-lg-center" style={{ height: "30rem" }}>
        <div className="spinner-border primary" role="status">
        </div>
    </div>

    return (
        <section>
            <div className='card p-4'>
                <div>
                    <div>
                        <div className='card-body'>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className='form-group mt-3'>
                                    <div>
                                        <div>
                                            {
                                                profileImg ?
                                                    <div className='pb-2'>
                                                        <img src={profileImg} alt='' className='avatar avatar-md rounded-circle' style={{ width: '110px', height: '106px', objectFit: "cover" }} />
                                                    </div>
                                                    :
                                                    <h1>
                                                        <img src='https://cdn.worldtradex.com/img/profile.png' alt='' className='avatar avatar-md rounded-circle' style={{ width: '110px', height: '106px' }} />
                                                    </h1>
                                            }
                                        </div>
                                        <div className='col-lg-6 mb-3'>
                                            <label className='text-dark'>Profile Image</label>
                                            <input name='image' className='form-control' accept='image/*' width={100} type='file' id='profile' onChange={(e) => { handleChangeProfile(e) }} />
                                            <div className={`${(!profileImg && errors) ? 'd-block' : 'd-none'} text-danger`}>Required.</div>
                                        </div>

                                        <div className='form-group mb-3'>
                                            <label className='text-dark'>Business Name <span className='text-danger'>*</span></label>
                                            <input type='text' className='form-control' value={formData?.business_name} onChange={(e) => handleChange(e, 'business_name')} placeholder='Business Name' />
                                            <div className={`${(!formData?.business_name && errors) ? 'd-block' : 'd-none'} text-danger`}>Required.</div>
                                        </div>

                                        <div className='form-group mb-3'>
                                            <label>Business Email</label>
                                            <input type='email' className='form-control bg-light' onChange={(e) => handleChange(e, 'business_email')} placeholder='Business Email' disabled defaultValue={formData?.business_email} />
                                            <div className={`${(!formData?.business_email && errors) ? 'd-block' : 'd-none'} text-danger`}>Required.</div>
                                        </div>

                                        <div className='my-1 text-dark mb-3'>
                                            <label className='sr-only'>Business Phone <span className='text-danger'>*</span></label>
                                            <div className='input-group'>
                                                <PhoneInput
                                                    inputProps={{
                                                        name: "phone",
                                                        required: true,
                                                        autoFocus: false,
                                                    }}
                                                    country={"us"}
                                                    value={formData?.business_phone}
                                                    onChange={(phone: any) => setFormData((prev: any) => ({ ...prev, business_phone: "+" + phone }))}
                                                />
                                            </div>
                                            <div className={`${(!formData?.business_phone && errors) ? 'd-block' : 'd-none'} text-danger`}>Required.</div>
                                        </div>

                                        <div className='row mb-3'>
                                            <div className='col-lg-6'>
                                                <label className='text-dark'>Bank Name <span className='text-danger'>*</span></label>
                                                <input type='text' className='form-control' onChange={(e) => handleChange(e, 'bank_name')} placeholder='Bank Name' defaultValue={formData?.bank_name} />
                                                <div className={`${(!formData?.bank_name && errors) ? 'd-block' : 'd-none'} text-danger`}>Required.</div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='text-dark'>Account Name <span className='text-danger'>*</span></label>
                                                <input type='text' className='form-control' onChange={(e) => handleChange(e, 'account_name')} placeholder='Account Name' value={formData?.account_name} />
                                                <div className={`${(!formData?.account_name && errors) ? 'd-block' : 'd-none'} text-danger`}>Required.</div>
                                            </div>
                                        </div>

                                        <div className='row mb-3'>
                                            <div className='col-lg-6'>
                                                <label className='text-dark'>Account Number <span className='text-danger'>*</span></label>
                                                <NumericFormat className='form-control' onChange={(e) => handleChange(e, 'account_number')} placeholder='Account Number' value={formData?.account_number} />
                                                <div className={`${(!formData?.account_number && errors) ? 'd-block' : 'd-none'} text-danger`}>Required.</div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label className='text-dark'>Routing Number <span className='text-danger'>*</span></label>
                                                <NumericFormat className='form-control' onChange={(e) => handleChange(e, 'routing_number')} placeholder='Routing Number' value={formData?.routing_number} />
                                                <div className={`${(!formData?.routing_number && errors) ? 'd-block' : 'd-none'} text-danger`}>Required.</div>
                                            </div>
                                        </div>

                                        <label className='text-dark'>Business Registered Address <span className='text-danger'>*</span> </label>

                                        <div>
                                            <div className='mb-3'>
                                                <LoadScriptNext googleMapsApiKey={'AIzaSyC1U6s_cNHlar4BQQP17PDbwx93m8kRkp4'} libraries={['places']}>
                                                    <PlacesAutocomplete value={formData?.address?.address_line1} onChange={handleAddressChange} onSelect={handleAddressSelect}>
                                                        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                                                            <div>
                                                                <input {...getInputProps({ className: 'form-control' })} placeholder='select address' />
                                                                <div className='autocomplete-container rounded'>
                                                                    {suggestions.map((suggestion, index) => {
                                                                        return (
                                                                            <div key={index} className='px-2 border bg-light cursor-pointer py-2'>
                                                                                <div {...getSuggestionItemProps(suggestion)} className='suggestion-item'>
                                                                                    {suggestion.description}
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </PlacesAutocomplete>
                                                </LoadScriptNext>
                                                <div className={`${(!formData?.address?.address_line1 && !formData?.address?.state && !formData?.address?.city && !formData?.address?.zip_code && errors) ? 'd-block text-danger' : 'd-none text-danger'} `}>Please select valid address.</div>
                                            </div>
                                            <div className='row mb-3'>
                                                <div className='col-md-6'>
                                                    <label className='text-gray'>Country</label>
                                                    <input type='text' className='form-control bg-light' value={formData?.address?.country} placeholder='Country' disabled />
                                                </div>
                                                <div className='col-md-6'>
                                                    <label className='text-gray'>Zip Code</label>
                                                    <input type='text' className='form-control bg-light' value={formData?.address?.zip_code} placeholder='Zip Code' disabled />
                                                </div>
                                            </div>
                                            <div className='row mb-3'>
                                                <div className='col-md-6'>
                                                    <label className='text-gray'>State</label>
                                                    <input type='text' className='form-control bg-light' value={formData?.address?.state} placeholder='City' disabled />
                                                </div>
                                                <div className='col-md-6'>
                                                    <label className='text-gray'>City</label>
                                                    <input type='text' className='form-control bg-light' value={formData?.address?.city} placeholder='Country' disabled />
                                                </div>

                                            </div>
                                        </div>

                                        <div className='form-group mb-3 text-dark'>
                                            <label>About the Company<span className='text-danger'>*</span></label>
                                            <textarea className='form-control' id='exampleFormControlTextarea1' onChange={(e) => handleChange(e, 'about_company')} defaultValue={formData?.about_company} rows={4} />
                                            <div className={`${(!formData?.about_company && errors) ? 'd-block' : 'd-none'} text-danger`}>Required.</div>
                                        </div>

                                        <div className='mb-3 text-dark' >
                                            <label className='form-label'>Company Images and videos <span className='text-danger'>*</span></label>
                                            <div className='form-group d-flex'>
                                                <label htmlFor='VideoUpload' className='bg-gray'>
                                                    <img src='https://wtx-cdn.s3.amazonaws.com/img/upload.png' alt='' style={{ width: '100px', height: '100px', cursor: 'pointer' }} />
                                                </label>
                                                <input
                                                    id='VideoUpload'
                                                    type='file'
                                                    style={{ display: 'none' }}
                                                    multiple
                                                    accept='image/*,video/mp4'
                                                    onChange={(e) => handleImageChange(e, gallery, setGallery)}
                                                />
                                                {gallery?.map((item: any, index: any) => (
                                                    (item?.type !== 'image') ?
                                                        <div className='rounded-2 border border-1 mb-1 ms-1 p-2 border-box img-wrap' style={{ width: '10px', height: '100px' }} key={index}>
                                                            <div className='d-flex' style={{ minWidth: 0, overflow: 'hidden', maxHeight: '100%' }}>
                                                                <video autoPlay muted loop className='d-block ' style={{ width: '100px', height: '100px' }}>
                                                                    <source src={item?.url} type='video/mp4' className='d-block' />
                                                                </video>
                                                                <span className='close cursor-pointer' onClick={() => handleRemoveImage(item?.id, setGallery)}>&times;</span>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div key={index} className='mx-2'>
                                                            <div className='d-flex gap-2' >
                                                                <a href={item?.url} target='_blank'>
                                                                    <img alt='product_image' src={item?.url} style={{ width: '160px', height: '100px', objectFit: "cover" }} />
                                                                </a>
                                                                <span className='close cursor-pointer' onClick={() => handleRemoveImage(item?.id, setGallery)}>&times;</span>
                                                            </div>
                                                        </div>
                                                ))}
                                            </div>
                                            <div className={`${(!images?.companyImages?.length && errors) ? 'd-block' : 'd-none'} text-danger`}>Required.</div>
                                        </div>

                                        <div className='mb-3 text-dark' id='fileUploadDiv'>
                                            <label className='form-label'>Images of Awards and Recognitions<span className='text-danger'>*</span></label>
                                            <div className='form-group d-flex'>
                                                <label htmlFor='fileUpload'>
                                                    <img src='https://wtx-cdn.s3.amazonaws.com/img/upload.png' alt='' style={{ width: '100px', height: '100px', cursor: 'pointer', objectFit: "cover" }} />
                                                </label>
                                                <input
                                                    id='fileUpload'
                                                    type='file'
                                                    style={{ display: 'none' }}
                                                    multiple
                                                    accept='image/*'
                                                    onChange={(e) => handleImageChange(e, certificates, setCertificates)}
                                                />
                                                {certificates?.map((item: any, index: any) => (
                                                    <div key={index} className='mx-2'>
                                                        <div className='d-flex gap-2' >
                                                            <a href={item?.url} target='_blank'>
                                                                <img alt='product_image' src={item?.url} style={{ width: '160px', height: '100px', objectFit: "cover" }} />
                                                            </a>
                                                            <span className='close cursor-pointer' onClick={() => handleRemoveImage(item?.id, setCertificates)}>&times;</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className={`${(!images?.awards?.length && errors) ? 'd-block' : 'd-none'} text-danger`}>Required.</div>
                                        </div>
                                        <label>Business Registration Certificates*</label>
                                        {documnets?.map((item: any, index: number) =>
                                            <div className='bg-light p-2 rounded mt-3' key={index}>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <a href={item?.url} target='_blank'>
                                                            {item?.medias?.map((img: any, index1: number) => (
                                                                <img src={img?.url} alt="certificates" height={60} key={index1}/>
                                                            ))}
                                                        </a>
                                                    </div>
                                                    <div>{item?.documentName}</div>
                                                    <div>{item?.documentNumber}</div>
                                                </div>
                                            </div>
                                        )}
                                        <div className='mt-3'>
                                            <Spinner show={spinner}>
                                                <button className='btn btn-dark w-100' type='submit' onClick={handleSubmit}>Save</button>
                                            </Spinner>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </section>
    )
}

export default CreateSeller



const updateSellerQuery = /* GraphQL */ `mutation UpdateSeller(
    $input: UpdateSellerInput!
    $condition: ModelSellerConditionInput
  ) {
    updateSeller(input: $input, condition: $condition) {
      id
    }
  }
  ` ;

export const getSellerQuery = /* GraphQL */ `query GetSeller($id: ID!) {
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
    }
  }
  `