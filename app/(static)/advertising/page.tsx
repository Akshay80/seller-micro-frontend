import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { ImageSlider } from '../../../libs/shared/ui/src/lib/image-slider/image-slider';
import { Metadata } from 'next';
import SliderData from '../../../data/sliderData.json';

export const metadata: Metadata = {
    title: `Advertise your Business - ${PAGE_TITLE}`,
    description: '',
};

const Advertising = () => {
    return (
        <section>
            <div className='adv-section-1'>
                <div className='container'>
                    <div className='ps-10 fs pt-15 text-white w-50'>
                        <p className='fs-4'>All-in-one advertising tools</p>
                        <h1 className='text-white display-5' style={{ fontWeight: '500' }}>Get more business opportunities on WorldTeadeX with powerful advertising tools</h1>
                        <p className='fw mt-10'>Everything you need to increase visibility and sales on WorldTeadeX. Creat your seller account today.</p>
                        <button className='btn btn-white px-10'>Get Started</button>
                    </div>
                </div>
            </div>

            <div className='bg-white'>
                <div className='container pt-16 pb-5'>
                    <div className='text-center'>
                        <h1 className='text-dark mb-10'>Increase visibility and sales on WorldTeadeX with advertising</h1>
                    </div>
                    <div className='row row-cols row-cols-md-2'>
                        <div className='col-lg-6 py-4 my-2 my-sm-3'>
                            <div className='card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2'>
                                <div className='card-body'>
                                    <h2 className='text-blue'><i className='bi bi-graph-up' /></h2>
                                    <h2>Find potential customers</h2>
                                    <div className='d-flex gap-1 fs fw'>
                                        <h3 className='text-blue'><i className='bi bi-check2' /></h3><p>Advertising tools help to target potential customers and position your business smoothly</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 py-4 my-2 my-sm-3'>
                            <div className='card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2'>
                                <div className='card-body'>

                                    <h1 className='text-blue'><i className='bi bi-bullseye' /></h1>
                                    <h2>Achieve better display positions</h2>
                                    <div className='d-flex gap-1 fs fw'>
                                        <h3 className='text-blue'><i className='bi bi-check2' /></h3><p>Advertising tools Improve product visibility with higher search rankings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 py-4 my-2 my-sm-3'>
                            <div className='card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2'>
                                <div className='card-body'>

                                    <h1 className='text-blue'><i className='bi bi-person-check' /></h1>
                                    <h2>Offer multiple touch points</h2>
                                    <div className='d-flex gap-1 fs fw'>
                                        <h3 className='text-blue'><i className='bi bi-check2' /></h3><p>Advertising offers multiple efficient touch points to reach customers on their purchasing journey</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 py-4 my-2 my-sm-3'>
                            <div className='card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2'>
                                <div className='card-body'>
                                    <h1 className='text-blue'><i className='bi bi-graph-up-arrow' /></h1>
                                    <h2>Increase performance</h2>
                                    <div className='d-flex gap-1 fs fw'>
                                        <h3 className='text-blue'><i className='bi bi-check2' /></h3><p>Suppliers that advertise achieve higher rates of exposure, more clicks, and more inquiries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='adv-section-2'>
                <div className='container'>
                    <div className='ps-10 fs pt-15 text-white w-50'>
                        <p className='fs-4'>WorldTeadeX advertising solutions</p>
                        <h1 className='text-white display-5' style={{ fontWeight: '500' }}>Keyword Advertising (KWA)</h1>
                        <p className='fw mt-10'>Keyword Advertising is a competitive advertising strategy based on product keywords.</p>

                        <button className='btn btn-white px-10'>Know More</button>
                    </div>
                </div>
            </div>

            <div className='bg-white'>
                <div className='container pt-15'>
                    <div className='text-center mb-10'>
                        <h1>Connect with your target audience with keyword advertising (KWA)</h1>
                    </div>
                    <div className='pt-7'>
                        <div className='d-flex justify-content-amoung align-items-center gap-5'>
                            {/* <div>
                                <ul className='ul-none'>
                                    <div className='container border-left'>
                                        <li className='pb-10 fs fw cursor-pointer' id='li-1' onMouseOver={() => showContent('ul-1')}><h4 className={`${active === 'ul-1' ? 'text-blue' : 'text-muted'}`}> Better positioning</h4></li>
                                        <li className='pb-10 fs fw cursor-pointer' id='li-2' onMouseOver={() => showContent('ul-2')}><h4 className={`${active === 'ul-2' ? 'text-blue' : 'text-muted'}`}>Effective targeting</h4></li>
                                        <li className='pb-10 fs fw cursor-pointer' id='li-3' onMouseOver={() => showContent('ul-3')}><h4 className={`${active === 'ul-3' ? 'text-blue' : 'text-muted'}`}>Pay per click</h4></li>
                                        <li className='pb-10 fs fw cursor-pointer' id='li-4' onMouseOver={() => showContent('ul-4')}><h4 className={`${active === 'ul-4' ? 'text-blue' : 'text-muted'}`}>Budget control</h4></li>
                                    </div>
                                </ul>
                            </div> */}
                            {/* <div className='content-container'>
                                {
                                    AdvContentOne?.map((data: any, index: number) => (
                                        <div id={data?.id} className={`${data?.id !== active ? 'd-none' : 'd-block'} `} key={index}>
                                            <div key={key}>
                                                <h1>{data?.h1}</h1>
                                                <p>{data?.p}</p>
                                                <button className='btn btn-dark'>{data?.button}</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div> */}
                            <div>
                                <img src='https://cdn.worldtradex.com/img/b2b-3.png' alt='' width={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='adv-section-3 mt-12'>
                <div className='container'>
                    <div className='ps-10 fs pt-15 text-white w-50'>
                        <p className='fs-4'>WorldTeadeX advertising solutions</p>
                        <h1 className='text-white display-5' style={{ fontWeight: '500' }}>Premium Sponsored Ads</h1>
                        <p className='fw mt-10'>Premium Sponsored Ads always rank on top of the search result page and stand out ahead of competitors.</p>
                    </div>
                </div>
            </div>

            <div className='bg-white'>
                <div className='container pt-15'>
                    <div className='text-center mb-10'>
                        <h1>Stand out ahead of competitors with Premium Sponsored Ads</h1>
                    </div>
                    <div className='pt-7'>
                        <div className='d-flex justify-content-amoung align-items-center gap-5'>
                            {/* <div>
                                <ul className='ul-none'>
                                    <div className='container border-left'>
                                        <li className='pb-10 fs fw cursor-pointer' id='li-1' onMouseOver={() => showContent('ul-1')}><h4 className={`${active === 'ul-1' ? 'text-blue' : 'text-muted'}`}> Better positioning</h4></li>
                                        <li className='pb-10 fs fw cursor-pointer' id='li-2' onMouseOver={() => showContent('ul-2')}><h4 className={`${active === 'ul-2' ? 'text-blue' : 'text-muted'}`}>Effective targeting</h4></li>
                                        <li className='pb-10 fs fw cursor-pointer' id='li-3' onMouseOver={() => showContent('ul-3')}><h4 className={`${active === 'ul-3' ? 'text-blue' : 'text-muted'}`}>Pay per click</h4></li>
                                        <li className='pb-10 fs fw cursor-pointer' id='li-4' onMouseOver={() => showContent('ul-4')}><h4 className={`${active === 'ul-4' ? 'text-blue' : 'text-muted'}`}>Budget control</h4></li>
                                    </div>
                                </ul>
                            </div> */}
                            {/* <div className='content-container'>
                                {
                                    AdvContentOne?.map((data: any, index: number) => (
                                        <div id={data?.id} className={`${data?.id !== active ? 'd-none' : 'd-block'} `} key={index}>
                                            <div key={key}>
                                                <h1>{data?.h1}</h1>
                                                <p>{data?.p}</p>
                                                <button className='btn btn-dark'>{data?.button}</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div> */}
                            <div>
                                <img src='https://cdn.worldtradex.com/img/b2b-3.png' alt='' width={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-16 pb-6  bg-light'>
                <div className='pt-10 container'>
                    <h1 className='text-center py-10'>Success stories from WorldTradeX sellers</h1>
                    <ImageSlider slides={SliderData} />
                </div>
                <div className='text-center pt-8 pb-10'>
                    <button type='button' className='btn btn-outline-dark btn-radius btn-padding px-8'>View All Stories</button>
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

export default Advertising