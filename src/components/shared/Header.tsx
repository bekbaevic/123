import { FC } from 'react'
import {  Container, Logo } from './index'
import { LanguagesButtonGroup } from './LanguagesButtonGroup'

interface Props {
    className?: string
}

export const Header: FC<Props> = ({ className }) => {
    return (
        <div id='#' className={`h-[80px] flex items-center w-full justify-between bg-[#000050] sticky z-50 top-0 shadow-lg ${className}`}>
            <Container className='flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <Logo />
                    <p className='text-white w-[400px] '>Kаракалпакстанский филиал республиканского центра профилактики чумы</p>

                </div>
                {/* <HeaderMenu /> */}
                <div className='flex items-center gap-10'>
                    <p className='text-white flex items-center gap-2'>
                        <i className='bx bx-phone text-[20px] translate-y-[1px]'></i>
                        +998(90) 700-31-08
                    </p>
                    <LanguagesButtonGroup />

                </div>
            </Container>
        </div>
    )
}

