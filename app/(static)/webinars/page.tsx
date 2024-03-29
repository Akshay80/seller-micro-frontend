import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Webinars - ${PAGE_TITLE}`,
    description: '',
};

const Webinars = () => {
    return (
        <section>
            <div className='px-18 mx-10'>
                <div className='webinar text-white'>
                    <div className='webinar-text'>
                        <h1 className='text-white'>Webinars</h1>
                        <p className='fs fw w-50' style={{ textShadow: '0 2px 4px rgba(0,0,0,.5)', lineHeight: '24px' }}>
                            Get insights, advice, and inspiration from live and pre-recorded webinars featuring experts who
                            have mastered their fields - and can help you master yours.
                        </p>
                    </div>
                </div>
            </div>

            <section className='mt-lg-7'>
                <div className='container px-11'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <ul className='nav nav-pills nav-lb-tab' id='myTab' role='tablist'>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link active' id='product-tab' data-bs-toggle='tab' data-bs-target='#app-tab-pane' type='button' role='tab' aria-controls='app-tab-pane' aria-selected='true'>All</button>
                                </li>

                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='details-tab' data-bs-toggle='tab' data-bs-target='#live-webinars-tab-pane' type='button' role='tab' aria-controls='live-webinars-tab-pane' aria-selected='false' tabIndex={1}>Live Webinars</button>
                                </li>

                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='reviews-tab' data-bs-toggle='tab' data-bs-target='#pre-recorded-tab-pane' type='button' role='tab' aria-controls='pre-recorded-tab-pane' aria-selected='false' tabIndex={1}>Pre-recorded Courses</button>
                                </li>

                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='sellerInfo-tab' data-bs-toggle='tab' data-bs-target='#sellerInfo-tab-pane' type='button' role='tab' aria-controls='sellerInfo-tab-pane' aria-selected='false' tabIndex={1}>Seller Info</button>
                                </li>
                            </ul>

                            <div className='tab-content' id='myTabContent'>
                                <div className='tab-pane fade show active' id='app-tab-pane' role='tabpanel' aria-labelledby='product-tab' tabIndex={0}>
                                    <div className='d-flex justify-content-between'>
                                        <div className='container-fluid pt-5 pb-5'>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='card card-body card-hover my-8'>
                                                <div>
                                                    <div>
                                                        <h4><i className='bi bi-shield-fill-check' /> Most popular</h4>
                                                        <hr />
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>WorldTradeX x ITC: How B2B eCommerce benefit small businesses</h4>
                                                        <p>Live Webinars</p>
                                                    </div>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Understanding Global Gold Supplier - What are WorldTradeX and GGS?</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Cross border trade trends analysis</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>WorldTradeX: l&#39;acceleratore per l&#39;export delle PMI italiane</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>WorldTradeX: la chiave per l&#39;espansione globale delle PMI italiane</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Understanding Global Gold Supplier - How to post attractive products on WorldTradeX?</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>&#39;Beauty meets Digital B2B&#39; - Internationaler B2B Export für die Beauty Industrie</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='card card-body card-hover mx-2 my-8'>
                                                    <div>
                                                        <div>
                                                            <h4><i className='bi bi-play-btn-fill' /> On demand Webinar</h4>
                                                            <hr />
                                                        </div>
                                                        <div className='text-muted'>
                                                            <h4 className='fw'>Understanding Global Gold Suppliers - What is RFQ and why it is useful?</h4>
                                                            <p>Pre-recorded Courses</p>
                                                        </div>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Understanding Global Gold Supplier - How to post attractive products on WorldTradeX?</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Understanding Global Gold Supplier - What are WorldTradeX and GGS?</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - home & garden analysis trends</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Cross border trade trends analysis</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Skincare & Makeup trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Hats & Scarves trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Jewelry&Glasses trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='tab-pane fade' id='live-webinars-tab-pane' role='tabpanel' aria-labelledby='details-tab' tabIndex={0}>
                                    <div className='d-flex justify-content-between'>
                                        <div className='container-fluid pt-5 pb-5'>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='card card-body card-hover my-8'>
                                                <div>
                                                    <div>
                                                        <h4><i className='bi bi-shield-fill-check' /> Most popular</h4>
                                                        <hr />
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>WorldTradeX x ITC: How B2B eCommerce benefit small businesses</h4>
                                                        <p>Live Webinars</p>
                                                    </div>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Understanding Global Gold Supplier - What are WorldTradeX and GGS?</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Cross border trade trends analysis</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>WorldTradeX: l&#39;acceleratore per l&#39;export delle PMI italiane</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>WorldTradeX: la chiave per l&#39;espansione globale delle PMI italiane</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Understanding Global Gold Supplier - How to post attractive products on WorldTradeX?</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>&#39;Beauty meets Digital B2B&#39; - Internationaler B2B Export für die Beauty Industrie</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='card card-body card-hover mx-2 my-8'>
                                                    <div>
                                                        <div>
                                                            <h4><i className='bi bi-play-btn-fill' /> On demand Webinar</h4>
                                                            <hr />
                                                        </div>
                                                        <div className='text-muted'>
                                                            <h4 className='fw'>Understanding Global Gold Suppliers - What is RFQ and why it is useful?</h4>
                                                            <p>Pre-recorded Courses</p>
                                                        </div>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Understanding Global Gold Supplier - How to post attractive products on WorldTradeX?</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Understanding Global Gold Supplier - What are WorldTradeX and GGS?</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - home & garden analysis trends</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Cross border trade trends analysis</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Skincare & Makeup trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Hats & Scarves trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Jewelry&Glasses trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='tab-pane fade' id='pre-recorded-tab-pane' role='tabpanel' aria-labelledby='reviews-tab' tabIndex={0}>
                                    <div className='d-flex justify-content-between'>
                                        <div className='container-fluid pt-5 pb-5'>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <img src='https://cdn.worldtradex.com/img/webinar-1.jpg' width={313} height={250} className='rounded-top' />
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='card card-body card-hover my-8'>
                                                <div>
                                                    <div>
                                                        <h4><i className='bi bi-shield-fill-check' /> Most popular</h4>
                                                        <hr />
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>WorldTradeX x ITC: How B2B eCommerce benefit small businesses</h4>
                                                        <p>Live Webinars</p>
                                                    </div>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Understanding Global Gold Supplier - What are WorldTradeX and GGS?</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Cross border trade trends analysis</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>WorldTradeX: l&#39;acceleratore per l&#39;export delle PMI italiane</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>WorldTradeX: la chiave per l&#39;espansione globale delle PMI italiane</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Understanding Global Gold Supplier - How to post attractive products on WorldTradeX?</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>&#39;Beauty meets Digital B2B&#39; - Internationaler B2B Export für die Beauty Industrie</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='card card-body card-hover mx-2 my-8'>
                                                    <div>
                                                        <div>
                                                            <h4><i className='bi bi-play-btn-fill' /> On demand Webinar</h4>
                                                            <hr />
                                                        </div>
                                                        <div className='text-muted'>
                                                            <h4 className='fw'>Understanding Global Gold Suppliers - What is RFQ and why it is useful?</h4>
                                                            <p>Pre-recorded Courses</p>
                                                        </div>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Understanding Global Gold Supplier - How to post attractive products on WorldTradeX?</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Understanding Global Gold Supplier - What are WorldTradeX and GGS?</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - home & garden analysis trends</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Cross border trade trends analysis</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Skincare & Makeup trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Hats & Scarves trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Jewelry&Glasses trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='tab-pane fade' id='sellerInfo-tab-pane' role='tabpanel' aria-labelledby='sellerInfo-tab' tabIndex={0}>
                                    <div className='d-flex justify-content-between'>
                                        <div className='container-fluid pt-5 pb-5'>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>WorldTradeX: l’acceleratore per l’export delle PMI italiane</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-lg-6 mt-3'>
                                                    <div className='card h-100'>
                                                        <div className='webinar-image video-img'>
                                                            <img src='https://cdn.worldtradex.com/img/webinar-video.png' alt='' width={313} className='rounded-top' />
                                                            <h1 className='rounded-circle'>
                                                                <i className='bi bi-play-btn-fill webinor-play-icon'></i>
                                                            </h1>
                                                        </div>
                                                        <div className='card-body'>
                                                            <p className='text-muted fs-6'>Live Webinars</p>
                                                            <h1 className='h2 pt-3 pb-1 mb-2' style={{ fontWeight: '500', fontSize: '24px' }}>White Label Produkte im B2B-E-Commerce: eine große Chance für...</h1>
                                                            <div className='pt-10'>
                                                                <button className='btn btn-outline-dark px-12 py-2 fs fw'>Play</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='card card-body card-hover my-8'>
                                                <div>
                                                    <div>
                                                        <h4><i className='bi bi-shield-fill-check' /> Most popular</h4>
                                                        <hr />
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>WorldTradeX x ITC: How B2B eCommerce benefit small businesses</h4>
                                                        <p>Live Webinars</p>
                                                    </div>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Understanding Global Gold Supplier - What are WorldTradeX and GGS?</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Cross border trade trends analysis</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>WorldTradeX: l&#39;acceleratore per l’export delle PMI italiane</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>WorldTradeX: la chiave per l&#39;espansione globale delle PMI italiane</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>Understanding Global Gold Supplier - How to post attractive products on WorldTradeX?</h4>
                                                    <p>Pre-recorded Courses</p>
                                                </div>
                                                <div className='text-muted'>
                                                    <h4 className='fw'>&#39;Beauty meets Digital B2B&#39; - Internationaler B2B Export für die Beauty Industrie</h4>
                                                    <p>Live Webinars</p>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='card card-body card-hover mx-2 my-8'>
                                                    <div>
                                                        <div>
                                                            <h4><i className='bi bi-play-btn-fill' /> On demand Webinar</h4>
                                                            <hr />
                                                        </div>
                                                        <div className='text-muted'>
                                                            <h4 className='fw'>Understanding Global Gold Suppliers - What is RFQ and why it is useful?</h4>
                                                            <p>Pre-recorded Courses</p>
                                                        </div>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Understanding Global Gold Supplier - How to post attractive products on WorldTradeX?</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Understanding Global Gold Supplier - What are WorldTradeX and GGS?</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - home & garden analysis trends</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>Cross border trade trends analysis</h4>
                                                        <p>Pre-recorded Courses</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Skincare & Makeup trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Hats & Scarves trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                    <div className='text-muted'>
                                                        <h4 className='fw'>What to sell - Jewelry&Glasses trends analysis</h4>
                                                        <p>What To Sell</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>

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

export default Webinars