'use client'
import { cn } from '@/lib/cn'
import Link from 'next/link'

export function FooterNav() {

    return (
        <nav className='flex flex-row justify-center flex-wrap items-center w-screen'>
            <Link href='/skills' className='w-1/2 h-36 p-2'>
                <div
                    className={cn(
                        'group w-full cursor-pointer overflow-hidden relative card h-full w-full rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border-transparent dark:border-neutral-800',
                        "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                    )}
                >
                    <div className='text relative z-50'>
                        <h1 className='font-bold text-xl md:text-3xl text-gray-50 relative'>
                            Skills
                        </h1>
                    </div>
                </div>
            </Link>
            <Link href='/portfolio' className='w-1/2 h-36 p-2'>
                <div
                    className={cn(
                        'group w-full cursor-pointer overflow-hidden relative card h-full w-full rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border-transparent dark:border-neutral-800',
                        "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                    )}
                >
                    <div className='text relative z-50'>
                        <h1 className='font-bold text-xl md:text-3xl text-gray-50 relative'>
                            Portfolio
                        </h1>
                    </div>
                </div>
            </Link>
            <Link href='/services' className='w-1/2 h-36 p-2'>
                <div
                    className={cn(
                        'group w-full cursor-pointer overflow-hidden relative card h-full w-full rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border-transparent dark:border-neutral-800',
                        "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                    )}
                >
                    <div className='text relative z-50'>
                        <h1 className='font-bold text-xl md:text-3xl text-gray-50 relative'>
                            Services
                        </h1>
                    </div>
                </div>
            </Link>
            <Link href='/articles' className='w-1/2 h-36 p-2'>
                <div
                    className={cn(
                        'group w-full cursor-pointer overflow-hidden relative card h-full w-full rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border-transparent dark:border-neutral-800',
                        "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                    )}
                >
                    <div className='text relative z-50'>
                        <h1 className='font-bold text-xl md:text-3xl text-gray-50 relative'>
                            Articles
                        </h1>
                    </div>
                </div>
            </Link>
        </nav>
    )
}