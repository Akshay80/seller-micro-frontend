import { PAGE_TITLE } from '@/libs/helper/src/index';
import { AdminPageHeader } from "@/libs/shared/ui/src/lib/admin-page-header/admin-page-header";
import { Metadata } from 'next';
import ReviewPageLayout from "./review-list";

export const metadata: Metadata = {
    title: `Customer Reviews - ${PAGE_TITLE}`,
    description: '',
};

const Page = () => {
    return (
        <>
            <AdminPageHeader name='Customer Ratings & Reviews' />
            <ReviewPageLayout />
        </>
    )
}

export default Page