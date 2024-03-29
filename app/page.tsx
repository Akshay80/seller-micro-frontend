import { PAGE_TITLE } from '@/libs/helper/src/index';
import { ImageSlider } from '@/libs/shared/ui/src/lib/image-slider/image-slider';
import { Metadata } from 'next';
import PublicFooter from '../components/public-footer/public-footer';
import PublicHeader from '../components/public-header/public-header';
import SliderData from '../data/sliderData.json';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: '',
};

export default async function Index() {
  return (
    <section>
      <PublicHeader />
      <div className='bg-light'>
        <div className='pb-5'>
          <div className='d-flex flex-column justify-content-center align-items-center' style={{ background: 'url(https://wtx-cdn.s3.amazonaws.com/img/main-header.png)',height:'80vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',width:'100%' }}>
            <section className='container text-light'>
              <div className='d-lg-flex justify-content-between gsp-3 py-12'>
                <div>
                  <p className='fs-3 m-0 mb-3'>Sell on WorldTradeX</p>
                  <h1 className='display-6 text-light'>Reach millions of B2B buyers globally</h1>
                  <div className='d-flex gap-5 pt-9'>
                    <a href='/register'><button className='btn btn-light btn-radius'>Start Selling</button></a>
                    <a href="https://buy.worldtradex.com/" target='_blank'><button className='btn btn-outline-light btn-radius btn-padding'>Find buyers now</button></a>
                  </div>
                </div>
              </div>
            </section>
          </div>


          <div className='pt-12 container'>
            <section className='container mb-10'>
              <div className='card bg-white border-gray shadow-sm p-6 px-lg-12'>
                <div className='py-3'>
                  <div className='text-center pt-lg-7 px-lg-15 pb-lg-7'>
                    <h1>WorldTradeX is a leading ecommerce platform that helps SMEs go global</h1>
                  </div>
                  <div className='d-lg-flex justify-content-center gap-16 align-items-center mx-7 mt-5 pb-5'>
                    <div className='video-img mb-4'>
                      <img src='https://cdn.worldtradex.com/img/verified-supplier-video-image.jpg' className='img-fluid' alt='' width='500' />
                      {/* <h1 onClick={() => showModal(true)}>
                        <i className="bi bi-play-circle"></i>
                      </h1> */}
                    </div>
                    <div>
                      <p className='mb-4 mb-lg-8 fs-4'>Connect with millions of business buyers from around the world.</p>
                      <p className='mb-4 mb-lg-8 fs-4'>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
                      <p className='mb-4 mb-lg-8 fs-4'>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className='d-flex justify-content-between align-items-center flex-column flex-lg-row'>
              <div>
                <h3>Don&#39;t wait for buyers to find you! Find them first with RFQ.</h3>
                <p>5,000+ industries with data on in-demand products and 20,000+ buyers post RFQs every day.</p>
              </div>
              <button type='button' className='btn btn-outline-dark btn-radius me-10 px-7'>Find buyers now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-dark py-8'>
        <div className='p-lg-12 px-3'>
          <h1 className='text-center text-white mb-7'>Check your category data performance on WorldtradeX</h1>
          <p className='text-center fs-3  text-white'>Input your category and get understanding of market size, top buying countries, trendy product selection and more.</p>
          <div className='text-center'>
            <div className='row justify-content-center mt-7'>
              <div className='col-md-6 mb-4'>
                <input
                  type='text'
                  id='name'
                  className='form-control input'
                  name='name'
                  placeholder='eg Customer Vegetables'
                  defaultValue=''
                />
              </div>
            </div>
            <div className='mt-7'>
              <button className='btn btn-white text-dark btn-radius px-10' type='submit'>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className='px-lg-16 pb-6  bg-light'>
        <div className='pt-10 container'>
          <h1 className='text-center py-10'>Success stories from WorldTradeX sellers</h1>
          <ImageSlider slides={SliderData} />
        </div>
        <div className='text-center pt-8 pb-10'>
          <a href="/success-stories"><button type='button' className='btn btn-outline-dark btn-radius btn-padding px-8'>More Stories</button></a>
        </div>
      </div>

      <div className='bg-white container py-5'>
        <section className='container py-5 mt-3 mt-lg-5'>
          <div className='text-center pt-1 pt-xl-3 mb-lg-4'>
            <h2 className='h1'>Check out the latest articles from our blog</h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 mt-3'>
              <div className='card p-0 h-100 card-body card-hover card-shadow'>
                <img src='https://cdn.worldtradex.com/img/vegetables.jpg' className='rounded-top' alt='' height={300} />
                <div className='p-3'>
                  <span className='fs-3 text-dark pt-3 pb-1 mb-2'>Ignite Your Online Business with these 12 Makeup Trends in 2023</span>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt-3'>
              <div className='card p-0 h-100 card-body card-hover card-shadow'>
                <img src='https://cdn.worldtradex.com/img/invest.jpg' className='rounded-top' alt='' height={300} />
                <div className='p-3'>
                  <span className='fs-3 text-dark pt-3 pb-1 mb-2'>7 Low investment ideas to start online</span>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt-3'>
              <div className='card p-0 h-100 card-body card-hover card-shadow'>
                <img src='https://data.vcpost.com/data/images/full/102805/image-by-gerd-altmann-from-pixabay.jpg' className='rounded-top' alt='' height={300} />
                <div className='p-3'>
                  <span className='fs-3 text-dark pt-3 pb-1 mb-2'>Stay Competitive and Thrive in 2023</span>
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
              <a href='/register'><button className='btn btn-white btn-radius text-black px-7 py-2' type='submit'><span className='fs-5'>Start Selling</span></button></a>
            </div>
          </div>
        </div>
      </div>

      {/* <Modal show={modal} onHide={() => showModal(false)} className='pt-10'>
          <div className="modal-video-container">
            <video controls className="modal-video" width={500} autoPlay loop muted>
              <source src={'/img/verified-supplier-video.mp4'} type="video/mp4" />
            </video>
            <h1 className='m-0 p-0 display-5'>
              <span className='cursor-pointer close-icon' onClick={() => showModal(false)}><i className="bi bi-x-circle-fill" /></span>
            </h1>
          </div>
        </Modal> */}
      <PublicFooter />
    </section>
  );
}