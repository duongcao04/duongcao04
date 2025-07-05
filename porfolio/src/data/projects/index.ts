import { StaticImageData } from 'next/image'

import YangisPortfolioThumbnail from '@/assets/img/work/screenshot/yangis-portfolio.png'
import YangisShopThumbnail from '@/assets/img/work/screenshot/yangis-shop.png'

export type Project = {
    id: string
    feature_project: string
    name: string
    logo?: string
    description: string
    thumbnail: string | StaticImageData
    slug: string
    screenshots: string[] | StaticImageData[]
    web_path?: string
    technologies: string[]
    project_detail: string
    started_at?: string
    ended_at?: string
}
export const PROJECTS: Project[] = [
    {
        id: '1',
        feature_project: 'Portfolio Project',
        name: 'Yangis Portfolio',
        description:
            'This portfolio website is a showcase of my skills, projects, and experience as a web developer. Built using React.js, TypeScript, and modern web technologies, it features a clean, responsive design optimized for all devices. The site includes sections highlighting my technical expertise, professional journey, and completed projects with live demos and GitHub links. It also offers a seamless contact form for visitors to get in touch. This portfolio reflects my passion for creating elegant, functional, and user-centric web solutions.',
        thumbnail: YangisPortfolioThumbnail,
        screenshots: [YangisShopThumbnail],
        slug: 'yangis-portfolio',
        web_path: 'https://yangis.dev',
        technologies: ['Next.js', 'Typescript', 'MongoDB'],
        project_detail: 'a',
        started_at: '02/2025',
    },
    {
        id: '2',
        feature_project: 'E-commerce Project',
        name: 'Yangis Shop',
        description:
            'Yangis Shop is a modern online store specializing in selling high-quality electronic devices. The website is built with React.js and Nest.js, ensuring fast performance, seamless navigation, and a user-friendly experience. With features like product search, detailed product pages, secure checkout, and responsive design, Yangis Shop offers customers a convenient and reliable shopping experience. This platform reflects my commitment to delivering innovative e-commerce solutions tailored to the needs of tech enthusiasts.',
        thumbnail: YangisShopThumbnail,
        screenshots: [YangisShopThumbnail],
        slug: 'yangis-shop',
        web_path: 'https://shop.yangis.dev',
        technologies: [
            'React.js',
            'Nest.js',
            'Typescript',
            'TypeORM',
            'PostgreSQL',
        ],
        project_detail: 'b',
        started_at: '09/2024',
        ended_at: '05/2025',
    },
]
