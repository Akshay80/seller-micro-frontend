import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { ImageSlider } from '../../../libs/shared/ui/src/lib/image-slider/image-slider';
import { Metadata } from 'next';
import SliderData from '../../../data/sliderData.json';

export const metadata: Metadata = {
    title: `International Trade - ${PAGE_TITLE}`,
    description: '',
};

const InternationalTrade = () => {
    return (
        <section>
            <div style={{ background: '#245BCE' }}>
                <div className='container py-15 pb-18 text-white'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='w-50'>
                            <p className='fs'>WorldTradeX for international ecommerce</p>
                            <h1 className='text-white display-5' style={{ fontWeight: '500' }}>Expand your sales into global markets</h1>
                            <p className='fs fw pt-6'>
                                Global B2B ecommerce is a US $23.9 trillion market. Whether
                                your business is established domestically and looking to expand,
                                or just starting out and wants to be open to the most customers
                                possible, selling your goods internationally is a must. WorldTradeX
                                has everything you need to reach your global sales potential.
                            </p>
                            <div className='mt-10'>
                                <button className='btn btn-none bg-white text-dark fw px-7'>Start Selling</button>
                            </div>
                        </div>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/vegetables.jpg' alt='' />
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

                <div style={{ background: '#F8F8F8' }}>
                    <div className='container py-15'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='w-50'>
                                <h1 className='display-5' style={{ color: '#183071' }}>Find global buyers on WorldTradeX</h1>
                                <p className='fs fw' style={{ color: '#183071' }}>
                                    Every day, WorldTradeX facilitates international trade on a massive scale. Our B2B ecommerce platform is a dynamic marketplace
                                    where businesses of any size can succeed, thanks to the steady demand from active buyers that your business can tap into.
                                </p>
                            </div>
                            <div>
                                <img src='https://cdn.worldtradex.com/img/vegetables.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ background: '#F2F4F8' }}>
                    <div className='py-15'>
                        <div className='container pb-15'>
                            <div className='text-center pb-10'>
                                <h1 style={{ color: '#2F4480', fontWeight: '400' }}>Why WorldTradeX is key for global expansion</h1>
                                <p className='pt-7 px-18' style={{ lineHeight: '30px', fontSize: '20px', color: '#2f4480', fontWeight: '400' }}>
                                    Opening your business to international trade requires specific tools and resources. Learn how WorldTradeX can help you transition
                                    from selling in your local market to reaching buyers around the world.
                                </p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='w-50'>
                                    <h1 className='fs-3'>International trade is for small businesses, too</h1>
                                    <p className='fs fw'>
                                        We strive to make global expansion attainable for all businesses, not just the big players. That&#39;s why WorldTradeX is accessible
                                        to businesses of any size. It doesn&#39;t matter if your business has made 5 sales, 1000 sales, or no sales at all. All of our
                                        sellers have access to the same powerful features designed to help you grow your business.
                                    </p>
                                </div>
                                <div>
                                    <img src='https://cdn.worldtradex.com/img/vegetables.jpg' alt='' />
                                </div>
                            </div>
                        </div>

                        <hr className='mx-15' />

                        <div className='container py-15'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <img src='https://cdn.worldtradex.com/img/vegetables.jpg' alt='' />
                                </div>
                                <div className='w-50'>
                                    <h1 className='fs-3'>Test the market and expand strategically</h1>
                                    <p className='fs fw'>
                                        Have a brilliant product idea and want to see how international markets respond? Test it out by entering the
                                        growing marketplace of WorldTradeX. Then use the industry analytics and market opportunity analysis tools to
                                        make informed, strategic decisions to expand your business in a cost-effective, risk-free way.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className='mx-15' />

                        <div className='container py-15'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='w-50'>
                                    <h1 className='fs-3'>Get to market faster</h1>
                                    <p className='fs fw'>
                                        You no longer need to invest time and money to build a store equipped for global expansion. When
                                        you launch a digital storefront on WorldTradeX, localization capabilities, language, payments,
                                        and currency conversions are all automatically taken care of.
                                    </p>
                                </div>
                                <div>
                                    <img src='https://cdn.worldtradex.com/img/vegetables.jpg' alt='' />
                                </div>
                            </div>
                        </div>

                        <hr className='mx-15' />

                        <div className='container py-15'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <img src='https://cdn.worldtradex.com/img/vegetables.jpg' alt='' />
                                </div>
                                <div className='w-50'>
                                    <h1 className='fs-3'>Facilitate cross-border communication anytime, anywhere</h1>
                                    <p className='fs fw'>
                                        Communicate with customers on every continent on the go with the AliSupplier app. It has a built-in
                                        messaging tool that provides real-time translation of 18 languages, so you can seamlessly connect.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className='mx-15' />

                        <div className='container py-15'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='w-50'>
                                    <h1 className='fs-3'>Transact and take payments in a trusted environment</h1>
                                    <p className='fs fw'>
                                        WorldTradeX Trade Assurance provides escrow services that ensure a secure payment for both the buyer and
                                        seller. It builds buyer trust by ensuring products arrive at the final destination on time and as
                                        expected, and provides impartial mediation if there is a dispute.
                                    </p>
                                </div>
                                <div>
                                    <img src='https://cdn.worldtradex.com/img/vegetables.jpg' alt='' />
                                </div>
                            </div>
                        </div>

                        <hr className='mx-15' />

                        <div className='container py-14'>
                            <div className=' text-center pt-1 pt-xl-3 mb-lg-4'>
                                <h2 className='h1 display-7'>Global trade expertise and professional <br /> services</h2>
                                <p className='px-10 pt-3 fs fw text-dark px-18' style={{ fontSize: '20px' }}>
                                    For the past two decades, WorldTradeX has been perfecting the global trade experience for buyers and sellers.
                                    It&#39;s more than a B2B eCommerce marketplace - it&#39;s an end-to-end solution for all of your global sales needs.
                                </p>
                            </div>

                            <div className='row'>
                                <div className='col-lg-4 col-md-6 mt-3'>
                                    <div className='card h-100 card-body card-hover mx-2 text-dark'>
                                        <h3 className='h5 pt-3 pb-1 mb-2'>Logistics solutions<i className='bi bi-box-arrow-up-right ps-2' /></h3>
                                        <p className='py-1' style={{ borderBottom: '5px solid #245ECF', width: '50px' }} />
                                        <p className='mb-0 fs-8 fw'>Leverage flexible shipping templates that enable you to use WorldTradeX Shipping or your own logistics provider for quotes and fulfillment.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 mt-3'>
                                    <div className='card h-100 card-body card-hover mx-2 text-dark'>
                                        <h3 className='h5 pt-3 pb-1 mb-2'>WorldTradeX Trade Assurance  <i className='bi bi-box-arrow-up-right ps-2' /></h3>
                                        <p className='py-1' style={{ borderBottom: '5px solid #245ECF', width: '50px' }} />
                                        <p className='mb-0 fs-8 fw'>Buyers can be wary the first time they place a large transaction with a seller. We offer Trade Assurance order protection to provide both parties with peace of mind.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 mt-3'>
                                    <div className='card h-100 card-body card-hover mx-2 text-dark'>
                                        <h3 className='h5 pt-3 pb-1 mb-2'>Seller services and support  <i className='bi bi-box-arrow-up-right ps-2' /></h3>
                                        <p className='py-1' style={{ borderBottom: '5px solid #245ECF', width: '50px' }} />
                                        <p className='mb-0 fs-8 fw'>Going global may seem overwhelming, but it doesn&#39;t have to be. WorldTradeX offers a wide range of Seller Services, so you have access to the specialized support you need - including onboarding, dedicated account management, training, and more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='pt-10 container'>
                                <h1 className='text-center py-10'>Success stories from WorldTradeX sellers</h1>
                                <ImageSlider slides={SliderData} />
                            </div>
                            <div className='text-center pt-8'>
                                <button type='button' className='btn btn-outline-dark btn-radius btn-padding px-8'>More Stories</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white container py-10'>
                <section className='container py-5 mt-3 mt-lg-5'>
                    <div className='text-center pt-1 pt-xl-3 mb-lg-4'>
                        <h2 className='h1'>Resources</h2>
                    </div>
                    <div className='row mt-14'>
                        <div className='col-lg-4 col-md-6 mt-3'>
                            <div className='card p-0 h-100 card-body card-hover card-shadow'>
                                <img src='https://cdn.worldtradex.com/img/vegetables.jpg' className='rounded-top' alt='' height={300} />
                                <div className='p-3'>
                                    <span className='fs-3 text-dark pt-3 pb-1 mb-2'>How to start exporting: the ultimate guide</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 mt-3'>
                            <div className='card p-0 h-100 card-body card-hover card-shadow'>
                                <img src='https://cdn.worldtradex.com/img/invest.jpg' className='rounded-top' alt='' height={300} />
                                <div className='p-3'>
                                    <span className='fs-3 text-dark pt-3 pb-1 mb-2'>Export from India: a guide for Indian SME Exporters</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 mt-3'>
                            <div className='card p-0 h-100 card-body card-hover card-shadow'>
                                <img src='https://data.vcpost.com/data/images/full/102805/image-by-gerd-altmann-from-pixabay.jpg' className='rounded-top' alt='' height={300} />
                                <div className='p-3'>
                                    <span className='fs-3 text-dark pt-3 pb-1 mb-2'>Benefits of exporting for small businesses</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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

export default InternationalTrade