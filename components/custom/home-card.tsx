import {
    CardContent,
} from '@/components/ui/card'

export function HomeCard() {

    return (
        <>
            <CardContent className='absolute w-full h-full flex flex-row'>
                <div className='flex flex-col w-full h-full justify-center items-left p-4'>
                    <h1 className='flex text-5xl mx-4'>Cyberd</h1>
                    <h3 className='flex text-2xl my-8 px-4 font-thin'>Architecture, Engineering, Web3</h3>
                </div>
            </CardContent>
        </>
    )
}