import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { AdminPageHeader } from '../../../libs/shared/ui/src/lib/admin-page-header/admin-page-header';
import { Metadata } from 'next';
import PaymentList from './payment-list';

export const metadata: Metadata = {
  title: `Payments - ${PAGE_TITLE}`,
  description: '',
};

export default function Page() {
  return (
    <>
      <AdminPageHeader name='Payment Details' />
      <PaymentList />
    </>
  )
}