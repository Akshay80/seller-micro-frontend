import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Industry Reports - ${PAGE_TITLE}`,
    description: '',
};

const IndustryReports = () => {
    return (
        <section>
            <div className='px-18'>
                <div className='industry-reports' />
            </div>

            <div className='container py-10'>
                <div className='row align-items-center'>
                    <div className='col-md-6 col-lg-6 mb-5'>
                        <h4>Don’t see your industry below?</h4>
                        <p>Search for your specific industry to view additional data dashboard, which includes an overview, buyer trends and distrubition by country, and much more.</p>
                    </div>
                    <div className='col-md-6 col-lg-6 mb-5 bg-blue text-white p-5'>
                        <p>Seach your product to view industry data:</p>
                        <div className='row'>
                            <div className='col-md-8 mb-3'>
                                <input type='text' id='company' name='company' className='form-control' placeholder='Your Company' required />
                            </div>
                            <div className='col-md-4 mb-3'>
                                <button className='btn btn-white px-10'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='mb-10'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <img src='https://cdn.worldtradex.com/img/industry-reports-2.png' width={400} alt='' />
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <img src='https://cdn.worldtradex.com/img/industry-reports-2.png' width={400} alt='' />
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <img src='https://cdn.worldtradex.com/img/industry-reports-2.png' width={400} alt='' />
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <img src='https://cdn.worldtradex.com/img/industry-reports-2.png' width={400} alt='' />
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <img src='https://cdn.worldtradex.com/img/industry-reports-2.png' width={400} alt='' />
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <img src='https://cdn.worldtradex.com/img/industry-reports-2.png' width={400} alt='' />
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <img src='https://cdn.worldtradex.com/img/industry-reports-2.png' width={400} alt='' />
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <img src='https://cdn.worldtradex.com/img/industry-reports-2.png' width={400} alt='' />
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <img src='https://cdn.worldtradex.com/img/industry-reports-2.png' width={400} alt='' />
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

export default IndustryReports