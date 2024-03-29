import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `How to Sell - ${PAGE_TITLE}`,
    description: '',
};

const HowToSell = () => {
    return (
        <section>
            <div style={{ background: '#F8F8F8' }} className='py-13 pb-16'>
                <div className='container'>
                    <div className='d-flex justify-content-center align-items-center gap-16'>
                        <div>
                            <h1 style={{ color: '#183071' }} className='display-5'>How to start selling on WorldTradeX</h1>
                            <p className='fs-5 pt-2 fw'>
                                Ready to go global? Your business can penetrate new markets and reach customers around the world with an
                                WorldTradeX seller account. Here&#39;s how to get started!
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
                            <h2>Start selling</h2>
                            <ul className='ul-none'>
                                <div className='container border-left'>
                                    <li className='pb-1 fs fw'>Open an account</li>
                                    <li className='pb-1 fs fw'>Post your products</li>
                                    <li className='pb-1 fs fw'>Create a storefront</li>
                                    <li className='pb-1 fs fw'>Reply to inquiries</li>
                                    <li className='pb-1 fs fw'>Protect orders and payment</li>
                                </div>
                            </ul>
                        </div>

                        <div id='manage-your-account-section'>
                            <h2>Manage your account</h2>
                            <ul className='ul-none'>
                                <div className='container border-left'>
                                    <li className='pb-1 fs fw'>Stay connected with buyers</li>
                                    <li className='pb-1 fs fw'>Nurture your relationships</li>
                                    <li className='pb-1 fs fw'>Optimize sales</li>
                                </div>
                            </ul>
                        </div>

                        <div id='grow-your-business-section'>
                            <h2>Grow your business</h2>
                            <ul className='ul-none'>
                                <div className='container border-left'>
                                    <li className='pb-1 fs fw'>Hone in on keywords</li>
                                    <li className='pb-1 fs fw'>Showcase products</li>
                                    <li className='pb-1 fs fw'>Respond to RFQs</li>
                                    <li className='pb-1 fs fw'>Exhibit at online trade shows</li>
                                    <li className='pb-1 fs fw'>Join site-wide promotions</li>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className='scrollable-content'>
                        <div>
                            <div style={{ color: '#2F4480' }}>
                                <h1 style={{ color: '#2F4480' }} className='display-5'>Start selling</h1>
                                <p className='fs-5 pt-2 fw'>
                                    As an WorldTradeX seller, you&#39;re getting more than a storefront in a global marketplace
                                    . You&#39;re getting an end-to-end wholesale service platform calibrated to help you grow your
                                    business, and help you provide services to your buyers. Here&#39;s how to get up and running
                                    so you can start making sales.
                                </p>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                            <div className='ps-9'>
                                                <span className='text-blue fs-3'>01</span>
                                                <h1 className='text-dark pb-2'>Open an account</h1>
                                                <p className='text-dark fs' style={{ lineHeight: '24px' }}>
                                                    As a new seller, you may have multiple types of selling packages/plans to choose from,
                                                    depending on the country your business is in. Follow a few easy steps to register for an
                                                    WorldTradeX seller account and get your Business Verification process done to build trust
                                                    between you and your potential buyers. You can also choose to have a dedicated account
                                                    manager who will help you through the process.
                                                </p>
                                                <p className='pt-7 fs-5 text-blue'>
                                                    Chat with consultant
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-light rounded'>
                                <div className='p-6'>
                                    <h5><span className='text-blue'><i className='bi bi-lightbulb'></i></span> What is Business Verification?</h5>
                                    <p className='pt-2 fs fw text-dark'>
                                        Business Verification is a critical component of WorldTradeX seller membership as it establishes the validity
                                        of your company&#39;s status and authorized contact person. Business Verficaition helps buyers trust you and want
                                        to do business with you compared to seller accounts that did not go through a business verification.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='pe-9'>
                                                <span className='text-blue fs-3'>02</span>
                                                <h1 className='text-dark pb-2'>Post your products</h1>
                                                <p className='text-dark fs mb-1'>
                                                    It&#39;s important to add all of the products in your catalog to your store. Having more products in your
                                                    store increases your chances of showing up in buyers&#39; search results. This means you&#39;ll potentially
                                                    get more exposure and secure more customers as a result.
                                                </p>
                                                <p className='text-dark fs m-0'>
                                                    You can post products individually, or streamline the process with the bulk upload tool. As you post products,
                                                    the Intelligent Posting system uses AI to suggest ways to optimize each listing based on how the WorldTradeX
                                                    algorithm works, and what buyers are searching for on the site.
                                                </p>
                                                <p className='pt-7 fs-5 text-blue'>
                                                    Learn how to build and optimize your product page
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
                                                <h1 className='text-dark pb-2'>Create a storefront</h1>
                                                <p className='text-dark fs'>
                                                    On WorldTradeX, you get a multi-page store dedicated entirely to your business, where you can create a unique
                                                    digital identity to help your brand stand out and showcase your goods. Your storefront is easy to set up, with
                                                    no coding or design skills necessary. This one storefront is a powerful asset because customers from anywhere
                                                    in the world can find it and see your brand and products in 18 different languages auto-translated by
                                                    WorldTradeX.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='ps-9'>
                                                <span className='text-blue fs-3'>04</span>
                                                <h1 className='text-dark pb-2'>Reply to inquiries</h1>
                                                <p className='text-dark fs'>
                                                    After listing your products, you will begin receiving inquiries from potential buyers. As a true B2B platform,
                                                    WorldTradeX lets you own the relationship with your customers - messaging back and forth and negotiating prices.
                                                    Inquiries that are responded to within four hours have 30% more follow-up responses from potential buyers,
                                                    so the My WorldTradeX seller workbench and the AliSupplier mobile app are available to ensure you get notified
                                                    when inquiries come in.
                                                </p>
                                                <p className='pt-7 fs-5 text-blue'>
                                                    Check out the quick response playbook/blog
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
                                                <span className='text-blue fs-3'>05</span>
                                                <h1 className='text-dark pb-2'>Protect orders and payment</h1>
                                                <p className='text-dark' style={{ fontSize: '16px', lineHeight: '24px' }}>
                                                    Ensure a positive end-to-end experience for your buyers with Trade Assurance,
                                                    WorldTradeX&#39;s order protection and secure payments service. This service makes
                                                    it easier for buyers to trust working with sellers around the world who they
                                                    may never meet in person - which makes it easier for you to close the sale.
                                                    This also helps you streamline your process with all messages, orders,
                                                    and payment in one place.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-light rounded'>
                                <div className='p-6'>
                                    <h5><span className='text-blue'><i className='bi bi-lightbulb'></i></span> What is Trade Assurance?</h5>
                                    <p className='pt-2 fs fw text-dark'>
                                        Trade Assurance protects orders from payment through delivery. It provides a secure payment platform for both
                                        the buyer and seller, ensures products arrive at the final destination on time and as expected, and provides
                                        impartial mediation if there is a dispute. Trade Assurance is only available in select countries. Be sure to
                                        activate Trade Assurance after creating your account.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className='mt-10' />

                        <div className='pt-10'>
                            <div style={{ color: '#2F4480' }}>
                                <h1 style={{ color: '#2F4480' }} className='display-5'>Manage your account</h1>
                                <p className='fs-5 pt-2'>
                                    Once you start getting inquiries and orders, it&#39;s time to optimize your process with tools built specifically for
                                    B2B wholesale trade.
                                </p>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='pe-9'>
                                                <span className='text-blue fs-3'>01</span>
                                                <h1 className='text-dark pb-2'>Stay connected with buyers</h1>
                                                <p className='text-dark fs' style={{ lineHeight: '24px' }}>
                                                    After receiving an inquiry, you&#39;re more likely to have additional interactions with the potential buyer
                                                    if you respond within four hours. To stay on top of all your messages, you can download the AliSupplier
                                                    mobile app. That way you&#39;ll immediately know when you have new messages from interested businesses.
                                                </p>
                                                <p className='pt-7 fs-5 text-blue'>
                                                    Get the app
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
                                                <h1 className='text-dark pb-2'>Nurture your relationships</h1>
                                                <p className='text-dark fs mb-1'>
                                                    Unlike many other B2B platforms, WorldTradeX wants you to interact with your customers and own your relationships.
                                                    That means you have access to your potential buyers&#39; data, as well as their contact information. Use this to stay
                                                    in touch, offer deals, and keep them interested and coming back for more.
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
                                                <span className='text-blue fs-3'>03</span>
                                                <h1 className='text-dark pb-2'>Optimize sales</h1>
                                                <p className='text-dark' style={{ fontSize: '16px', lineHeight: '24px' }}>
                                                    Take charge of your sales by analyzing your dashboards of in-depth data to review and optimize for exposure, click volume,
                                                    spend, average click cost, user growth, store visits, inquiries, orders, and more. The system will also suggest improvements
                                                    based on trends within your account and the user base.
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

                        <hr className='mt-10' />

                        <div>
                            <div style={{ color: '#2F4480' }}>
                                <h1 style={{ color: '#2F4480' }} className='display-5'>Grow your business</h1>
                                <p className='fs-5 pt-2 fw'>
                                    You&#39;ve set up your account, and the orders are coming in. If you&#39;re ready to expand even more,
                                    take your business to the next level by using marketing tools to increase awareness and sales.
                                </p>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' height={400} />
                                            </div>
                                            <div className='ps-9'>
                                                <span className='text-blue fs-3'>01</span>
                                                <h1 className='text-dark pb-2'>Hone in on keywords</h1>
                                                <p className='text-dark fs' style={{ lineHeight: '24px' }}>
                                                    Take advantage of a suite of advertising tools to help you focus on your audience
                                                    and increase exposure to the most interested buyers. Target based on geography,
                                                    click history, and more - and only pay per click.
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
                                                <h1 className='text-dark pb-2'>Showcase products</h1>
                                                <p className='text-dark fs mb-1'>
                                                    Get up to 43% more exposure with product showcases – the online equivalent to a window display.
                                                    Select which products you want featured more prominently in your store and in search, or take
                                                    WorldTradeX&#39;s AI-based suggestions.
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
                                                <h1 className='text-dark pb-2'>Respond to RFQs</h1>
                                                <p className='text-dark fs'>
                                                    No need to wait for buyers to come to you - you can proactively find buyers looking for products like
                                                    yours on the Request for Quotation (RFQ) market.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-light rounded'>
                                <div className='p-6'>
                                    <h5><span className='text-blue'><i className='bi bi-lightbulb'></i></span> What is the Request for Quotation (RFQ) market?</h5>
                                    <p className='pt-2 fs fw text-dark'>
                                        A Request for Quotation (also referred to as an RFQ) is a sourcing request that a buyer submits to the WorldTradeX
                                        platform rather than to an individual seller. The buyer details what they&#39;re looking for and submits the RFQ, which
                                        is then open for all sellers to view and send quotes on. The RFQ market is where sellers can search through all the
                                        buyers&#39; RFQs and respond to the ones that are relevant to them.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className=' containerpy-5 d-flex justify-content-around'>
                                    <div className='container p-10'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='ps-9'>
                                                <span className='text-blue fs-3'>04</span>
                                                <h1 className='text-dark pb-2'>Exhibit at online trade shows</h1>
                                                <p className='text-dark fs'>
                                                    Trade shows are now digital, and an ideal place to showcase your products to interested and motivated buyers.
                                                    Join a trade show as a keynote speaker or exhibitor to reach a huge audience on WorldTradeX&#39;s social media - plus
                                                    an intimate audience during closed-door sessions.
                                                </p>
                                                <p className='pt-7 fs-5 text-blue'>
                                                    Check out the quick response playbook/blog
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
                                                <span className='text-blue fs-3'>05</span>
                                                <h1 className='text-dark pb-2'>Join site-wide promotions</h1>
                                                <p className='text-dark' style={{ fontSize: '16px', lineHeight: '24px' }}>
                                                    Participate in your choice of multiple annual WorldTradeX-sponsored campaigns and promotions to enjoy increased
                                                    traffic periods and interest.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className='mt-10 pt-8 container'>
                            <div style={{ color: '#2F4480' }}>
                                <h1 style={{ color: '#2F4480' }} className='display-5'>Know you&#39;re supported</h1>
                                <p className='fs-5 pt-2 fw'>
                                    Connect with customer service that&#39;s there when you need it, plus a suite of third-party service providers including website
                                    designing services, optimized product posting, keyword recommendation, and more.
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
    );
}

export default HowToSell;