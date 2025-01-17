import { FC } from 'react'
import Logotip from "@/assets/Logo1.jpg"
import Image from 'next/image'
interface Props {
    className?: string,
}

export const Logo: FC<Props> = ({ className }) => {
    return (
        <div className={`flex gap-4 items-center text-white ${className}`}>
            <Image className={`h-[50px] min-w-[50px] w-[50px] rounded-full`} src={Logotip} alt="Logo" />
        </div>
    )
}
