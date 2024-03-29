import SellerProfileLayout from "./sellerProfileLayout"
import { Metadata } from 'next';
import { PAGE_TITLE } from '@/libs/helper/src/index';

export const metadata: Metadata = {
    title: `Seller Profile - ${PAGE_TITLE}`,
    description: '',
};
const SellerProfile = () => {
    return (
        <SellerProfileLayout />
    )
}

export default SellerProfile