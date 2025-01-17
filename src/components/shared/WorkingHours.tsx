import { workingTimes } from '@/datas/work-times'
import { FC } from 'react'
import { MediumTitle } from './MediumTitle'

interface Props {
    className?: string
}

export const WorkingHours: FC<Props> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <MediumTitle title='График работы' icon='bx bx-time' />
            <div className='flex flex-col text-gray-200'>
                {workingTimes.map(item => (
                    <div key={item.index} className={`flex text-[16px] font-semibold border-b-2 w-full justify-between py-2 ${item.index === 7 && 'border-b-0'}`}>
                        <p>{item.day}</p>
                        <p className={item.isWorking ? 'text-gray-400' : 'text-red-500 font-bold'}> {item.isWorking ? `${item.startWorking}-${item.FinishWorking}` : "Выходной"}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
