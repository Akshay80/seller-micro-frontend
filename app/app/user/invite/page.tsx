import InviteController from "./invite-controller"

import { Metadata } from "next";

/* eslint-disable-next-line */



export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `WorldTradeX - Invite User`,
    }
}

const page = () => {
    return (
        <InviteController />
    )
}

export default page