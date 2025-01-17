'use client'
import { FC,  useState } from 'react'
import { YandexMap } from './YandexMap'
import { Container } from './Container'
import { filials } from '@/datas/filials'
interface Props {
    className?: string
}

export const About: FC<Props> = ({  }) => {

    const [active, setActive] = useState(0)
    const data = filials.filter(item => item.id === active)

    const sort = (item: any) => {
        return active !== item.id ? setActive(item.id) : setActive(0)
    }

    return (
        <div id='about' className={'py-10 mb-10  bg-[#000080]'}>
            <Container>
                <h1 className='text-[36px] font-extrabold text mb-10 text-white border-b'>ОТДЕЛЕНИЕ</h1>
                <div className='flex items-center gap-2 justify-evenly'>
                    {filials.map(item => (
                        <button onClick={() => sort(item)} key={item.id} className='bg-white px-5 py-2 w-full text-center'>
                            <p className='text-[18px] font-bold'>{item.name}</p>
                        </button>
                    ))}
                </div>
                {data.map(item => (
                    <div key={item.id} className='text-white'>
                        <p className='text-[32px] text-center font-bold text-white pt-5'>{item.name}</p>
                        <div className='flex justify-between py-10'>
                            <div>
                                <div className='pb-5'>
                                    <p>Адрес:</p>
                                    <p className='text-[24px] font-bold'>{item.adress}</p>
                                </div>
                                <div className='py-5'>
                                    <p>Руководитель:</p>
                                    <p className='text-[24px] font-bold'>{item.boss}</p>
                                </div>
                                <div className='py-5'>
                                    <p>Контакты:</p>
                                    <div>
                                        {item.phone.map(item => (
                                            <p key={item} className='text-[24px] font-bold'>{item}</p>
                                        ))}
                                    </div>
                                    <p className='text-[24px] font-bold'>{item.email}</p>
                                </div>
                            </div>
                            <YandexMap x={data[0].x} y={data[0].y} className='flex-1' />
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    )
}
