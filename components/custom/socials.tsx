import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Socials() {
    return (
        <>
            <div className='flex flex-row justify-start ml-8 mt-6'>
                <Button variant='link' onClick={() => console.log('Email Button clicked')} className='text-white text-2xl px-4 translate-y-[-4px]'><HiOutlineMail /></Button>
                <Link className='text-2xl px-4' href='https://calendly.com/mike-x4op/30min'><IoIosCalendar /></Link>
            </div>
            <div className='flex flex-row justify-end mt-8 mr-4'>
                <Link className='text-2xl px-4' href='https://github.com/mcherneski'><VscGithub /></Link>
                <Link className='text-2xl px-4' href='https://twitter.com/mikecski'><TbBrandTwitter /></Link>
            </div>
        </>
    )
}