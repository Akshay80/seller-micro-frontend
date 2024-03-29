"use client"
import { GraphQLQuery } from "@aws-amplify/api"
import toast from 'react-hot-toast';
import { API, Storage } from "aws-amplify"
import { useEffect, useState } from "react"
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';

const initialState = {
    quantity: '',
    amount: '',
    details: {
        details: '',
        sellerComment: ''
    },
    quoteId: ''
}

const RequestForQuote = () => {
    const [quotes, setQuotes] = useState([])
    const [sellerId, setSellerId] = useState<string | null>(null);
    const [tabStatus, setTabStatus] = useState('PENDING')
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState(initialState)
    const [assets, setAssets] = useState<any[]>([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                let currentSellerId = JSON.parse(window.localStorage.getItem("seller") || '');
                setSellerId(currentSellerId?.sellerId)
            } else {
                console.log("not avaialable");
            }
        } catch (error) {
            console.log(error)
        }
    }, [])


    useEffect(() => {
        if (sellerId) {
            fetchQuotes()
        }
    }, [sellerId, tabStatus])

    const fetchQuotes = async () => {
        setLoading(true)
        try {
            let response = await API.graphql<GraphQLQuery<any>>({
                query: searchQuotes,
                variables: { filter: { sellerId: { eq: sellerId }, status: { eq: tabStatus } } }
            });
            const parsedQuotes = response.data.searchQuotes.items.map((quote: any) => {
                const parsedMedia = JSON.parse(quote.media);
                const parsedDetails = JSON.parse(quote.details)
                return {
                    ...quote,
                    media: parsedMedia,
                    details: parsedDetails.details,
                    sellerComment: parsedDetails.sellerComment,
                }
            })
            setQuotes(parsedQuotes)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const handleReject = async (id: any) => {
        try {
            await API.graphql<GraphQLQuery<any>>({
                query: updateQuote,
                variables: { input: { id: id, status: 'REJECTED' } }
            });
            toast.success("Rejected")
            fetchQuotes()
        } catch (error) {
            console.log(error);
        }
    }

    const handlegetData = (data: any) => {
        setValues({
            ...values,
            quantity: data.quantity,
            quoteId: data?.id,
            details: {
                ...values.details, // Copy existing details properties
                sellerComment: data.details.sellerComment // Update sellerComment
            }
        })
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const handleFileChange = async (e: any, type: any) => {
        const toastId = toast.loading('Uploading...');
        if (e.target.files) {
            const file = e.target.files[0]
            const stored = await Storage.put(`WTX-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type });
            const url = await Storage.get(stored.key, { level: 'public' })
            let ImageUrl = url.split('?')[0]
            if (ImageUrl) {
                const parts = ImageUrl.split('/');
                const filename = parts[parts.length - 1];
                const id = filename.split('.')[0];
                const name = filename
                const updatedAssets = [...assets, { url: ImageUrl, type, id, name }]
                setAssets(updatedAssets)
            }
            toast.dismiss(toastId);
        }
    }

    const handleRemoveItem = (indexToRemove: number) => {
        const updatedAssets = assets.filter((_, index) => index != indexToRemove)
        setAssets(updatedAssets)
      }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const mediaData = JSON.stringify(assets)
        const { amount, details, quantity, quoteId } = values;

        const sellerCommentValue = typeof details === 'string' ? details : ''; // Validate 'details' or set a default value

        const detailsData = {
            sellerComment: sellerCommentValue,
        }

        const data = {
            id: quoteId,
            amount: amount,
            quantity: quantity,
            details: JSON.stringify(detailsData),
            media: mediaData,
            status: 'ACCEPTED'
        }

        try {
            await API.graphql<GraphQLQuery<any>>({
                query: updateQuote,
                variables: { input: data }
            });
            fetchQuotes()
        } catch (error) {
            console.log(error);
        }

        setValues(initialState)
        setAssets([])
        handleClose()
    }



    return (
        <>
            {/* javascript behavior pills */}
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" onClick={() => setTabStatus('PENDING')}>
                    <a
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                    >
                        New
                    </a>
                </li>
                <li className="nav-item" onClick={() => setTabStatus('ACCEPTED')}>
                    <a
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                    >
                        Accepted
                    </a>
                </li>
                <li className="nav-item" onClick={() => setTabStatus('REJECTED')}>
                    <a
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                    >
                        Rejected
                    </a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    {loading ? <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div> :
                        <div className="row">
                            {quotes.length > 0 ? ( quotes.map((quote: any) => {
                                const formattedDate = moment(quote?.createdAt).format('ddd, MM/DD/YYYY');
                                return (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={quote?.id}>
                                        <div className="card card-product h-100" style={{ maxWidth: 390 }}>
                                            {/* card body */}
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    {/* col */}
                                                    <div className="col-md-4 col-12">
                                                        <div className="text-center position-relative">
                                                            <img src={quote?.product?.image || ''} alt="worldtradex" className="img-fluid rounded" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 col-12 flex-grow-1">
                                                        <h2 className="fs-6">
                                                            {quote?.product?.name}
                                                        </h2>
                                                        <div className="text-small mb-1">
                                                            <small>Quantity: {quote?.quantity}</small>
                                                        </div>
                                                        <div className="text-small mb-1">
                                                            <small>Date: {formattedDate}</small>
                                                        </div>
                                                        <div className="text-small mb-1">
                                                            <b>Details: {JSON.stringify(quote?.details) || ""}</b>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <button type="button" className="btn btn-secondary fs-6" onClick={() => handleReject(quote?.id)}>Reject</button>
                                                    <button type="button" className="btn btn-dark fs-6" onClick={() => {
                                                        handleShow()
                                                        handlegetData(quote)
                                                    }}>Accept</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })) : (
                                <p>No Data</p>
                            )}
                        </div>
                    }
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                >
                    <div className="row">
                        {loading ? <div className="spinner-border" role="status">
                            <span className="visually-hidden"></span>
                        </div> :
                            <div className="row">
                                {quotes.length > 0 ? ( quotes.map((quote: any) => {
                                    const formattedDate = moment(quote?.createdAt).format('ddd, MM/DD/YYYY');
                                    return (
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={quote?.id}>
                                            <div className="card card-product" style={{ maxWidth: 390 }}>
                                                {/* card body */}
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        {/* col */}
                                                        <div className="col-md-4 col-12">
                                                            <div className="text-center position-relative">
                                                                <img src={quote?.product?.image || ''} alt="worldtradex" className="img-fluid rounded" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8 col-12 flex-grow-1">
                                                            <h2 className="fs-6">
                                                                {quote?.product?.name}
                                                            </h2>
                                                            <div className="text-small mb-1">
                                                                <small>Quantity: {quote?.quantity}</small>
                                                            </div>
                                                            <div className="text-small mb-1">
                                                                <small>Date: {formattedDate}</small>
                                                            </div>
                                                            <div className="text-small mb-1">
                                                                {quote?.details && <b> Details: {`${quote?.details && JSON.stringify(quote?.details) || ""}`}</b> }
                                                                {quote?.sellerComment && <b> SellerComment: {`${quote?.sellerComment && JSON.stringify(quote?.sellerComment) || ""}`}</b>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })) : (
                                    <p>No Data</p>
                                )}
                            </div>
                        }
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                >
                    <div className="row">
                        {loading ? <div className="spinner-border" role="status">
                            <span className="visually-hidden"></span>
                        </div> :
                            <div className="row">
                                {quotes.length > 0 ? ( quotes.map((quote: any) => {
                                    const formattedDate = moment(quote?.createdAt).format('ddd, MM/DD/YYYY');
                                    return (
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={quote?.id}>
                                            <div className="card card-product" style={{ maxWidth: 390 }}>
                                                {/* card body */}
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        {/* col */}
                                                        <div className="col-md-4 col-12">
                                                            <div className="text-center position-relative">
                                                                <img src={quote?.product?.image || ''} alt="worldtradex" className="img-fluid rounded" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8 col-12 flex-grow-1">
                                                            <h2 className="fs-6">
                                                                {quote?.product?.name}
                                                            </h2>
                                                            <div className="text-small mb-1">
                                                                <small>Quantity: {quote?.quantity}</small>
                                                            </div>
                                                            <div className="text-small mb-1">
                                                                <small>Date: {formattedDate}</small>
                                                            </div>
                                                            <div className="text-small mb-1">
                                                                <b>Details: {JSON.stringify(quote?.details) || ""}</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })) : (
                                    <p>No Data</p>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Request For Quotation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label" htmlFor="quantity">
                                    Quantity
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    required
                                    type="number"
                                    id="quantity"
                                    className="form-control"
                                    name="quantity"
                                    placeholder="Enter Your Quantity"
                                    value={values.quantity}
                                    onChange={handleChange}
                                />
                                <div className="invalid-feedback">Please enter quantity.</div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label" htmlFor="price">
                                    Preferred price
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    required
                                    type="number"
                                    id="amount"
                                    className="form-control"
                                    name="amount"
                                    placeholder="Enter Your price"
                                    value={values.amount}
                                    onChange={handleChange}
                                />
                                <div className="invalid-feedback">Please enter amount.</div>
                            </div>

                            <div className="col-md-12 mb-3">
                                {/* input */}
                                <label htmlFor="validationTextarea" className="form-label">
                                    Comments
                                </label>
                                <textarea
                                    required
                                    className="form-control"
                                    id="validationTextarea"
                                    rows={4}
                                    name="details"
                                    placeholder="Enter Your Comments"
                                    value={values.details.sellerComment}
                                    onChange={handleChange}
                                />
                                <div className="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">
                                    Select Image
                                </label>
                                {/* <input className="form-control" type="file" accept="image/*" name="file-input" typeof="" id="file-input"
                                onChange={(e) => handleFileChange(e, 'image')} /> */}
                                <div className="btn-group dropup-center">
                                    <button type="button" className="btn btn-secondary ms-4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Choose File
                                    </button>
                                    <div className="dropdown-menu">
                                        <div className="file-input">
                                            <input type="file" accept="image/*" name="file-input" typeof="" id="file-input" className="file-input__input"
                                                onChange={(e) => handleFileChange(e, 'image')} />
                                            <label className="file-input__label" htmlFor="file-input">
                                                <i className="bi bi-image primary"></i>
                                                <span className="ms-1">Image</span>
                                            </label>
                                        </div>
                                        <br />

                                        <div className="file-input">
                                            <input type="file" name="file-input" id="file-input" className="file-input__input"
                                                accept=".doc, .docx, .pdf, .txt, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf, text/plain"
                                                onChange={(e) => handleFileChange(e, 'document')}
                                            />
                                            <label className="file-input__label" htmlFor="file-input">
                                                <i className="bi bi-file-earmark primary"></i>
                                                <span className="ms-1">Document</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {assets.length > 0 && <div className="mx-4">
                  <div className="card mb-3 card-lift w-auto">
                    <div className="card-body text-center py-6 text-center d-flex justify-content-start flex-wrap">
                      {assets?.map((item, index) => {
                        return (
                          <div className="position-relative me-3" key={index}>
                            {item.type.toLowerCase() === 'image' && (
                              <img src={item?.url} alt="image" className="img-fluid" style={{ width: '75px' }} />
                            )}
                            {item.type.toLowerCase() === 'video' && (
                              <video autoPlay muted loop className='d-block ' style={{ width: '100px', height: '100px' }}>
                                <source src={item?.url} type='video/mp4' />
                              </video>
                            )}
                            {item.type.toLowerCase() === 'document' && (
                              <div className="document-display">
                                <img src="https://wtx-cdn.s3.amazonaws.com/img/PDF_file_icon.svg.png" alt="" className="img-fluid" style={{ width: '75px' }} />
                              </div>
                            )}
                            <div className="position-absolute bg-dark p-1 rounded cursor-pointer" onClick={() => handleRemoveItem(index)} style={{ top: '0', right: '0' }}>
                              <i className="bi bi-x-circle"></i>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>}

                            <div className="text-center">
                                <button type="submit" className="btn btn-dark mb-2 w-50">
                                    Accept
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default RequestForQuote

  const searchQuotes = /* GraphQL */ `query SearchQuotes(
    $filter: SearchableQuoteFilterInput
    $sort: [SearchableQuoteSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableQuoteAggregationInput]
  ) {
    searchQuotes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        product {
            name
            image
          }
        id
        productId
        buyerId
        sellerId
        quantity
        amount
        media
        details
        status
        createdAt
        updatedAt
        __typename
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
  `

const updateQuote = /* GraphQL */ `mutation UpdateQuote(
    $input: UpdateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    updateQuote(input: $input, condition: $condition) {
      id
      productId
      product {
        id
        code
        name
        description
        image
        images
        documents
        listPrice
        unitPrice
        tierPrice
        unitType
        taxCategoryId
        attributes
        weight
        active
        verified
        taxExempt
        keywords
        leadTime
        rating
        stock
        sellerId
        productCategoryId
        productSubCategoryId
        createdAt
        updatedAt
        __typename
      }
      buyerId
      buyer {
        id
        buyerType
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
        categories
        rating
        age
        gender
        createdAt
        updatedAt
        buyerCartId
        __typename
      }
      sellerId
      seller {
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
        details
        productDetails
        industryId
        businessId
        createdAt
        updatedAt
        __typename
      }
      quantity
      amount
      media
      details
      status
      createdAt
      updatedAt
      __typename
    }
  }
  `

