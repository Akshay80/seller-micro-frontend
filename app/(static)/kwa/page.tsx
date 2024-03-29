import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `KWA - ${PAGE_TITLE}`,
    description: '',
};

const KWA = () => {
    return (
        <>
            <h1 className='text-center my-4'>Coming Soon in 2024</h1>
        </>
    )
}

export default KWA