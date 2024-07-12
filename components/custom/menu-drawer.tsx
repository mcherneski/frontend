import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { IoMenu } from "react-icons/io5"
import { Button } from "@/components/ui/button"
import { VscGithub } from "react-icons/vsc"
import { TbBrandTwitter } from "react-icons/tb"
import { HiOutlineMail } from "react-icons/hi"
import { IoIosCalendar } from "react-icons/io"
import Link from 'next/link'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { BackgroundCard } from "./background-card"

export function MenuDrawer() {
        
    return (
        <>
            <Card className='relative w-screen h-content z-10'>
                <CardHeader>
                    <CardTitle className=''>
                        Menu
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <ul className='flex flex-row justify-center items-center flex-wrap'>
                            <li className='p-4'><Link href='/skills' >Skills</Link></li>
                            <li className='p-4'><Link href='/portfolio' >Services</Link></li>
                            <li className='p-4'><Link href='/services' >Projects</Link></li>
                            <li className='p-4'><Link href='/articles' >Articles</Link></li>
                        </ul>
                    </div>
                </CardContent>
                <CardFooter className='flex flex-row justify-between items-center'>
                        <Button variant='link' onClick={() => console.log('Email Button clicked')} className='text-black text-2xl px-8'><HiOutlineMail /></Button>
                        <Link className='text-2xl px-8' href='https://calendly.com/mike-x4op/30min'><IoIosCalendar /></Link>
                        <Link className='text-2xl px-8' href='https://github.com/mcherneski'><VscGithub /></Link>
                        <Link className='text-2xl px-8' href='https://twitter.com/mikecski'><TbBrandTwitter /></Link>
                </CardFooter>
            </Card>
        </>
    )

}


{/* <Button 
                    variant='outline'
                    size='icon'
                    className='background-transparent'
                    onClick={() => console.log('Menu Button Clicked')}
                >
                    <IoMenu className='h-4 w-4'/>
                </Button> */}