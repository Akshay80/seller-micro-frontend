import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { AdminPageHeader } from '../../../libs/shared/ui/src/lib/admin-page-header/admin-page-header';
import { Metadata } from 'next';
import OrderList from './order-list';

export const metadata: Metadata = {
  title: `Orders - ${PAGE_TITLE}`,
  description: '',
};

export default function Orders() {
  return (
    <>
      <AdminPageHeader name='Orders' />
      <OrderList />
    </>
  )
}