import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function GalleryCard({
    itemName,
    itemDescription,
    
    linkHref,
    linkLabel,
    imageUrl
}: Readonly<{
    itemName: string,
    itemDescription: string,

    linkHref: string,
    linkLabel: string,
    imageUrl: string
}>) {

    return (
        <Card className='relative flex flex-col justify-center items-center bg-slate-950 text-white w-1/5 h-1/2 m-4'>
            <CardHeader className='w-full'>
                <AspectRatio ratio={16/9} className="">
                    <Image src={imageUrl} alt={`Image for ${itemName}`} className='object-cover' width={364} height={204} />
                </AspectRatio>
                <h1 className="text-center font-md">{itemName}</h1>
            </CardHeader>
            <CardContent className="flex flex-col w-full text-sm justify-center items-center">
                <p className="text-sm">{itemDescription}</p>
            </CardContent>
            <CardFooter>
                <Link href={linkHref} className="text-sm">{linkLabel}</Link>
            </CardFooter>
        </Card>
    )
}

