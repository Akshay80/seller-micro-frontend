import { PAGE_TITLE } from '../../../libs/helper/src/index';
import PublicFooter from '../../../components/public-footer/public-footer';
import PublicHeader from '../../../components/public-header/public-header';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Success Stories - ${PAGE_TITLE}`,
    description: '',
};

function SuccessStories() {
    return (
        <>
            <PublicHeader />
            <div className='position-relative'>
                <img src='https://cdn.worldtradex.com/img/success-banner.jpg' className='w-100' height={300} />
                <div className='position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 className='text-white'>Success Stories</h1>
                </div>
            </div>
            <div className='container-fluid py-12'>
                <div className='container'>
                    <div className='row grid-3'>
                        {/* {data.map((card, index) => (
              <SuccessCard image={card.imageSrc} category={card.category} heading={card.title} text={card.description} key={index} />
            ))} */}
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='m-0 p-0'>Coming Soon In 2024</h1>
                </div>
            </div>
            <PublicFooter />
        </>

    );
}

export default SuccessStories;