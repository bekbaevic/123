import { FC } from 'react'
import { MediumTitle } from './MediumTitle'
import { YandexMap } from './YandexMap'
import { Container } from './Container'
import { WorkingHours } from './WorkingHours'

interface Props {
    className?: string
}

export const Footer: FC<Props> = ({ className }) => {
    return (
        <div id='about' className='py-10 bg-[#000080]'>
            <Container>
                <div className={`flex gap-10 ${className}`}>
                    <div className='flex-1 flex flex-col gap-10'>
                        <div className='flex justify-between items-center'>
                            <MediumTitle title='Адрес' icon='bx bx-map' />
                            <p className='font-semibold text-gray-400'>Нукус, ул. М. Жуманазарова, 65</p>
                        </div>
                        <div className=''>
                            <MediumTitle title='Контакты' icon='bx bx-phone' />
                            <div className='flex flex-col gap-3 text-gray-400'>
                                {[
                                    { title: 'Телефон номер', values: ['+998 (90) 700-31-08', '+998 (99) 953-73-66'] },
                                    { title: 'Gmail', values: ['islambekbaevich@gmail.com'] },
                                ].map(item => (
                                    <div className='flex justify-between w-full'>
                                        <p className='font-bold'>{item.title}: </p>
                                        <p className='flex gap-10'>{item.values.map(item => (<span>{item}</span>))}</p>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <WorkingHours />
                    </div>
                    <YandexMap x={42.472832} y={59.611331} className='flex-1' />
                </div>
            </Container>
        </div>
    )
}
