import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { ImageSlider } from '../../../libs/shared/ui/src/lib/image-slider/image-slider';
import { Metadata } from 'next';
import SliderData from '../../../data/sliderData.json';

export const metadata: Metadata = {
  title: `Why - ${PAGE_TITLE}`,
  description: '',
};

const Why = () => {
  return (
    <section>
      <div className='why-header text-white'>
        <div className='pt-18 w-50 ps-18'>
          <h2 className='text-white'> Why sell on WorldTradeX</h2>
          <p className='fw fs'>
            WorldTradeX makes ecommerce possible for sellers around the world, connecting you with new customers and the tools necessary to do business on a global scale.
          </p>
        </div>
      </div>

      <div style={{ background: '#F8F8F8' }}>
        <div className='container py-16'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='pe-18'>
              <h1 className='text-dark pb-2 display-5'>About WorldTradeX</h1>
              <p className='text-dark' style={{ fontSize: '16px', lineHeight: '24px' }}>
                One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma, WorldTradeX ecommerce
                platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite
                of tools built for B2B.
              </p>
            </div>
            <div>
              <img src="https://cdn.worldtradex.com/img/invest.jpg" alt="" height={400} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#F2F4F8' }}>
        <div className='container'>
          <div className='py-16'>
            <div className='text-center d-flex flex-column gap-2 pb-10'>
              <h1 style={{ fontWeight: '500' }}>Grow with WorldTradeX</h1>
              <p className='fs-4 fw'>Why sellers around the world use WorldTradeX for wholesale trade?</p>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <img src="https://cdn.worldtradex.com/img/invest.jpg" alt="" height={400} />
              </div>
              <div className='ps-18'>
                <h2 className='mb-5'>Reach millions of business buyers globally</h2>
                <p className='text-dark fw fs' style={{ lineHeight: '24px' }}>
                  Get your products in front of 20 million+ active buyers who make 280,000+ inquiries daily from 190+ countries and regions.
                </p>
                <div className='fs mt-10 d-flex gap-1'>
                  <a href='/'>See the global demand for your products</a>
                  <h3 className='text-primary'><i className="bi bi-arrow-right" /></h3>
                </div> 
              </div>
            </div>
          </div>
          <hr />
          <div className='py-16'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='pe-18'>
                <h2 className='mb-5'>Get discovered and increase sales with intelligent tools</h2>
                <p className='text-dark fw fs' style={{ lineHeight: '24px' }}>
                  Manage your growth with analytics tools, customer data, a custom digital storefront, targeted advertising, and more.
                </p>
                <div className='fs mt-10 d-flex gap-1'>
                  <a href='/'>See the suite of business tools</a>
                  <h3 className='text-primary'><i className="bi bi-arrow-right" /></h3>
                </div>
              </div>
              <div>
                <img src="https://cdn.worldtradex.com/img/invest.jpg" alt="" height={400} />
              </div>
            </div>
          </div>
          <hr />
          <div className='py-16'>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <img src="https://cdn.worldtradex.com/img/invest.jpg" alt="" height={400} />
              </div>
              <div className='ps-18'>
                <h2 className='mb-5'>Unlock your success with professional services</h2>
                <p className='text-dark fw fs' style={{ lineHeight: '24px' }}>
                  Our team of experts guide you in each step of your onboarding process and help you define a clear roadmap to success.
                </p>
                <div className='fs mt-10 d-flex gap-1'>
                  <a href='/'>See how we&#39;re at your service</a>
                  <h3 className='text-primary'><i className="bi bi-arrow-right" /></h3>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='py-10'>
            <h1 className='text-center py-5'>Success stories from WorldTradeX sellers</h1>
            <ImageSlider slides={SliderData} />
            <div className='text-center pt-8 pb-10'>
              <button type='button' className='btn btn-outline-dark btn-radius btn-padding px-8 bg-white fs fw'>More Stories</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white container py-5">
        <section className="container py-5 mt-3 mt-lg-5">
          <div className="text-center pt-1 pt-xl-3 mb-lg-4">
            <h2 className="h1">Check out the latest articles from our blog</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="card p-0 h-100 card-body card-hover card-shadow">
                <img src="https://cdn.worldtradex.com/img/vegetables.jpg" className="rounded-top" alt="" height={300} />
                <div className="p-3">
                  <span className="fs-3 text-dark pt-3 pb-1 mb-2">What are Incoterms? A beginner&#39;s guide</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="card p-0 h-100 card-body card-hover card-shadow">
                <img src="https://cdn.worldtradex.com/img/invest.jpg" className="rounded-top" alt="" height={300} />
                <div className="p-3">
                  <span className="fs-3 text-dark pt-3 pb-1 mb-2">Trading vs manufacturing, which business to start?</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="card p-0 h-100 card-body card-hover card-shadow">
                <img src="https://data.vcpost.com/data/images/full/102805/image-by-gerd-altmann-from-pixabay.jpg" className="rounded-top" alt="" height={300} />
                <div className="p-3">
                  <span className="fs-3 text-dark pt-3 pb-1 mb-2">How to optimize B2B product pages that convert?</span>
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
  );
}

export default Why;