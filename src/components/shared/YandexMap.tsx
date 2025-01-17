"use client"

import { FC } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
interface Props {
    className?: string
    x?: Number,
    y?: Number
}

export const YandexMap: FC<Props> = ({ className, x, y}) => {

    const mapState = {
        center: [x, y],
        zoom: 15,

    }
    return (
        <YMaps>
            <div className={`w-[500px] h-[500px] shadow-lg ${{ className }}`}>
                <Map defaultState={mapState} className='w-full h-full'>
                    <Placemark geometry={mapState.center} />
                </Map>
            </div>
        </YMaps>
    )
}

