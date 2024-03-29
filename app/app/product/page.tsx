import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';
import ProductList from './product-list';

export const metadata: Metadata = {
    title: `Products - ${PAGE_TITLE}`,
    description: '',
};

export default function Page() {
    return (
        <>
            <ProductList />
        </>
    )
}