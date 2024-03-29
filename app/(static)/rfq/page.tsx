import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Gain Buyer Leads - ${PAGE_TITLE}`,
    description: '',
};

const Rfq = () => {
    return (
        <section>
            <div style={{ background: '#F8F8F8' }} className='py-13 pb-16'>
                <div className='container'>
                    <div className='d-flex justify-content-center align-items-center gap-16'>
                        <div>
                            <h1 style={{ color: '#183071' }} className='display-5'>Streamline lead generation and start sales with WorldTradeX RFQ</h1>
                            <p className='fs-5 pt-2 fw'>
                                Connect with buyers with a demand for your products in the WorldTradeX.com Request for Quotation (RFQ) market. Browse order requests and provide quotes to warm leads to streamline your sales process.
                            </p>
                        </div>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' width={400} height={350} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='' style={{ background: '#E6EFFF', fontWeight: '700' }}>
                <div className='container '>
                    <div className='d-flex justify-content-around align-items-center text-dark fs py-5 feature'>
                        <span>Business opportunites</span>
                        <span>About WorldTradeX RFQ</span>
                        <span>WorldTradeX RFQ</span>
                        <span>How it works</span>
                        <span>How to use</span>
                    </div>
                </div>
            </div>

            <div style={{ background: 'rgb(242, 244, 248)' }}>
                <div className='container py-17'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div style={{ boxShadow: '20px 30px 200px 0 rgba(37,53,85,.25)' }}>
                            <img src='img/rfq-2.jpg' alt='' width={500} className='img-fluid' />
                        </div>
                        <div className='w-50'>
                            <p className='text-blue fs'>About WorldTradeX RFQ</p>
                            <h1 className='display-5'>
                                What is WorldTradeX RFQ?
                            </h1>
                            <p>
                                WorldTradeX.com Request for Quotation (RFQ) is a marketplace that allows sellers
                                to take the initiative to connect with buyers. Prospective buyers post
                                descriptions of products they need, and sellers respond with a quote
                                for the request.
                            </p>
                            <div className='accordion accordion-flush' id='accordionFlushExample'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingOne'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseOne' aria-expanded='false'
                                            aria-controls='flush-collapseOne'>
                                            <i className='bi bi-compass pe-2' /> 20,000 new requests each day
                                        </button>
                                    </h2>
                                    <div id='flush-collapseOne' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            Each day, over 20,000 new requests are posted on the RFQ market. Each request presents a unique business opportunity.
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingTwo'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseTwo' aria-expanded='false'
                                            aria-controls='flush-collapseTwo'>
                                            <i className='bi bi-bank pe-2' /> Inquiries from 5,000+ industries
                                        </button>
                                    </h2>
                                    <div id='flush-collapseTwo' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingTwo' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            The WorldTradeX RFQ market has inquiries from more than 5000 industries, supporting sellers get opportunities in different businesses.
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingThree'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseThree' aria-expanded='false'
                                            aria-controls='flush-collapseThree'>
                                            <i className='bi bi-coin pe-2' />Trade between 200+ countries
                                        </button>
                                    </h2>
                                    <div id='flush-collapseThree' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingThree' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            WorldTradeX RFQ connects buyers and sellers from over 200 countries. This creates many opportunities for growth via cross-border trade.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#FDFEFE' }}>
                <div className='container py-13'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='w-40'>
                            <p className='text-blue fs'>WorldTradeX RFQ</p>
                            <h1 className='display-5'>Why do sellers need WorldTradeX RFQ?</h1>
                            <p className='fs fw pt-2'>
                                The RFQ market is valuable to sellers for a variety of reasons. Not only does it help sellers to make more sales in a shorter amount of time, but it opens doors for other areas of business, as well.
                            </p>
                            <div>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className='bi bi-newspaper' />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>Innovative</h3>
                                            <p>WorldTradeX.com provides for a sizable global B2B bidding market, making it the go-to solution for buyers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className='bi bi-camera-video' />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>Suitable for new brands</h3>
                                            <p>With WorldTradeX RFQ, you don’t need to attract buyers with established branding. You must simply be capable of meeting buyers’ needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className='bi bi-window-stack' />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>Exclusive Pavillion</h3>
                                            <p>Only Verified Suppliers could be listed in the Source from Factories entry and Find Manufacturers portal.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/rfq-1.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: 'rgb(242, 244, 248)' }}>
                <div className='container py-13'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/rfq-2.jpg' alt='' />
                        </div>
                        <div className='w-40'>
                            <p className='text-blue fs'>How it works</p>
                            <h1 className='display-5'>How WorldTradeX RFQ boosts your business</h1>
                            <p className='fs fw pt-2'>
                                The WorldTradeX RFQ market helps B2B sellers take their businesses to the next level by providing high-quality leads,
                                forging valuable professional relationships, and facilitating sales. This unique marketplace creates a springboard
                                with significant growth in your business.
                            </p>
                            <div className='accordion accordion-flush' id='accordionFlushExample'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingOne'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseOne' aria-expanded='false'
                                            aria-controls='flush-collapseOne'>
                                            <i className='bi bi-compass pe-2' /> Shortens the sales process
                                        </button>
                                    </h2>
                                    <div id='flush-collapseOne' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            On average, it takes 3 days for buyers and sellers to finalize deals that are initiated in the RFQ market.
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingTwo'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseTwo' aria-expanded='false'
                                            aria-controls='flush-collapseTwo'>
                                            <i className='bi bi-bank pe-2' /> Creates long-term business relationships
                                        </button>
                                    </h2>
                                    <div id='flush-collapseTwo' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingTwo' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            WorldTradeX RFQ is about more than making one-time sales. It helps buyers and sellers start long-lasting business relationships.
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingThree'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseThree' aria-expanded='false'
                                            aria-controls='flush-collapseThree'>
                                            <i className='bi bi-coin pe-2' />Provides valuable information
                                        </button>
                                    </h2>
                                    <div id='flush-collapseThree' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingThree' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            WorldTradeX RFQ provides access to information on buyers’ wants and needs. This information is valuable for sales, marketing, and more.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#FDFEFE' }}>
                <div className='container py-13'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='w-40'>
                            <p className='text-blue fs'>How to use</p>
                            <h1 className='display-5'>How to use WorldTradeX RFQ to boost sales</h1>
                            <p className='fs fw pt-2'>
                                WorldTradeX RFQ is quite easy to use. All you have to do is browse RFQ postings, select a high-quality RFQ, and submit an attractive quote.
                            </p>
                            <div>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className='bi bi-newspaper' />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>Browse RFQ postings</h3>
                                            <p>Browse requests in the “RFQ Markets.” Search for specific keywords within your niche or filter results based on request category.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className='bi bi-camera-video' />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>Select a high-quality RFQ</h3>
                                            <p>Choose a quote that you are capable of fulfilling. Ensure that you are able to meet the requester’s requirements.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className='bi bi-window-stack' />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>Submit a quote</h3>
                                            <p>Answer the requests with a detailed quote that demonstrates your ability to fulfill the requester’s needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/rfq-2.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-blue py-15'>
                <div className='p-15'>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <span className='fs-1 text-white'>Ready to Grow Your Business?</span>
                        <div className='d-flex align-items-center gap-3 pt-4'>
                            <button type='button' className='btn btn-outline-white btn-radius btn-padding py-2'><span className='fs-5'>Chat with consultant</span></button>
                            <button className='btn btn-white btn-radius text-black px-7 py-2' type='submit'><span className='fs-5'>Start Selling</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rfq