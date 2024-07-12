'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { VscGithub } from "react-icons/vsc"
import { HiOutlineMail } from "react-icons/hi"
import { IoIosCalendar } from "react-icons/io"
import { FooterNav } from './footer-nav'
import { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";


export function Footer() {
    const [isOpen, setIsOpen] = useState(false)
    const closeMenu = () => setIsOpen(false)

    return (
        <div className='md:hidden block'>
            {!isOpen && (
            <div className='flex flex-row justify-end items-center p-8'>
                <Button className='text-5xl' size='icon' variant='ghost' onClick={() => setIsOpen(true)}><IoMenuSharp /></Button>
            </div>
            )}
            {isOpen && (
                <div className=''>
                    <footer className='absolute bottom-0 bg-white/80 text-black w-full rounded-t-lg flex flex-col items-center p-6 shadow-2xl'>
                        <div className='flex flex-row justify-between w-full mb-6'>
                            <Button size='icon' variant='ghost' className='' onClick={() => console.log('Button clicked')}>Home</Button>
                            <h3 className='text-2xl'>Menu</h3>
                            <Button size='icon' variant='ghost' className='' onClick={() => closeMenu()}>Close</Button>
                        </div>
                        <div className='flex flex-col justify-between w-screen'>
                            <FooterNav />
                            <div className='flex flex-row justify-between items-center w-screen mt-6'>
                                <Link className='text-2xl px-8' href='https://github.com/mcherneski'><VscGithub /></Link>
                                <Link className='text-2xl px-8' href='https://calendly.com/mike-x4op/30min'><IoIosCalendar /></Link>
                                <Button variant='link' onClick={() => console.log('Email Button clicked')} className='text-black text-2xl px-8'><HiOutlineMail /></Button>
                            </div>
                        </div>
                    </footer>
                </div>
            )}

        </div>

    )
}
