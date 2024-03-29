import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Pricing - ${PAGE_TITLE}`,
    description: '',
};

const Pricing = () => {
    return (
        <section>
            <div className='bg-white'>
                <div className='container'>
                    <div className='text-center mt-16'>
                        <h1 style={{ color: '#2c2d69', fontSize: '40px', lineHeight: '55px', fontWeight: '600' }}>Please consult your local sales for more <br /> information</h1>
                        <div className='mt-16 mb-12'>
                            <img src='https://cdn.worldtradex.com/img/pricingSvg.png' alt='' width={772} />
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

export default Pricing