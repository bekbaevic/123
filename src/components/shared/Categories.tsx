import { FC } from 'react'
import { Container } from './Container'
import { categories } from '@/datas/categories'

interface Props {
    className?: string
}

export const Categories: FC<Props> = ({ className }) => {
    return (
        <div className={`bg-slate-100 ${className}`}>
            <Container>
                <div className='grid grid-cols-4 gap-5 py-20 '>
                    {categories.map((item, index) => (
                        <a href='#' key={index} className='group-hover w-full hover:bg-[#000050] active:scale-[98%] transition-all duration-300 bg-[#000070] h-[160px] shadow-lg flex gap-2 flex-col items-center justify-center text-white'>
                            <i className={`text-[48px] ${item.icon}`}></i>
                            <p className='text-center'>{item.title}</p>
                        </a>
                    ))}
                </div>
            </Container>
        </div>
    )
}
