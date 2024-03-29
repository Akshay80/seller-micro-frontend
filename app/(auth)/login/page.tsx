import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';
import LoginControl from './login-control';

export const metadata: Metadata = {
  title: `Sign In - ${PAGE_TITLE}`,
  description: '',
};

const LoginPage = () => {
  return (
    <LoginControl />
  );
}

export default LoginPage;