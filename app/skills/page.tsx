import { CardContent } from '@/components/ui/card'
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

export default function SkillsPage() {

    return (
        <CardContent className='relative w-full h-full flex flex-row items-center justify-center'>
            
            <div className='flex flex-col w-full h-full'>

                <div className='flex flex-col h-full'>
                    <ul>
                        <li>Solutions Architecture</li>
                        <li>Systems Engineering</li>
                        <li>Scripting & Automation</li>
                        <li>Full-Stack Development</li>
                        <li>Smart Contract Development</li>
                    </ul>
                </div>
            </div>
        </CardContent> 
    )
}