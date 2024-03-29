/* eslint-disable */
// @ts-nocheck
"use client"
/* eslint-disable @nx/enforce-module-boundaries */
import { AdminPageHeader } from "../../../libs/shared/ui/src/lib/admin-page-header/admin-page-header";
import { useRef } from 'react'
import { useEffect, useState } from "react";
import { API, Storage } from "aws-amplify";
import { GraphQLQuery, GraphQLSubscription, graphqlOperation } from "@aws-amplify/api";
import moment from "moment";
import { OnUpdateMessageSubscriptionVariables } from "graphql";
import toast from "react-hot-toast";
import { Modal } from "react-bootstrap";

const Chat = () => {
    const [chatId, setChatId] = useState<string>('')
    const [chats, setChats] = useState<any>()
    const [currentSeller, setCurrentSeller] = useState<any>({})
    const [chatMessages, setChatMessages] = useState<any>([])
    const [sendMessage, setSendMessage] = useState('')
    const [files, setFiles] = useState<any>([])
    const subRef = useRef<any>(null);

    useEffect(() => {
        let temp = JSON.parse(localStorage?.getItem('seller') || '')
        setCurrentSeller(temp)
        getCreatedMessages()
    }, [])

    useEffect(() => {
        if (currentSeller?.sellerId)
            handleGetChat()
    }, [currentSeller])

    const getCreatedMessages = () => {
        if (subRef.current) {
            subRef.current.unsubscribe();
        }
        const variables = {
            filter: { chatId: { eq: chatId } }
        }
        subRef.current = API.graphql<GraphQLSubscription<OnUpdateMessageSubscriptionVariables>>(
            graphqlOperation(onCreateMessage, variables)
        ).subscribe({
            next: ({ provider, value }: any) => {
                setChatMessages((prev: any) => {
                    let media = (value?.data?.onCreateMessage?.media)
                    let content = value?.data?.onCreateMessage?.content
                    const newMessage = {
                        content: content ? JSON.parse(content) : '',
                        senderReceiver: value?.data?.onCreateMessage?.senderReceiver,
                        media: media ? JSON.parse(media) : ''
                    };
                    const updatedMessages: any = [newMessage, ...prev];
                    return updatedMessages;
                });
            },
            error: (error: any) => console.warn(error)
        });
    }

    useEffect(() => {
        if (chatId) {
            handleGetChatMessages()
        }
        getCreatedMessages()
    }, [chatId])

    const handleGetChatMessages = async () => {
        try {
            const chatMessages = await API.graphql<GraphQLQuery<any>>({
                query: searchMessages,
                variables: {
                    filter: { chatId: { eq: chatId } },
                    sort: { direction: 'desc', field: 'updatedAt' }
                }
            })
            chatMessages?.data?.searchMessages?.items?.map((item: any) => {
                let temp = item?.media
                item.content = JSON.parse(item?.content || '')
                if (temp) {
                    item.media = JSON.parse(temp)
                }
            })
            setChatMessages(chatMessages?.data?.searchMessages?.items)
        } catch (err) {
            console.log(err)
        }
    }

    const handleGetChat = async () => {
        try {
            const allChats = await API.graphql<GraphQLQuery<any>>({
                query: searchChats,
                variables: {
                    filter: { sellerId: { eq: currentSeller?.sellerId } },
                    sort: { direction: 'desc', field: 'chatMessageId' }
                }
            })
            if (allChats?.data?.searchChats?.items[0]?.message) {
                allChats?.data?.searchChats?.items?.map((item: any) => {
                    item.message.content = JSON.parse(item?.message?.content || '[]')
                })
            }
            setChats(allChats?.data?.searchChats?.items)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSendMessage = async () => {
        if (sendMessage?.trim() || files?.length > 0) {
            try {
                const buyerId = chats[chats.findIndex((item: any) => item?.id === chatId)]?.buyerId
                const content = {
                    "productQuantity": null,
                    "productImage": null,
                    "productId": null,
                    "text": sendMessage ? sendMessage : '',
                    "type": "text",
                    "productName": null
                }
                API.graphql<GraphQLQuery<any>>({
                    query: createMessage,
                    variables: {
                        input: {
                            chatId: chatId,
                            messageSenderId: currentSeller?.user?.id,
                            senderReceiver: `${currentSeller?.sellerId}:${buyerId}`,
                            content: JSON.stringify(content),
                            media: JSON.stringify(files)
                        }
                    }
                })
                setSendMessage('')
                setFiles([])
            } catch (err) {
                console.log(err)
            }
        } else {
            toast.error('please enter valid message')
        }
    }

    const handleFileChange = async (e: any, fileType: any) => {
        let toastId = toast.loading('Uploading please wait')
        const file = e.target.files[0];
        if (file) {
            const file = e.target.files[0]
            const result: any = await Storage.put(`WTX-${Math.random().toString(36).substring(2, 15)}.${file.name.split('.')[1]}`, file, { contentType: file.type });
            const url = await Storage.get(result.key, { level: 'public' })
            let ImageUrl = url.split('?')[0]
            if (ImageUrl) {
                setFiles((prev: any) => [...prev,
                {
                    id: ImageUrl?.split('/public')[1],
                    name: file?.name,
                    url: ImageUrl,
                    type: fileType?.toLowerCase(),
                }]);
                toast.dismiss(toastId)
                toast.success('uploaded')
            }
        }
    };

    return (
        <section>
            <div className="mx-7">
                <AdminPageHeader name='Chat' />
            </div>
            <div className="mx-10 bg-light" style={{ height: "75vh" }}>
                <div className="row mx-2 py-2" style={{ height: "100%" }}>
                    <div className="chat col-lg-4" style={{ height: "100%", overflowY: "auto" }} id="scroll-style">
                        {
                            chats?.map((charData: any) => (
                                <div className="cursor-pointer mb-3" key={charData?.id} onClick={() => setChatId(charData?.id)}>
                                    <Contact userId={chatId || ''} id={charData?.id} name={charData?.buyer?.name} image_url={charData?.buyer?.image} last_message={charData?.message?.content?.text} date={(moment(charData?.message?.createdAt).local().format("D-MMM-YY, HH:mm")).toString()} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="message col-lg-8 bg-white pb-3 pe-5" style={{ height: "100%" }}>
                        <div className='w-100 d-flex flex-column-reverse p-2 my-2' style={{ height: "90%", overflowY: "auto" }} id="scroll-style">
                            <div className={`w-100 d-flex ${files?.length <= 0 ? 'flex-column-reverse' : 'align-items-end gap-1 flex-wrap'}  p-2 my-2`}>
                                {
                                    files?.map((media: any, index: any) => (
                                        <div key={index}>
                                            <div className='d-flex gap-2 cursor-pointer flex-wrap my-1'>
                                                {media?.type === "image" &&
                                                    <div className='position-relative'>
                                                        <img
                                                            alt={`Image ${index}`}
                                                            src={media?.url}
                                                            height={100}
                                                            width={100}
                                                            style={{ cursor: 'pointer', objectFit: "cover", borderRadius: 7 }}
                                                        />
                                                        <i
                                                            className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer bg-light rounded"
                                                            style={{ color: 'black' }}
                                                            onClick={() => {
                                                                let temp = [...files];
                                                                temp.splice(index, 1);
                                                                setFiles(temp);
                                                            }}
                                                        ></i>
                                                    </div>
                                                }
                                                {media?.type === "document" &&
                                                    <>
                                                        <div className='position-relative'>
                                                            <a href={media?.url} target="_blank">
                                                                <img
                                                                    alt={`Image ${index}`}
                                                                    src='https://wtx-cdn.s3.amazonaws.com/img/attachment.png'
                                                                    height={100}
                                                                    width={100}
                                                                    style={{ cursor: 'pointer', objectFit: "cover", borderRadius: 7 }}
                                                                /><br /><strong className="text-center ms-4">Document</strong>
                                                            </a>
                                                            <i className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer text-dark bg-light rounded" key={media?.url} onClick={() => {
                                                                let temp = [...files];
                                                                temp.splice(index, 1);
                                                                setFiles(temp);
                                                            }}></i>
                                                        </div>
                                                    </>
                                                }
                                                {media?.type === "video" &&
                                                    <div className='position-relative'>
                                                        <a href={media?.url} target='_blank' className='d-flex gap-2 mx-2 position-relative bg-light rounded-2 text-dark' key={index}>
                                                            <video autoPlay muted loop className='d-block ' style={{ width: '100px', height: '100px' }}>
                                                                <source src={media?.url} type='video/mp4' />
                                                            </video>
                                                        </a>
                                                        <i className="bi bi-x-circle-fill p-1 position-absolute top-0 end-0 cursor-pointer text-dark bg-light rounded" key={media?.url} onClick={() => {
                                                            let temp = [...files];
                                                            temp.splice(index, 1);
                                                            setFiles(temp);
                                                        }}></i>
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            {!chatId && <p>Welcome to Chat</p>}
                            <div style={{ display: files?.length > 0 ? 'none' : '' }}>
                                {chatId &&
                                    chatMessages?.map((message: any, index: any) => {
                                        return message?.senderReceiver?.split(':')[0] === currentSeller?.sellerId ? (
                                            <div>
                                                <SenderMessage media={message?.media} key={index} content={message?.content?.text} type={message?.content?.type} timestamp={(moment(message?.updatedAt).local().format("D-MMM-YY, HH:mm")).toString()} />
                                            </div>
                                        ) : (
                                            <div>
                                                <ReceiverMessage key={index} media={message?.media} content={message?.content?.text} type={message?.content?.type} timestamp={(moment(message?.updatedAt).local().format("D-MMM-YY, HH:mm")).toString()} />
                                            </div>
                                        )
                                    }).reverse()
                                }
                            </div>
                        </div>
                        {chatId &&
                            <form className="form d-flex align-items-end justify-content-center" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group mx-sm-3 mt-2 col-10">
                                    <input className={`form-control`} id="inputtext" placeholder="Text message" value={sendMessage || ''} onChange={(e) => setSendMessage(e.target.value)} />
                                </div>
                                <button className="btn btn-primary mt-2 me-1 col-1" onClick={() => handleSendMessage()}><i className="bi bi-send"></i></button>
                                <div className="btn-group dropup-center">
                                    <button type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="bi bi-paperclip"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <div className="file-input">
                                            <input type="file" accept="image/*" name="file-input" typeof="" id="file-input" className="file-input__input"
                                                onChange={(e) => handleFileChange(e, 'Image')} />
                                            <label className="file-input__label" htmlFor="file-input">
                                                <i className="bi bi-image primary"></i>
                                                <span className="ms-1">Image</span></label>
                                        </div>

                                        <div className="file-input my-3">
                                            <input type="file" accept="video/*" name="file-input" id="file-input" className="file-input__input"
                                                onChange={(e) => handleFileChange(e, 'Video')} />
                                            <label className="file-input__label" htmlFor="file-input">
                                                <i className="bi bi-play-btn primary"></i>
                                                <span className="ms-1">Video</span></label>
                                        </div>

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
                            </form>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat;

interface ContactProps {
    name: string;
    image_url: string;
    last_message: string;
    date: string;
    id: string,
    userId: any
}

const Contact = ({ name, image_url, last_message, date, id, userId }: ContactProps) => {
    return (
        <div className="p-2 d-flex gap-1 align-items-center rounded" style={{ background: userId === id ? 'black' : 'white', color: userId === id ? 'white' : 'black' }}>
            <div className="d-flex justify-content-start align-items-center m-2">
                <img src={image_url ? image_url : 'https://wtx-cdn.s3.amazonaws.com/img/profile.png'} alt="dp" width={40} height={40} className=" rounded-circle" />
            </div>
            <div className="w-100">
                <div className="d-flex flex-row justify-content-between w-100 ">
                    <p>{name}</p>
                    <small className={`${userId === id ? 'text-white' : 'text-dark'}`}>{date}</small>
                </div>
                {/* <p>{last_message}</p> */}
            </div>
        </div>
    )
}

interface MessageProps {
    content: string;
    timestamp: string;
    type: string
    media: any
}

const SenderMessage = (message: MessageProps) => {
    const [modal, showModal] = useState<boolean>(false)
    const [modalFile, setModalFile] = useState<any>()

    return (
        <div className="sendermessage text-end" style={{ overflowWrap: 'break-word' }}>
            <div>
                <div>
                    {message?.media &&
                        message?.media?.map((media: any) =>
                            <>
                                <div key={media?.url}>
                                    {media?.type === 'image' &&
                                        <img src={media?.url} onClick={() => { setModalFile(media); showModal(true) }} width={100} height={100} className="mb-1 cursor-pointer" alt="" />
                                    }
                                    {media?.type === 'video' &&
                                        <div className="d-flex flex-column align-items-end">
                                            <video autoPlay muted loop className='d-block bg-dark cursor-pointer mb-1' onClick={() => { setModalFile(media); showModal(true) }} width={100} height={100} >
                                                <source src={media?.url} type='video/mp4' />
                                            </video>
                                        </div>
                                    }
                                </div>
                                {media?.type === 'document' &&
                                    <>
                                        <span>
                                            <img src="https://wtx-cdn.s3.amazonaws.com/img/attachment.png" className="cursor-pointer" onClick={() => { window.location.href = media?.url }} width={100} height={100} alt="" />
                                        </span>
                                        <p>{media?.name}</p>
                                    </>
                                }
                            </>
                        )
                    }
                    {message.content &&
                        <span className="p-2 m-1 rounded" style={{ background: 'black', color: 'white' }}>{message.content}</span>
                    }
                </div>
                <div className="ms-3 m-1">
                    <small className="text-muted">{message.timestamp}</small>
                </div>
            </div>

            <Modal show={modal}>
                <Modal.Body>
                    {modalFile?.type.toLowerCase() === 'image' &&
                        <img src={modalFile?.url} width={470} className="mb-1" alt="" />
                    }
                    {modalFile?.type.toLowerCase() === 'video' &&
                        <video autoPlay muted loop className='d-block' width={470} controls>
                            <source src={modalFile?.url} type='video/mp4' />
                        </video>
                    }
                    <div className="text-end p-2 m-0">
                        <button className="btn btn-dark" onClick={() => showModal(false)}>close</button>
                        <a href={modalFile?.url} target="_blank" className="ms-3"><button className="btn btn-light">Open</button></a>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

const ReceiverMessage = (message: MessageProps) => {
    const [modal, showModal] = useState<boolean>(false)
    const [modalFile, setModalFile] = useState<any>()

    return (
        <div className="receivermessage text-start">
            <div>
                <div>
                    {message?.media &&
                        message?.media.map((media: any) =>
                            <>
                                <div key={media?.url}>
                                    {media?.type.toLowerCase() === 'image' &&
                                        <img src={media?.url} onClick={() => { setModalFile(media); showModal(true) }} width={100} height={100} className="mb-1 cursor-pointer" alt="" />
                                    }
                                    {media?.type.toLowerCase() === 'video' &&
                                        <video autoPlay muted loop className='d-block cursor-pointer' onClick={() => { setModalFile(media); showModal(true) }} width={100} height={100} >
                                            <source src={media?.url} type='video/mp4' />
                                        </video>

                                    }
                                </div>
                                {media?.type.toLowerCase() === 'document' &&
                                    <>
                                        <span>
                                        <img src="https://wtx-cdn.s3.amazonaws.com/img/attachment.png" className="cursor-pointer" onClick={() => { window.location.href = media?.url }} width={100} height={100} alt="" />
                                        </span>
                                        <p>{media?.name}</p>
                                    </>
                                }
                            </>
                        )
                    }
                    {
                        message.content &&
                        <span className="p-2 m-1 rounded bg-light">{message.content}</span>
                    }
                </div>
                <div className="text-start m-1">
                    <small className="text-muted">{message.timestamp}</small>
                </div>
            </div>

            <Modal show={modal}>
                <Modal.Body>
                    {modalFile?.type.toLowerCase() === 'image' &&
                        <img src={modalFile?.url} width={470} className="mb-1" alt="" />
                    }
                    {modalFile?.type.toLowerCase() === 'video' &&
                        <video autoPlay muted loop className='d-block' width={470} controls>
                            <source src={modalFile?.url} type='video/mp4' />
                        </video>
                    }
                    <div className="text-end p-2 m-0">
                        <button className="btn btn-dark" onClick={() => showModal(false)}>close</button>
                        <a href={modalFile?.url} target="_blank" className="ms-3"><button className="btn btn-light">Open</button></a>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

const searchChats = /* GraphQL */ `
  query SearchChats(
    $filter: SearchableChatFilterInput
    $sort: [SearchableChatSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableChatAggregationInput]
  ) {
    searchChats(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        buyerId
        sellerId
        createdAt
        updatedAt
        chatMessageId
         message {
        content
        id
        createdAt
      }
       buyer {
        address
        age
        name
        image
        gender
        email
      }
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
`;

const searchMessages = /* GraphQL */ `
  query SearchMessages(
    $filter: SearchableMessageFilterInput
    $sort: [SearchableMessageSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableMessageAggregationInput]
  ) {
    searchMessages(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        chatId
        sellerId
        buyerId
        senderReceiver
        content
        media
        readBy
        createdAt
        updatedAt
        messageParentMessageId
        messageSenderId
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
`;

const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      chatId
      chat {
        id
        buyerId
        sellerId
        createdAt
        updatedAt
        chatMessageId
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
        industryId
        businessId
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
      parentMessage {
        id
        chatId
        sellerId
        buyerId
        senderReceiver
        content
        media
        readBy
        createdAt
        updatedAt
        messageParentMessageId
        messageSenderId
        __typename
      }
      sender {
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
      senderReceiver
      content
      media
      readBy
      createdAt
      updatedAt
      messageParentMessageId
      messageSenderId
      __typename
    }
  }
`;

const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      chatId
      chat {
        id
        buyerId
        sellerId
        createdAt
        updatedAt
        chatMessageId
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
        industryId
        businessId
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
      parentMessage {
        id
        chatId
        sellerId
        buyerId
        senderReceiver
        content
        media
        readBy
        createdAt
        updatedAt
        messageParentMessageId
        messageSenderId
        __typename
      }
      sender {
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
      senderReceiver
      content
      media
      readBy
      createdAt
      updatedAt
      messageParentMessageId
      messageSenderId
      __typename
    }
  }
`;
