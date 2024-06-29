import {
    CardContent,
} from '@/components/ui/card'
import BlurIn from '@/components/magicui/blur-in'


export function HomeCard() {

    return (
        <>
            <CardContent className='absolute w-full h-full flex flex-row'>
                <div className='flex flex-col w-full h-full justify-center items-left p-4'>
                    <BlurIn
                        className='flex text-5xl mx-4'
                        word='Cyberd'
                    />
                    <BlurIn
                        className='flex text-2xl my-8 px-4 font-thin' 
                        word='Web3, Architecture & Engineering'
                    />
                </div>
            </CardContent>
        </>
    )
}