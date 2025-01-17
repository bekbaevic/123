import { FC } from 'react'

interface Props {
    className?: string
}

export const page: FC<Props> = ({ className }) => {
    return (
        <div className={`${{ className }}`}>
            page
        </div>
    )
}
