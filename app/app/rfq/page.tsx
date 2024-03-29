import { PAGE_TITLE } from '@/libs/helper/src/index';
import { AdminPageHeader } from "@/libs/shared/ui/src/lib/admin-page-header/admin-page-header";
import { Metadata } from 'next';
import RequestForQuote from './request-for-quote';

export const metadata: Metadata = {
    title: `RFQ - Request For Quotation - ${PAGE_TITLE}`,
    description: '',
};

const Page = () => {
    return (
        <>
            <AdminPageHeader name='RFQ' />
            <RequestForQuote />
        </>
    )
}

export default Page