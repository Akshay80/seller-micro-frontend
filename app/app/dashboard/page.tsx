import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { AdminPageHeader } from '../../../libs/shared/ui/src/lib/admin-page-header/admin-page-header';
import { Metadata } from 'next';
import DashboardControl from './dashboard-control';

export const metadata: Metadata = {
    title: `Dashboard - ${PAGE_TITLE}`,
    description: '',
};

const Dashboard = () => {
    return (
        <>
            {/* <AdminPageHeader /> */}
            <DashboardControl />
        </>
    )
}

export default Dashboard