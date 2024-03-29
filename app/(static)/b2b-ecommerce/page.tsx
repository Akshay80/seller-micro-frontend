import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { ImageSlider } from '../../../libs/shared/ui/src/lib/image-slider/image-slider';
import { Metadata } from 'next';
import SliderData from '../../../data/sliderData.json';

export const metadata: Metadata = {
    title: `B2B E-Commerce - ${PAGE_TITLE}`,
    description: '',
};

const Ecommerce = () => {
    return (
        <section>
            <div className='bg-b2b'>
                <div className='container py-15 pb-18 text-white'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='w-50'>
                            <p className='fs'>WorldTradeX for B2B ecommcere</p>
                            <h1 className='text-white display-5' style={{ fontWeight: '400' }}>Go digital with B2B ecommerce</h1>
                            <p className='fs fw pt-6'>
                                The B2B landscape and B2B buyers&#39; sourcing behavior have changed drastically over the past decade,
                                especially since the cancellation of trade shows and in-person events due to the global pandemic.
                                WorldTradeX provides wholesale distributors and manufacturers an easy and economic way to scale
                                your business online and sell to today&#39;s global B2B buyers at any time, from any location.
                            </p>
                            <div className='mt-10 d-flex gap-6'>
                                <button className='btn btn-none bg-white text-dark fw px-7'>Start Selling</button>
                                <button className='btn btn-outline-white px-8'>Get Started</button>
                            </div>
                        </div>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/vegetables.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5' style={{ background: '#ECF0F5' }}>
                <div className='container d-flex justify-content-between align-items-center pt-7'>
                    <div>
                        <h2>Digitize your business: generating B2B sales on WorldTradeX is easy</h2>
                        <p className='fs fw'>Explore digital ways to tap into one of the largest bases of business buyers and jumpstart sales on WorldTradeX.</p>
                    </div>
                    <div>
                        <button className='btn btn-outline-dark bg-white text-dark px-7 fw'>Start toure</button>
                    </div>
                </div>
            </div>

            <div className='pt-10 pb-8 bg-white'>
                <div className='container'>
                    <div className='py-10 text-center'>
                        <h1 className='display-7' style={{ color: '#183071', fontWeight: '400' }}>Key benefits of B2B ecommerce</h1>
                        <p className='fs fw' style={{ color: '#183071' }}>B2B ecommerce takes traditional sales methods to the next level. Wholesale distributors, manufacturers, and <br /> traders can seize the opportunity and stay ahead.</p>
                    </div>
                    <div className='d-flex justify-content-between gap-18'>
                        <div className='row'>
                            <div>
                                <div className='text-blue display-6 mb-3'><i className='bi bi-file-bar-graph-fill' /></div>
                                <span className='fs-4 text-dark'>Increase sales</span>
                                <p className='fs fw pt-4 text-dark'>
                                    Half of all B2B transactions are already happening online. B2B sellers must embrace the shift and adopt to a
                                    digital solution that can quickly generate sales in a cost-efficient way
                                </p>
                            </div>
                            <div className='mt-8'>
                                <div className='text-blue display-6 mb-3'><i className='bi bi-clock-fill' /></div>
                                <span className='fs-4 text-dark'>Save time</span>
                                <p className='fs fw pt-4 text-dark'>
                                    Spend less time cold-calling leads, traveling to trade shows, and organizing lengthy catalogs. Let buyers meet your products digitally.
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div>
                                <div className='text-blue display-6 mb-3'><i className='bi bi bi-wallet-fill' /></div>
                                <span className='fs-4 text-dark'>Save money</span>
                                <p className='fs fw pt-4 text-dark'>
                                    Use your budget that was reserved for expensive traditional trade shows and invest it into an ecommerce marketplace like WorldTradeX.
                                </p>
                            </div>
                            <div className='mt-8'>
                                <div className='text-blue display-6 mb-3'><i className='bi bi-shop-window' /></div>
                                <span className='fs-4 text-dark'>Showcase your brand and capabilities</span>
                                <p className='fs fw pt-4 text-dark'>
                                    Own one digital storefront that showcases the best of your production, products, and brands to an international audience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#F2F4F8' }}>
                <div className='container py-13'>
                    <div className='text-center pb-15'>
                        <h1 className='display-7' style={{ color: '#183071', fontWeight: '400' }}>Why WorldTradeX for B2B ecommerce</h1>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='w-40'>
                            <h1 className='fs-3 w-60'>One of the largest wholesale <br /> marketplaces</h1>
                            <p className='fs fw pt-2'>
                                Get direct access to 13 million+ global B2B buyers online who are actively sourcing products and placing wholesale orders.
                            </p>
                        </div>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/network.png' alt='' />
                        </div>
                    </div>
                </div>

                <hr className='mx-15' />

                <div className='container py-13'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/trades-incr.png' alt='' />
                        </div>
                        <div className='w-40'>
                            <h1 className='fs-3 w-60'>Low upfront costs, high return on investment</h1>
                            <p className='fs fw pt-2'>
                                The investment in an WorldTradeX membership is less than the cost of a flight ticket from New York to Shanghai for a trade show.
                            </p>
                        </div>
                    </div>
                </div>

                <hr className='mx-15' />

                <div className='container py-13'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='w-40'>
                            <h1 className='fs-3 w-60'>A suite of tools to help you work efficiently</h1>
                            <p className='fs fw pt-2'>
                                Manage your account and relationships on the app, and monitor and optimize business with dashboards and analytics tools.
                            </p>
                        </div>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/b2b-3.png' alt='' />
                        </div>
                    </div>
                </div>

                <hr className='mx-15' />

                <div className='container py-13'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/b2b-4.png' alt='' />
                        </div>
                        <div className='w-40'>
                            <h1 className='fs-3 w-60'>A suite of tools to help you work efficiently</h1>
                            <p className='fs fw pt-2'>
                                Manage your account and relationships on the app, and monitor and optimize business with dashboards and analytics tools.
                            </p>
                        </div>
                    </div>
                </div>

                <hr className='mx-15' />

                <div className='px-16 pb-6'>
                    <div className='pt-10 container'>
                        <h1 className='text-center py-10'>Success stories from WorldTradeX sellers</h1>
                        <ImageSlider slides={SliderData} />
                    </div>
                    <div className='text-center pt-8 pb-8'>
                        <button type='button' className='btn btn-outline-dark btn-radius btn-padding px-8'>More Stories</button>
                    </div>
                </div>

            </div>
            <div className='bg-white container py-5'>
                <section className='container py-5 mt-3 mt-lg-5'>
                    <div className='text-center pt-1 pt-xl-3 mb-lg-4'>
                        <h2 className='h1'>Resources</h2>
                    </div>
                    <div className='row pt-6'>
                        <div className='col-lg-4 col-md-6 mt-3'>
                            <div className='card p-0 h-100 card-body card-hover card-shadow'>
                                <img src='https://cdn.worldtradex.com/img/b2b-card-1.jpg' className='rounded-top' alt='' height={300} />
                                <div className='p-3'>
                                    <span className='fs-3 text-dark pt-3 pb-1 mb-2'>B2B vs. B2C eCommerce: understand the key differences</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 mt-3'>
                            <div className='card p-0 h-100 card-body card-hover card-shadow'>
                                <img src='https://cdn.worldtradex.com/img/b2b-card-2.jpg' className='rounded-top' alt='' height={300} />
                                <div className='p-3'>
                                    <span className='fs-3 text-dark pt-3 pb-1 mb-2'>5 B2B sales challenges and how to overcome them</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 mt-3'>
                            <div className='card p-0 h-100 card-body card-hover card-shadow'>
                                <img src='https://cdn.worldtradex.com/img/b2b-card-3.jpg ' className='rounded-top' alt='' height={300} />
                                <div className='p-3'>
                                    <span className='fs-3 text-dark pt-3 pb-1 mb-2'>B2B sales pipeline management: a comprehensive guide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='bg-blue py-15'>
                <div className='p-15'>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <span className="fs-1 text-white">Ready to Grow Your Business?</span>
                        <div className="d-flex align-items-center gap-3 pt-4">
                            <button type="button" className="btn btn-outline-white btn-radius btn-padding py-2"><span className="fs-5">Chat with consultant</span></button>
                            <button className="btn btn-white btn-radius text-black px-7 py-2" type="submit"><span className="fs-5">Start Selling</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ecommerce