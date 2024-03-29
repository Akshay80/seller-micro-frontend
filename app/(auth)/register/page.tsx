import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';
import RegisterControl from './register-control';

export const metadata: Metadata = {
    title: `Create Account - ${PAGE_TITLE}`,
    description: '',
};

const RegisterPage = () => {
    return (
        <RegisterControl />
    )
}

export default RegisterPage;