'use client'
import {
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { SiteMenu } from '@/components/custom/site-menu'
import Link from 'next/link'

export function CardTop() {

    return (
        <CardHeader className='flex flex-row w-full items-center justify-between'>
                <CardTitle className='flex justify-between w-1/2'>
                    <Link href='/'>
                        <Image src='/cyberd_logo.png' width={100} height={100} alt="Cyberd Logo" />
                    </Link>
                </CardTitle>
                <div className='flex flex-row justify-end w-1/2'>
                    <SiteMenu />
                </div>
            </CardHeader>
    )
}