import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { ImageSlider } from '../../../libs/shared/ui/src/lib/image-slider/image-slider';
import { Metadata } from 'next';
import VerifiedSupplierData from '../../../data/verifiedSupplierData.json';

export const metadata: Metadata = {
    title: `Verified Supplier - ${PAGE_TITLE}`,
    description: '',
};

const VerifiedSupplier = () => {
    return (
        <section>
            <div className='verified-supplier-banner'>
                <div className='py-17 ps-18 ms-10'>
                    <button className='btn btn-white px-9'>Get Started</button>
                </div>
            </div>

            <div style={{ background: '#f2f4f8' }}>
                <div className='container'>
                    <div className='py-15'>
                        <div className='py-10 text-center'>
                            <h1 className='fs-3' style={{ color: '#183071', fontWeight: '400' }}>Make Trust Happen — Verified Supplier</h1>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='image-container video-img'>
                                <img src='https://cdn.worldtradex.com/img/verified-supplier-video-image.jpg' alt='' width='500' />
                                <h1>
                                    <i className="bi bi-play-circle"></i>
                                </h1>
                            </div>
                            <div className='w-50'>
                                <p className='fs fw pt-2 text-dark'>
                                    Verified Supplier is WorldTradeX&#39;s membership tier for high-quality suppliers. We provide suppliers
                                    with on-site verification services from the third-party inspection company so that your customers
                                    can put their trust on your brand.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='mx-15 mt-8 pb-0 mb-0' />

                <div style={{ background: 'rgb(242, 244, 250)' }}>
                    <div className='bg-verified-supplier-SGS'>
                        <img src="https://cdn.worldtradex.com/img/verified-supplier-1.jpg" alt="" className='img-fluid' />
                    </div>

                    <div className='bg-verified-supplier-SGS'>
                        <img src="https://cdn.worldtradex.com/img/verified-supplier-2.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className='container py-13'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='w-40'>
                                <h1 className='display-5'>Build trust through transparency</h1>
                                <p className='fs fw pt-2'>
                                    The Verified Supplier verification process results in a comprehensive assessment report from
                                    a reputable, third-party inspection company. This report is open to all buyers, which leads
                                    to greater buyer trust and helps generate more business leads.
                                </p>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className="bi bi-newspaper" />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>Detailed assessment report</h3>
                                            <p>The report helps your customers understand the key capabilities of your company.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className="bi bi-camera-video" />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>Verified videos</h3>
                                            <p>Photos and videos of your production facilities can be presented on your mini-site so that your customers won&#39;t need to pay a visit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className="bi bi-window-stack" />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>Exclusive Pavillion</h3>
                                            <p>Only Verified Suppliers could be listed in the Source from Factories entry and Find Manufacturers portal.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src='https://cdn.worldtradex.com/img/verified-supplier-4.jpg' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white'>
                <div className='container py-13'>
                    <div className='container py-13'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div style={{ boxShadow: '0 0 200px 0 rgba(37,53,85,.25)' }}>
                                <img src='https://cdn.worldtradex.com/img/verified-supplier-5.jpg' alt='' />
                            </div>
                            <div className='w-40'>
                                <h1 className='display-5'>Stay ahead of your competition</h1>
                                <p className='fs fw pt-2'>
                                    Verified Suppliers enjoy different types of perks to expedite growth more efficiently.
                                </p>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className="bi bi-star" />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>Star Direct</h3>
                                            <p>Verified Supplier can get 4-star direct/5-star direct. The green pass to become a 4/5-star supplier and receive a traffic booster on featured products for 6 months.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className="bi bi-r-square-fill" />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>RFQ</h3>
                                            <p>Verified Suppliers can send quotations to specialized RFQs and quickly acquire high quality buyers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                    <div className='d-flex justify-content-center align-items-center gap-5'>
                                        <div className='text-blue fs-1'>
                                            <i className="bi bi-layout-text-window-reverse" />
                                        </div>
                                        <div>
                                            <h3 className='font-weight-lighter fs-4'>Showcase</h3>
                                            <p>Verified Suppliers can receive 60 showcase spots per month to boost product listings in the search results</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-16 pb-6' style={{ background: '#f2f4f8' }}>
                <div className='pt-10 container'>
                    <h1 className='text-center py-10'>Why buyers trust Verified Suppliers</h1>
                    <ImageSlider slides={VerifiedSupplierData} />
                </div>

                <div>
                    <div className='container pt-17'>
                        <div className='container py-13'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='w-40'>
                                    <h1 className='display-5'>With the right amount of support, you can get onboard with ease</h1>
                                    <p className='fs fw pt-2'>
                                        No experience? No worries. Backed by a team of professional B2B selling experts, we customize our service programs to maximize every step of your seller journey on WorldTradeX.
                                    </p>
                                    <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                        <div className='d-flex justify-content-center align-items-center gap-5'>
                                            <div className='text-blue fs-1'>
                                                <i className="bi bi-person-fill-dash" />
                                            </div>
                                            <div>
                                                <h3 className='font-weight-lighter fs-4'>Verified Supplier center</h3>
                                                <p>The Verified Supplier center includes a comprehensive tool collection and entrance to multiple online events.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-center align-items-center gap-5'>
                                                <div className='text-blue fs-1'>
                                                    <i className="bi bi-graph-up-arrow" />
                                                </div>
                                                <div>
                                                    <h3 className='font-weight-lighter fs-4'>Product advisor</h3>
                                                    <p style={{ width: '450px' }}>Discover new opportunities in trending categories.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-center align-items-center gap-5'>
                                                <div className='text-blue fs-1'>
                                                    <i className="bi bi-gem" />
                                                </div>
                                                <div>
                                                    <h3 className='font-weight-lighter fs-4'>VIP 1-on-1 coaching</h3>
                                                    <p>Verified Supplier members receive VIP 1-on-1 consulting from industry specialists.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='d-flex justify-content-center align-items-center gap-5'>
                                                <div className='text-blue fs-1'>
                                                    <i className="bi bi-mortarboard-fill" />
                                                </div>
                                                <div>
                                                    <h3 className='font-weight-lighter fs-4'>Learning & development</h3>
                                                    <p>Verified Suppliers will be eligible for a special Learning & Development program.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ boxShadow: '0 0 200px 0 rgba(37,53,85,.25)' }}>
                                    <img src='https://cdn.worldtradex.com/img/verified-supplier-6.jpg' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default VerifiedSupplier;