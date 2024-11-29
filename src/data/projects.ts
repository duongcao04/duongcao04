import { StaticImageData } from 'next/image'

import Project1 from '@/assets/projects/project_1.png'

export type Project = {
    id: string
    name: string
    logo?: string
    description: string
    thumbnail: string | StaticImageData
    images: string[]
    web_path?: string
}
export const PROJECTS: Project[] = [
    {
        id: '1',
        name: 'Yangis Shop',
        description: '',
        thumbnail: Project1,
        images: ['', ''],
        web_path: 'https://shop.yangis.dev',
    },
    // {
    //     id: '2',
    //     name: 'CSD Vietnam',
    //     description: '',
    //     thumbnail: '',
    //     images: ['', ''],
    //     web_path: 'https://www.csdvietnam.com',
    // },
    {
        id: '3',
        name: 'Yangis Shop',
        description: '',
        thumbnail: Project1,
        images: ['', ''],
        web_path: 'https://shop.yangis.dev',
    },
    {
        id: '4',
        name: 'Yangis Shop',
        description: '',
        thumbnail: Project1,
        images: ['', ''],
        web_path: 'https://shop.yangis.dev',
    },
]
