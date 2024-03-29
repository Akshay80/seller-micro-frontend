import { PAGE_TITLE } from '../../../libs/helper/src/index';
import { Metadata } from 'next';
import ChatController from './chat-controller';

export const metadata: Metadata = {
    title: `Chat - ${PAGE_TITLE}`,
    description: '',
};

export default function Page() {
    return (
        <>
            <ChatController />
        </>
    )
}