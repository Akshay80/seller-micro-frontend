import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Seller App - ${PAGE_TITLE}`,
    description: '',
};

const SellerApp = () => {
    return (
        <section>
            <div className='wtx-supplier'>
                <div className='container text-white pt-18'>
                    <img src='https://wtx-cdn.s3.amazonaws.com/img/wtx-logo.png' width={300} alt='logo' />
                    <h1 className='text-white'>Reach millons of buyers on your mobile device</h1>
                    <p>With the Alisupplier app, discover more opportunities to manage and grow your business anytime, anywhere.</p>

                    <div className='d-flex gap-8'>
                        <div>
                            <div className='pb-5'>
                                <button className='btn btn-white'>Download for iPhone</button>
                            </div>
                            <button className='btn btn-dark'>Download for Android</button>
                        </div>
                        <div className='d-flex align-items-center gap-8'>
                            <div className='border rounded mt-15'>
                                <img src='https://cdn.worldtradex.com/img/QRCode-Android.png' width={100} alt='' />
                            </div>
                            <div className='border rounded mt-15'>
                                <img src='https://cdn.worldtradex.com/img/QRCode-Apple.png' width={100} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-0 m-0 wtx-supplier-1'>
                <img src='https://cdn.worldtradex.com/img/wtx-supplier-2.jpg' className='img-fluid' alt='' />
            </div>

            <div className='p-0 m-0 wtx-supplier-1'>
                <img src='https://cdn.worldtradex.com/img/wtx-supplier-3.jpg' className='img-fluid' alt='' />
            </div>

            <div className='p-0 m-0 wtx-supplier-1'>
                <img src='https://cdn.worldtradex.com/img/wtx-supplier-4.jpg' className='img-fluid' alt='' />
            </div>

            <div className='container'>
                <div className='text-center py-10'>
                    <h1>Download now</h1>
                </div>
                <div className='row pb-7'>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='card' style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,.2)' }}>
                            <img src='https://cdn.worldtradex.com/img/ios.jpg' alt='ios' />
                            <div className=' h-100 card-body card-hover mx-2'>
                                <h3 className='h5 pt-3 pb-1 mb-2'>IOS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='card' style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,.2)' }}>
                            <img src='https://cdn.worldtradex.com/img/android.jpg' alt='ios' />
                            <div className=' h-100 card-body card-hover mx-2'>
                                <h3 className='h5 pt-3 pb-1 mb-2'>Android</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mt-3'>
                        <div className='card' style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,.2)' }}>
                            <img src='https://cdn.worldtradex.com/img/ios.jpg' alt='ios' />
                            <div className='h-100 card-body card-hover mx-2'>
                                <h3 className='h5 pt-3 pb-1 mb-2'>QR code

                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SellerApp