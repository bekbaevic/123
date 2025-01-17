import { FC } from 'react'

interface Props {
    className?: string
}

export const LanguagesButtonGroup: FC<Props> = ({ className }) => {
    return (
        <div className={`${className} flex items-center gap-2 text-gray-400`}>
            <button className='hover:text-white transition-all duration-300'>QR</button>
            <button className='hover:text-white transition-all duration-300'>UZ</button>
            <button className='text-white'>RU</button>
            <button className='hover:text-white transition-all duration-300'>EN</button>
        </div>
    )
}
