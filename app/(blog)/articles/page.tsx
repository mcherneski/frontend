import { CardContent } from '@/components/ui/card'
import { GalleryCard } from '@/components/custom/gallery-card'

export default function ArticlesPage() {

    return (
        <CardContent className='w-full h-full'>
            <div className='flex flex-row flex-wrap justify-center w-full h-full'>
                <GalleryCard
                    itemName='PowerShell Tips'
                    itemDescription='Useful PowerShell tips and tricks'
                    linkHref='/articles/powershell-tips'
                    linkLabel='Read More'
                    imageUrl='/desktop.png'
                />
                <GalleryCard
                    itemName='PowerShell Tips'
                    itemDescription='Useful PowerShell tips and tricks'
                    linkHref='/articles/powershell-tips'
                    linkLabel='Read More'
                    imageUrl='/desktop.png'
                />
            </div>
        </CardContent>        
    )
}