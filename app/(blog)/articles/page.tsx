import { CardContent } from '@/components/ui/card'
import { GalleryCard } from '@/components/custom/gallery-card'

export default function ArticlesPage() {

    return (
        <CardContent className='w-full h-full'>
            <div className='flex flex-row flex-wrap justify-center w-full h-full'>
                <GalleryCard
                    itemName='PowerShell 7.0 Tips'
                    itemDescription='Useful PowerShell tips and tricks for beginners to advanced users.'
                    linkHref='/articles/powershell-tips'
                    linkLabel='Read More'
                    imageUrl='/desktop.png'
                />
                <GalleryCard
                    itemName='The Alchemy of Code'
                    itemDescription='Reflections on code, art, culture and life. A blog by a software engineer.'
                    linkHref='/articles/alchemy-of-code'
                    linkLabel='Read More'
                    imageUrl='/alchemy.png'
                />
            </div>
        </CardContent>        
    )
}