import { PAGE_TITLE } from '../../../../libs/helper/src/index';
import { Metadata } from 'next';
import ProductDetailLayout from "./productDetailLayout";

export const metadata: Metadata = {
    title: `Product Details - ${PAGE_TITLE}`,
    description: '',
};
const ProductDetails = () => {
    return (
        <ProductDetailLayout />
    )
}

export default ProductDetails