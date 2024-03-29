import CreateProductLayout from "./createProductLayout"
import { Metadata } from 'next';
import { PAGE_TITLE } from '../../../../libs/helper/src/index';

export const metadata: Metadata = {
    title: `Create Product - ${PAGE_TITLE}`,
    description: '',
};
const CreateProduct = () => {
    return (
        <CreateProductLayout />
    )
}

export default CreateProduct