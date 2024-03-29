import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Explore Product Features - ${PAGE_TITLE}`,
    description: '',
};

const Features = () => {
    return (
        <section>
            <div style={{ background: '#F8F8F8' }}>
                <div className='container py-16'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='w-50'>
                            <h1 className='display-5'>
                                Grow your margins with a suite of tools built for B2B sales
                            </h1>
                            <p>From marketing to prospecting to shipping, take advantage of these tools and services to help you expand your sales online.</p>
                        </div>
                        <div>
                            <img src='img/b2b-3.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='' style={{ background: '#E6EFFF', fontWeight: '700' }}>
                <div className='container '>
                    <div className='d-flex justify-content-around align-items-center text-dark fs py-5 feature'>
                        <span>Storefront and catalog</span>
                        <span>Communication</span>
                        <span>Ads and lead generation</span>
                        <span>Analytics and support</span>
                        <span>Order management</span>
                    </div>
                </div>
            </div>

            <div style={{ background: '#FDFEFE' }}>
                <div className='container py-17'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div style={{ boxShadow: '20px 30px 200px 0 rgba(37,53,85,.25)' }}>
                            <img src='img/b2b-3.png' alt='' />
                        </div>
                        <div className='w-50'>
                            <p className='text-blue fs'>Storefront and catalog</p>
                            <h1 className='display-5'>
                                Bring your catalog online to attract more customers
                            </h1>
                            <p>
                                A robust online product offering is fundamental to drive ecommerce sales.
                                Set up one storefront within the WorldTradeX marketplace to reach global
                                buyers, and optimize product listings for maximum exposure.
                            </p>
                            <div className='accordion accordion-flush' id='accordionFlushExample'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingOne'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseOne' aria-expanded='false'
                                            aria-controls='flush-collapseOne'>
                                            <i className='bi bi-compass pe-2' /> StorFront
                                        </button>
                                    </h2>
                                    <div id='flush-collapseOne' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            Placeholder content for this accordion, which is intended
                                            Create a digital identity that helps you brand your business and showcase your capabilities -
                                            no design or coding required. <span className='text-blue cursor-pointer'> Want to set up a storefront?</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingTwo'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseTwo' aria-expanded='false'
                                            aria-controls='flush-collapseTwo'>
                                            <i className='bi bi-bank pe-2' /> Smart product posting
                                        </button>
                                    </h2>
                                    <div id='flush-collapseTwo' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingTwo' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            Apply to try out poducts posting feature for 30 days. Get started to see what
                                            your products exhibition could look like on WorldTradeX.
                                            <span className='text-blue cursor-pointer'> Apply Now</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingThree'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseThree' aria-expanded='false'
                                            aria-controls='flush-collapseThree'>
                                            <i className='bi bi-coin pe-2' />Dynamic pricing
                                        </button>
                                    </h2>
                                    <div id='flush-collapseThree' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingThree' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            Negotiate pricing with customers, configure ladder pricing, and set Minimum Order Quantities to optimize each individual sale.
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingfour'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseFour' aria-expanded='false'
                                            aria-controls='flush-collapseFour'>
                                            <i className='bi bi-wallet-fill pe-2' />API integration
                                        </button>
                                    </h2>
                                    <div id='flush-collapseFour' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingfour' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            Get everything you need to start building your storefront how you want it - including open-source code documentation.
                                            <span className='text-blue cursor-pointer'> Learn more</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: 'rgb(242, 244, 248)' }}>
                <div className='container py-17'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='w-50'>
                            <p className='text-blue fs'>Communication</p>
                            <h1 className='display-5'>
                                Connect freely to build lasting relationships
                            </h1>
                            <p>
                                Interact with customers on your terms and own the relationships,
                                customer contact information, and buyers’ background information
                                to foster loyalty and repeat sales.
                            </p>
                            <div className='accordion accordion-flush' id='accordionFlushExampleTwo' style={{ background: 'rgb(242, 244, 248)' }}>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingToolOne'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-toolOne' aria-expanded='false'
                                            aria-controls='flush-toolOne'>
                                            <i className='bi bi-translate pe-2' /> StorFront
                                        </button>
                                    </h2>
                                    <div id='flush-toolOne' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingToolOne' data-bs-parent='#accordionFlushExampleTwo'>
                                        <div className='accordion-body'>
                                            Communicate seamlessly with conversations translated into 18 languages, so you can sell to a global buyer base.
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingToolTwo'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseToolTwo' aria-expanded='false'
                                            aria-controls='flush-collapseToolTwo'>
                                            <i className='bi bi-chat-left-dots-fill pe-2' /> Smart product posting
                                        </button>
                                    </h2>
                                    <div id='flush-collapseToolTwo' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingToolTwo' data-bs-parent='#accordionFlushExampleTwo'>
                                        <div className='accordion-body'>
                                            Each sale is a conversation that starts with an inquiry, so you can know your customers better and build a book of business.
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingToolThree'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseToolThree' aria-expanded='false'
                                            aria-controls='flush-collapseToolThree'>
                                            <i className='bi bi-handbag pe-2' />Dynamic pricing
                                        </button>
                                    </h2>
                                    <div id='flush-collapseToolThree' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingToolThree' data-bs-parent='#accordionFlushExampleTwo'>
                                        <div className='accordion-body'>
                                            Get your products in front of potential customers in a more intimate, live setting.
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingToolFour'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseToolFour' aria-expanded='false'
                                            aria-controls='flush-collapseToolFour'>
                                            <i className='bi bi-phone-fill pe-2' />API integration
                                        </button>
                                    </h2>
                                    <div id='flush-collapseToolFour' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingToolFour' data-bs-parent='#accordionFlushExampleTwo'>
                                        <div className='accordion-body'>
                                            Manage your business on the go, so you can communicate with leads immediately while their interest is high.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='img/b2b-3.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#FDFEFE' }}>
                <div className='container py-13'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div style={{ boxShadow: '20px 30px 200px 0 rgba(37,53,85,.25)' }}>
                            <img src='https://cdn.worldtradex.com/img/feactures-1.jpg' alt='' width={600} />
                        </div>
                        <div className='w-40'>
                            <p className='text-blue fs'>Ads and lead generation</p>
                            <h1 className='display-5'>Increase awareness and sales with marketing tools</h1>
                            <p className='fs fw pt-2'>
                                Find the right buyers for your products and market directly to them with tools to increase exposure and conversions.
                            </p>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center align-items-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-shop-window' />
                                    </div>
                                    <div>
                                        <p className='text-dark p-0 m-0 font-weight-bold cursor-pointer'>Product showcases <i className='ps-1 bi bi-box-arrow-up-right' /></p>
                                        <p>Display top products to get up to 43% more exposure, with smart recommendations for which to use.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center align-items-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-arrows-move' />
                                    </div>
                                    <div>
                                        <p className='text-dark p-0 m-0 font-weight-bold cursor-pointer'>Keyword Advertising <i className='ps-1 bi bi-box-arrow-up-right' /></p>
                                        <p>based on geography, click history, and more - and only pay per click.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center align-items-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-ticket-perforated-fill' />
                                    </div>
                                    <div>
                                        <p className='text-dark p-0 m-0 font-weight-bold cursor-pointer'>Request for Quotation (RFQ) <i className='ps-1 bi bi-box-arrow-up-right' /></p>
                                        <p>Proactively find and connect with buyers requesting products similar to yours.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center align-items-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-tag' />
                                    </div>
                                    <div>
                                        <p className='text-dark p-0 m-0 font-weight-bold cursor-pointer'>Sitewide promotions <i className='ps-1 bi bi-box-arrow-up-right' /></p>
                                        <p>Participate in WorldTradeX-sponsored campaigns to enjoy increased traffic periods and interest.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div style={{ background: 'rgb(242, 244, 248)' }}>
                <div className='bg-verified-supplier-SGS'>
                    <img src='https://cdn.worldtradex.com/img/verified-supplier-1.jpg' alt='' className='img-fluid' />
                </div>
                <div className='container py-13'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='w-40'>
                            <p className='text-blue fs'>Analytics and support</p>
                            <h1 className='display-5'>Continuously improve your store and sales</h1>
                            <p className='fs fw pt-2'>
                                Get optimization suggestions from site-based algorithms, and playbooks from industry experts and the professionals at WorldTradeX.
                            </p>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center align-items-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-bar-chart-fill' />
                                    </div>
                                    <div>
                                        <p className='text-dark p-0 m-0 font-weight-bold cursor-pointer'>Dashboards <i className='ps-1 bi bi-box-arrow-up-right' /></p>
                                        <p>Visualize your store’s metrics and historical data, and get intelligent suggestions based on platform information.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center align-items-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-speedometer2' />
                                    </div>
                                    <div>
                                        <p className='text-dark p-0 m-0 font-weight-bold cursor-pointer'>Industry analytics <i className='ps-1 bi bi-box-arrow-up-right' /></p>
                                        <p>Understand the state of your category and which products perform best through demand analysis, trend analysis price comparisons, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center align-items-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-headset' />
                                    </div>
                                    <div>
                                        <p className='text-dark p-0 m-0 font-weight-bold cursor-pointer'>One-on-one support <i className='ps-1 bi bi-box-arrow-up-right' /></p>
                                        <p>Get help when you need it through virtual support, and account management services online and on the phone.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center align-items-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-mortarboard' />
                                    </div>
                                    <div>
                                        <p className='text-dark p-0 m-0 font-weight-bold cursor-pointer'>Resources <i className='ps-1 bi bi-box-arrow-up-right' /></p>
                                        <p>Participate in courses and workshops in the free Seller Academy, and read articles and attend events with experts to stay on top of your industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ boxShadow: '20px 30px 200px 0 rgba(37,53,85,.25)' }}>
                            <img src='https://cdn.worldtradex.com/img/feactures-1.jpg' alt='' width={600} />
                        </div>
                    </div>
                </div>
                <div className='bg-verified-supplier-SGS'>
                    <img src='https://cdn.worldtradex.com/img/verified-supplier-2.jpg' alt='' className='img-fluid' />
                </div>
            </div>

            <div className='container py-14'>
                <div className=' text-center pt-1 pt-xl-3 mb-lg-4'>
                    <p className='text-blue fs-4 fw'>Order management</p>
                    <h2 className='h1 display-7'>Manage every step in one place</h2>
                    <p className='px-10 pt-3 fs fw text-dark px-18' style={{ fontSize: '20px' }}>
                        Deliver more value to your buyers by providing them with everything they need in one place.
                        Take advantage of on-platform tools that ensure a simple, seamless process for you and your
                        buyers.
                    </p>
                </div>

                <div className='row'>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='card h-100 card-body card-hover mx-2 text-dark' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                            <h3 className='h5 pt-3 pb-1 mb-2'>Protection</h3>
                            <p className='py-1' style={{ borderBottom: '5px solid #245ECF', width: '50px' }} />
                            <p className='mb-0 fs-8 fw'>Accept customer payments through WorldTradeX and protect your shipments and customers through WorldTradeX’s Trade Assurance.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='card h-100 card-body card-hover mx-2 text-dark' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                            <h3 className='h5 pt-3 pb-1 mb-2'>Payments </h3>
                            <p className='py-1' style={{ borderBottom: '5px solid #245ECF', width: '50px' }} />
                            <p className='mb-0 fs-8 fw'>Facilitate secure payments through financing services, wire transfer, credit card, or ACH, and transfer funds into your personal account to get paid - with either low or no commissions taken depending on your country.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='card h-100 card-body card-hover mx-2 text-dark' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                            <h3 className='h5 pt-3 pb-1 mb-2'>Logistics </h3>
                            <p className='py-1' style={{ borderBottom: '5px solid #245ECF', width: '50px' }} />
                            <p className='mb-0 fs-8 fw'>Leverage flexible shipping templates that enable you to use WorldTradeX Shipping or your own logistics provider for quotes and fulfillment.</p>
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

export default Features