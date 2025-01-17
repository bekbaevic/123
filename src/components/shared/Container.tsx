import { FC, PropsWithChildren } from 'react'

interface Props {
    className?: string
}

export const Container: FC<PropsWithChildren<Props>> = ({ children, className }) => {
    return (
        <div className={`max-w-[1280px] w-full mx-auto ${className}`}>
            {children}
        </div>
    )
}
