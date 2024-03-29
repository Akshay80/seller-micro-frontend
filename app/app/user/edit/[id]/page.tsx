import EditController from './edit-controller'
import { Metadata } from "next";



type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = params.id

    return {
        title: `WorldTradeX - /user/${id?.split('-'[0])}`,
    }
}

const page = () => {
    return (
        <EditController />
    )
}

export default page