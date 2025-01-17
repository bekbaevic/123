import { FC } from 'react'

interface Props {
    className?: string
}

const menu_data = [
    // {
    //     name: 'Главная',
    //     link: '#',
    // },
    // {
    //     name: 'О нас',
    //     link: '#about',
    // },
    // {
    //     name: 'Проекты',
    //     link: '#projects',
    // },
    // {
    //     name: 'Новости',
    //     link: '#news',
    // },
    // {
    //     name: 'История',
    //     link: '#stories',
    // },
    // {
    //     name: 'Нормативный документы',
    //     link: '#docs',
    // },
    // {
    //     name: 'Контакты',
    //     link: '#contacts',
    // },
]

// export const HeaderMenu: FC<Props> = ({ className }) => {
//     return (
//         <ul className={`flex  ${{ className }}`}>
//             {menu_data.map((item, index) =>
//                 <li key={index}>
//                     <a className='px-4 hover:text-yellow-300 font-bold text-white transition-all duration-500' href={`${item.link}`}>{item.name}</a>
//                 </li>
//             )}
//         </ul>
//     )
// }
