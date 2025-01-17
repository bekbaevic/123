import { FC } from 'react'

interface Props {
    className?: string
}

export const News: FC<Props> = ({ className }) => {
    return (
        <div className={`${className} h-[400px]`}>
            News
        </div>
    )
}
