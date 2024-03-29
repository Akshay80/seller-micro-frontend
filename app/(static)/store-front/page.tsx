import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Online Store Front - ${PAGE_TITLE}`,
    description: '',
};

const StoreFront = () => {
    return (
        <section>
            <div style={{ background: '#F8F8F8' }} className='py-13 pb-16'>
                <div className='container'>
                    <div className='d-flex justify-content-center align-items-center gap-16'>
                        <div>
                            <h1 style={{ color: '#183071' }} className='display-5'>Showcase your brand in WorldTradeX.com Storefront</h1>
                            <p className='fs-5 pt-2 fw'>
                                Use an WorldTradeX.com Storefront to enhance your business by making your products discoverable to prospective buyers.
                                Customize to reflect your branding and make the digital storefront while reaping the benefits of
                                the B2B e-commerce marketplace.
                            </p>
                        </div>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' width={400} height={350} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-15'>
                <div className='d-flex gap-13 justify-content-between'>
                    <div className='d-flex flex-column sticky-column'>
                        <div id='start-selling-section'>
                            <h2>What is it</h2>
                            <ul className='ul-none'>
                                <div className='container border-left'>
                                    <li className='pb-1 fs fw'>Customizable</li>
                                    <li className='pb-1 fs fw'>Searchable</li>
                                    <li className='pb-1 fs fw'>Scalable</li>
                                </div>
                            </ul>
                        </div>

                        <div id='manage-your-account-section'>
                            <h2>Why use it</h2>
                            <ul className='ul-none'>
                                <div className='container border-left'>
                                    <li className='pb-1 fs fw'>Make your brand discoverable</li>
                                    <li className='pb-1 fs fw'>Reach more buyers</li>
                                    <li className='pb-1 fs fw'>Mobile-friendly</li>
                                </div>
                            </ul>
                        </div>

                        <div id='grow-your-business-section'>
                            <h2>How to set up</h2>
                            <ul className='ul-none'>
                                <div className='container border-left'>
                                    <li className='pb-1 fs fw'>Customize your Minisite</li>
                                    <li className='pb-1 fs fw'>Create a company profile</li>
                                    <li className='pb-1 fs fw'>List your products</li>
                                </div>
                            </ul>
                        </div>

                        <div id='grow-your-business-section'>
                            <h2>Optimizing</h2>
                            <ul className='ul-none'>
                                <div className='container border-left'>
                                    <li className='pb-1 fs fw'>Provide plenty of information</li>
                                    <li className='pb-1 fs fw'>Prioritize your About page</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className='scrollable-content'>
                        <div>
                            <div style={{ color: '#2F4480' }}>
                                <h1 style={{ color: '#2F4480' }} className='display-5'>What is it</h1>
                                <p className='fs-5 pt-2 fw'>
                                    WorldTradeX.com Storefronts, which are also called “Minisites,” are interactive plots of digital real
                                    estate where Gold suppliers can showcase their products. WorldTradeX.com Minisite technology provides
                                    an alternative to brick-and-mortar storefronts, so sellers can expand beyond their physical
                                    confines.
                                </p>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                            <div className='ps-9'>
                                                <span className='text-blue fs-3'>01</span>
                                                <h1 className='text-dark pb-2'>Customizable</h1>
                                                <p className='text-dark fs' style={{ lineHeight: '24px' }}>
                                                    Minisites on WorldTradeX.com are customizable, so you can add a variety of media
                                                    to reflect your brand. We encourage sellers to add photos, videos, text,
                                                    and more to truly make the WorldTradeX.com Storefronts their own.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='pe-9'>
                                                <span className='text-blue fs-3'>02</span>
                                                <h1 className='text-dark pb-2'>Searchable</h1>
                                                <p className='text-dark fs mb-1'>
                                                    WorldTradeX.com acts as a search engine that serves prospective buyers product and seller
                                                    results based on their unique queries. WorldTradeX.com Storefronts are searchable, so your
                                                    products can rank in the search results to reach more buyers in the store.
                                                </p>
                                            </div>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                            <div className='ps-9'>
                                                <span className='text-blue fs-3'>03</span>
                                                <h1 className='text-dark pb-2'>Scalable</h1>
                                                <p className='text-dark fs'>
                                                    Scaling your business with a physical storefront can be difficult because it requires additional investments
                                                    in both labor and physical capital. Scaling your online storefront simply requires uploading more product
                                                    listings.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className='mt-10' />

                        <div className='pt-10'>
                            <div style={{ color: '#2F4480' }}>
                                <h1 style={{ color: '#2F4480' }} className='display-5'>Why use it</h1>
                                <p className='fs-5 pt-2'>
                                    Online Storefronts are great for adding a digital layer to your sales strategy. WorldTradeX.com Minisites provide
                                    a happy medium between the independence of private online Storefronts and the tremendous value of the
                                    B2B e-commerce marketplace.
                                </p>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                            <div className='ps-9'>
                                                <span className='text-blue fs-3'>01</span>
                                                <h1 className='text-dark pb-2'>Make your brand discoverable</h1>
                                                <p className='text-dark fs' style={{ lineHeight: '24px' }}>
                                                    Creating a Minisite on WorldTradeX.com makes your brand discoverable to buyers from around the globe.
                                                    When properly optimized, the products listed on your WorldTradeX.com Storefront will be presented to
                                                    prospective buyers that are searching for related keywords.
                                                </p>
                                                <p className='pt-7 fs-5 text-blue'>
                                                    Chat with consultant
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='pe-9'>
                                                <span className='text-blue fs-3'>02</span>
                                                <h1 className='text-dark pb-2'>Reach more buyers</h1>
                                                <p className='text-dark fs mb-1'>
                                                    Using an WorldTradeX.com Minisite helps suppliers reach more buyers. In fact
                                                    , WorldTradeX.com currently has more than 26,000,000 active buyers from over
                                                    200 countries.
                                                </p>
                                            </div>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                            <div className='ps-9'>
                                                <span className='text-blue fs-3'>03</span>
                                                <h1 className='text-dark pb-2'>Mobile-friendly</h1>
                                                <p className='text-dark' style={{ fontSize: '16px', lineHeight: '24px' }}>
                                                    WorldTradeX.com Minisites are mobile-friendly. The traffic to WorldTradeX.com Minisites on mobile devices is
                                                    actually 4.6x greater than traffic on desktops. Our digital storefronts can also be edited from mobile
                                                    devices, which adds convenience for sellers, as well.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className='mt-10' />

                        <div>
                            <div style={{ color: '#2F4480' }}>
                                <h1 style={{ color: '#2F4480' }} className='display-5'>How to set up</h1>
                                <p className='fs-5 pt-2 fw'>
                                    Setting up a Storefront on WorldTradeX.com is fairly simple. There are four main pages of your Minisite that you should customize
                                    to showcase your brand. These include your Minisite home page, company profile, contact page, and shop page.
                                </p>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='pe-9'>
                                                <span className='text-blue fs-3'>01</span>
                                                <h1 className='text-dark pb-2'>Customize your Minisite</h1>
                                                <p className='text-dark fs' style={{ lineHeight: '24px' }}>
                                                    Start by customizing your Minisite home page. Arrange the layout with drag and drop tools. Set the color scheme
                                                    to match your branding, and upload your logo in high resolution. Add any other supporting media.
                                                </p>
                                            </div>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                            <div className='ps-9'>
                                                <span className='text-blue fs-3'>02</span>
                                                <h1 className='text-dark pb-2'>Create a company profile</h1>
                                                <p className='text-dark fs mb-1'>
                                                    Customize your company profile to showcase what your company has to offer. You’ll be prompted to add
                                                    a basic overview of your company, your business type, main products you offer, certifications,
                                                    patents, and other relevant credentials.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-light rounded'>
                                <div className='p-6'>
                                    <h5><span className='text-blue'><i className='bi bi-lightbulb'></i></span> Add contact information</h5>
                                    <p className='pt-2 fs fw text-dark'>
                                        Fill out all of the fields on your contact page so prospective buyers know how to reach you for more information.
                                        Include your full company name, operating address, websites, WorldTradeX.com Minisite address, and the point of
                                        contact’s name and title.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='pe-9'>
                                                <span className='text-blue fs-3'>03</span>
                                                <h1 className='text-dark pb-2'>Respond to RFQs</h1>
                                                <p className='text-dark fs'>
                                                    No need to wait for buyers to come to you - you can proactively find buyers looking for products like
                                                    yours on the Request for Quotation (RFQ) market.
                                                </p>
                                            </div>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <div style={{ color: '#2F4480' }}>
                                <h1 style={{ color: '#2F4480' }} className='display-5'>Optimizing</h1>
                                <p className='fs-5 pt-2 fw'>
                                    Your Storefront acts as the gateway between you and your prospective buyers. There are
                                    a few ways that you can optimize your Minisite to make it more effective for connecting
                                    with leads and closing deals.
                                </p>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                            <div className='ps-9'>
                                                <span className='text-blue fs-3'>01</span>
                                                <h1 className='text-dark pb-2'>Provide plenty of information</h1>
                                                <p className='text-dark fs' style={{ lineHeight: '24px' }}>
                                                    As you customize your company profile, be sure to add as much valuable information
                                                    as possible. Answer any questions that prospective buyers may have. This will allow
                                                    you to build trust and close more deals.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-light rounded'>
                                <div className='p-6'>
                                    <h5><span className='text-blue'><i className='bi bi-lightbulb'></i></span> Use high-quality images</h5>
                                    <p className='pt-2 fs fw text-dark'>
                                        Media, such as photos and digital graphics, can truly enhance your WorldTradeX.com Storefront. However, it is
                                        important to use high-resolution images. Not only are high-quality images more attractive and eye-catching,
                                        but they look more professional, as well.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='pe-9'>
                                                <span className='text-blue fs-3'>02</span>
                                                <h1 className='text-dark pb-2'>Prioritize your About page</h1>
                                                <p className='text-dark fs mb-1'>
                                                    The “About” section of your Minisite is very important because it is where prospective buyers go to learn
                                                    more about your company. Use your about page to go beyond the numbers and basic facts to tell your
                                                    company’s story.
                                                </p>
                                            </div>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-10 pt-8 container'>
                            <div style={{ color: '#2F4480' }}>
                                <h1 style={{ color: '#2F4480' }} className='display-5'>Contact us</h1>
                                <p className='fs-5 pt-2 fw'>
                                    Still have questions about how to use and optimise WorldTradeX.com Storefront? Contact one of our professionals to answer your questions.
                                </p>
                                <div className='py-10'>
                                    <button className='btn btn-dark fs fw px-10'>
                                        Chat with consultant
                                    </button>
                                </div>
                            </div>
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

export default StoreFront