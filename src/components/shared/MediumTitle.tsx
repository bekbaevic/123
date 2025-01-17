import { FC } from 'react'

interface Props {
    className?: string
    title: string
    icon: string
}

export const MediumTitle: FC<Props> = ({ title, icon }) => {
    return (
        <h1 className='text-[24px] font-bold flex items-center gap-1 mb-2 text-white'>
            <i className={`${icon} text-[28px]`}></i>
            {title}
        </h1>
    )
}
