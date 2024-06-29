import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
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
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant='outline' size='icon' className='background-transparent'>
                        <IoMenu className='h-4 w-4'/>
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Cyberd Menu</DrawerTitle>
                        {/* <DrawerClose className='absolute top-0 right-0 px-4 py-2 text-2xl text-black/50'><FaRegArrowAltCircleDown /></DrawerClose> */}
                    </DrawerHeader>
                    <div className=''>
                        {/* <ul className='flex flex-row justify-center items-center flex-wrap'>
                            <li>Skills</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Articles</li>
                        </ul> */}
                        <BackgroundCard />
                    </div>
                    <DrawerFooter>
                    <div className='flex flex-row items-center justify-between'>
                        <Button variant='link' onClick={() => console.log('Email Button clicked')} className='text-black text-2xl px-8'><HiOutlineMail /></Button>
                        <Link className='text-2xl px-8' href='https://calendly.com/mike-x4op/30min'><IoIosCalendar /></Link>
                        <Link className='text-2xl px-8' href='https://github.com/mcherneski'><VscGithub /></Link>
                        <Link className='text-2xl px-8' href='https://twitter.com/mikecski'><TbBrandTwitter /></Link>
                    </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
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