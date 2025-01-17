import { FC } from 'react'
import { Container } from './Container'
import Image from 'next/image'
import { projectsData } from '@/datas/projects'
interface Props {
    className?: string
}

export const Projects: FC<Props> = ({ className }) => {
    return (
        <div id='projects' className={`${className} bg-slate-100 pb-20`}>
            <Container>
                <h1 className='text-[36px] font-extrabold text pb-5 pt-10 text-slate-800'>Проекты</h1>
                <div className='grid grid-cols-3 gap-10'>
                    {[1, 2, 3].map(i => (
                        projectsData.map(item => (
                            <div key={i} className='rounded-lg bg-gray-600 p-5 shadow-lg'>
                                <img src={item.imgUrl} alt='image' className='w-full h-[250px] object-cover rounded-lg' />
                                <div className='pt-3 text-white'>
                                    <p className='uppercase text-[20px] font-bold pb-2 border-b mb-2'>{item.title}</p>
                                    <p className='text-gray-300'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            </Container>
        </div>
    )
}
