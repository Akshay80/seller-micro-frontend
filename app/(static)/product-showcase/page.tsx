import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Showcase Popular Products - ${PAGE_TITLE}`,
    description: '',
};

const ProductShowcase = () => {
    return (
        <section>
            <div style={{ background: '#f8f8f8' }} className='py-13 pb-16'>
                <div className='container'>
                    <div className='d-flex justify-content-center align-items-center gap-16'>
                        <div>
                            <h1 style={{ color: '#183071' }} className='display-5'>Position your listings above the competition with Product Showcase</h1>
                            <p className='fs-5 pt-2 fw'>
                                Product Showcase is a tool that allows Gold Suppliers to boost your product listings so they appear at the
                                top of the marketplace’s search engine result pages.
                            </p>
                        </div>
                        <div>
                            <img src='https://cdn.worldtradex.com/img/how-to-sell.png' alt='' width={400} height={350} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5' style={{ background: '#ECF0F5' }}>
                <div className='container d-flex justify-content-between align-items-center pt-7'>
                    <div>
                        <h2>Free Products Posting for 30 days</h2>
                        <p className='fs fw'>Apply to try out poducts posting feature for 30 days. Get started to see what your products exhibition could look like on WorldTradeX.</p>
                    </div>
                    <div>
                        <button className='btn btn-outline-dark bg-white text-dark px-7 fw'>Start tour</button>
                    </div>
                </div>
            </div>

            <div style={{ background: '#f2f4f8' }}>
                <div className='container py-13'>
                    <div className='text-center'>
                        <h1 className='fw'>Advantages of using Product Showcase</h1>
                        <p className='mt-4 fw mb-15' style={{ fontSize: '20px', color: '#2f4480' }}>There are several benefits of using Product Showcase on WorldTradeX. The top <br /> advantages include higher ranking, more exposure, and flexible listing management.</p>
                    </div>
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
                                        <i className='bi bi-newspaper' />
                                    </div>
                                    <div>
                                        <h3 className='font-weight-lighter fs-4'>Higher ranking</h3>
                                        <p>Display best-selling products into your Product Showcase to get higher ranking.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center align-items-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-camera-video' />
                                    </div>
                                    <div>
                                        <h3 className='font-weight-lighter fs-4'>More exposure</h3>
                                        <p>Items listed with Product Showcase tend to have more exposure to products that aren’t boosted with this tool.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center align-items-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-window-stack' />
                                    </div>
                                    <div>
                                        <h3 className='font-weight-lighter fs-4'>Flexible listing management</h3>
                                        <p>Product Showcase listings are easy to adjust and manage. This makes it great for sellers who need flexible marketing strategies.</p>
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

            <div>
                <div className='container py-14'>
                    <div className=' text-center pt-1 pt-xl-3 mb-lg-4'>
                        <h2 className='h1 display-7'>How to set up your Product Showcase</h2>
                        <p className='px-10 pt-3 fs fw text-dark px-18' style={{ fontSize: '20px' }}>
                            Eligible sellers can set up and manage their Product Showcase in the “My WorldTradeX” dashboards with just a few clicks.
                            Setting up your product showcases is quite easy, which makes it even more valuable as a selling tool.
                        </p>
                    </div>

                    <div className='row'>
                        <div className='col-lg-4 col-md-6 mt-3'>
                            <div className='card h-100 card-body card-hover mx-2 text-dark'>
                                <h3 className='h5 pt-3 pb-1 mb-2'>Open the “Products” tab</h3>
                                <p className='py-1' style={{ borderBottom: '5px solid #245ECF', width: '50px' }} />
                                <p className='mb-0 fs-8 fw'>Open the “Products&#39; tab. You can find this in the menu on the right hand side of your “My WorldTradeX” dashboard.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 mt-3'>
                            <div className='card h-100 card-body card-hover mx-2 text-dark'>
                                <h3 className='h5 pt-3 pb-1 mb-2'>Navigate to the “Product Showcase” tab</h3>
                                <p className='py-1' style={{ borderBottom: '5px solid #245ECF', width: '50px' }} />
                                <p className='mb-0 fs-8 fw'>Next, click the “Product Showcase” tab. This can be found under the “My Products” section of the “Products” menu.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 mt-3'>
                            <div className='card h-100 card-body card-hover mx-2 text-dark'>
                                <h3 className='h5 pt-3 pb-1 mb-2'>Choose products</h3>
                                <p className='py-1' style={{ borderBottom: '5px solid #245ECF', width: '50px' }} />
                                <p className='mb-0 fs-8 fw'>Finally, click “Add products now,” and choose the items that you’d like to boost and promote with Product Showcase.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#f2f4f8' }}>
                <div className='container py-13'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='w-40'>
                            <h1 className='display-5'>How to replace or remove Product Showcases</h1>
                            <p className='fs fw pt-2'>
                                Managing your Product Showcases is quick and easy, and it can also be done in your
                                “My WorldTradeX” dashboard. It only takes a couple of clicks to replace or remove your
                                current showcases to make room for new ones.
                            </p>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-gear-fill' />
                                    </div>
                                    <div>
                                        <h3 className='font-weight-lighter fs-4'>Drag and drop to replace</h3>
                                        <p className='pt-1'>Swapping out your products is as easy as dragging and dropping the items into the windows under the “Product Showcase” tab.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center gap-6 pt-6'>
                                <div className='d-flex justify-content-center gap-5'>
                                    <div className='text-blue fs-1'>
                                        <i className='bi bi-gear-fill' />
                                    </div>
                                    <div>
                                        <h3 className='font-weight-lighter fs-4'>Remove with one click</h3>
                                        <p className='pt-1'>Each product in the panel in the Product Showcase manager has a “Remove” button. Simply click the button to remove it.</p>
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

            <div style={{ background: '#FDFEFE' }}>
                <div className='container py-17'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div style={{ boxShadow: '20px 30px 200px 0 rgba(37,53,85,.25)' }}>
                            <img src='img/b2b-3.png' alt='' />
                        </div>
                        <div className='w-50'>
                            <p className='text-blue fs'>Storefront and catalog</p>
                            <h1 className='display-5'>
                                Tips for showcasing products
                            </h1>
                            <p>
                                Product Showcase is a valuable tool. Sellers can maximize the impact of this
                                tool by applying a few useful practices related to strategy and optimization.
                                Each practice is different, but they all tie into creating more attractive
                                listings.
                            </p>
                            <div className='accordion accordion-flush' id='accordionFlushExample'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingOne'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseOne' aria-expanded='false'
                                            aria-controls='flush-collapseOne'>
                                            <i className='bi bi-compass pe-2' /> Choose the right products
                                        </button>
                                    </h2>
                                    <div id='flush-collapseOne' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            Showcase products that your buyers will love. Highlight top sellers, trending items, and new offers for better results.
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingTwo'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseTwo' aria-expanded='false'
                                            aria-controls='flush-collapseTwo'>
                                            <i className='bi bi-bank pe-2' /> Use high-quality photos
                                        </button>
                                    </h2>
                                    <div id='flush-collapseTwo' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingTwo' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            If you want your products to catch the eyes of potential buyers, it is important to use attractive, high-quality photos.
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingThree'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseThree' aria-expanded='false'
                                            aria-controls='flush-collapseThree'>
                                            <i className='bi bi-coin pe-2' />Get strategic with keywords
                                        </button>
                                    </h2>
                                    <div id='flush-collapseThree' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingThree' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            Leverage keyword data to choose the phrases and terms that your target audience is actively searching for.
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='flush-headingfour'>
                                        <button className='accordion-button collapsed fs fw text-dark' type='button' data-bs-toggle='collapse'
                                            data-bs-target='#flush-collapseFour' aria-expanded='false'
                                            aria-controls='flush-collapseFour'>
                                            <i className='bi bi-wallet-fill pe-2' />Update Product Showcases regularly
                                        </button>
                                    </h2>
                                    <div id='flush-collapseFour' className='accordion-collapse collapse'
                                        aria-labelledby='flush-headingfour' data-bs-parent='#accordionFlushExample'>
                                        <div className='accordion-body'>
                                            It is important to keep your showcased products fresh and relevant. Change your Showcases regularly to stay with the trends.
                                        </div>
                                    </div>
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

export default ProductShowcase