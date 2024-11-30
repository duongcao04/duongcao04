import { StaticImageData } from 'next/image'

import Project1 from '@/assets/projects/project_1.png'

import { TECHNOLOGIES, type Technology } from './technologies'

export type Project = {
    id: string
    name: string
    logo?: string
    description: string
    thumbnail: string | StaticImageData
    slug: string
    images: string[]
    web_path?: string
    technologies: Technology[]
}
export const PROJECTS: Project[] = [
    {
        id: '1',
        name: 'Yangis Shop',
        description: '',
        thumbnail: Project1,
        images: ['', ''],
        slug: 'yangis-shop',
        web_path: 'https://shop.yangis.dev',
        technologies: [
            TECHNOLOGIES.react,
            TECHNOLOGIES.nodejs,
            TECHNOLOGIES.mongodb,
        ],
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
        slug: 'yangis-shop',
        web_path: 'https://shop.yangis.dev',
        technologies: [
            TECHNOLOGIES.react,
            TECHNOLOGIES.nodejs,
            TECHNOLOGIES.mongodb,
        ],
    },
    {
        id: '4',
        name: 'Yangis Shop',
        description: '',
        thumbnail: Project1,
        images: ['', ''],
        slug: 'yangis-shop',
        web_path: 'https://shop.yangis.dev',
        technologies: [
            TECHNOLOGIES.react,
            TECHNOLOGIES.nodejs,
            TECHNOLOGIES.mongodb,
        ],
    },
]
