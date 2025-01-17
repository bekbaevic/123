import Image from 'next/image'
import { FC } from 'react'
import photo from "@/assets/photo1.jpeg"
interface Props {
    className?: string
}

export const Banner: FC<Props> = ({ className }) => {
    return (
        <div className={`h-[calc(100vh-80px)] ${className}`}>
            <Image className='w-full h-full object-cover' src={photo} alt="Banner" />
            </div>
    )
}
