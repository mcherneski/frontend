'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SiteMenu() {
    const pathname = usePathname()
    return (
        <>
            <div className='hidden md:block'>
                <nav className='flex flex-row justify-between z-10'>
                    <ul className='flex items-center justify-center space-x-8 pr-4 pb-4'>
                        <li>
                            <Link href='/skills' className={`hover:text-sky-100 font-light text-md ${pathname === '/skills' ? 'text-emerald-500 border-b-2 border-emerald-500 p-2 font-normal text-xl' : 'text-white'}`}>Skills</Link>
                        </li>
                        <li>
                            <Link href='/portfolio' className={`hover:text-sky-100 font-light text-md  ${pathname === '/portfolio' ? 'text-emerald-500 border-b-2 border-emerald-500 p-2 font-normal text-xl' : 'text-white'}`}>Portfolio</Link>
                        </li>
                        <li>
                            <Link href='/services' className={`hover:text-sky-100 font-light text-md ${pathname === '/services' ? 'text-emerald-500 border-b-2 border-emerald-500 p-2 font-normal text-xl' : 'text-white'}`}>Services</Link>
                        </li>
                        <li>
                            <Link href='/articles' className={`hover:text-sky-100 font-light text-md ${pathname === '/articles' ? 'text-emerald-500 border-b-2 border-emerald-500 p-2 font-normal text-xl' : 'text-white'}`}>Articles</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}