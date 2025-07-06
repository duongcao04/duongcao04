import { Project } from '@/types/projects'

export const PROJECTS: Project[] = [
    {
        id: 1,
        projectField: 'Portfolio Project',
        name: 'Yangis Portfolio',
        description:
            'This portfolio website is a showcase of my skills, projects, and experience as a web developer. Built using React.js, TypeScript, and modern web technologies, it features a clean, responsive design optimized for all devices. The site includes sections highlighting my technical expertise, professional journey, and completed projects with live demos and GitHub links. It also offers a seamless contact form for visitors to get in touch. This portfolio reflects my passion for creating elegant, functional, and user-centric web solutions.',
        thumbnail:
            'https://res.cloudinary.com/dqx1guyc0/image/upload/v1751794825/Yangisdev/Projects/Yangisdev_bxildv.png',
        screenshots: [
            'https://res.cloudinary.com/dqx1guyc0/image/upload/v1751794825/Yangisdev/Projects/Yangisdev_bxildv.png',
        ],
        slug: 'yangis-portfolio',
        ref: 'https://yangis.dev',
        technologies: ['Next.js', 'Typescript', 'MongoDB'],
        content: 'a',
        startedAt: '02/2025',
        completedAt: '02/2025',
    },
    {
        id: '2',
        projectField: 'E-commerce Project',
        name: 'Techora Shop',
        description:
            'Techora Shop is a modern online store specializing in selling high-quality electronic devices. The website is built with React.js and Nest.js, ensuring fast performance, seamless navigation, and a user-friendly experience. With features like product search, detailed product pages, secure checkout, and responsive design, Yangis Shop offers customers a convenient and reliable shopping experience. This platform reflects my commitment to delivering innovative e-commerce solutions tailored to the needs of tech enthusiasts.',
        thumbnail:
            'https://res.cloudinary.com/dqx1guyc0/image/upload/v1751794900/Yangisdev/Projects/techorashop_elaj5i.png',
        screenshots: [
            'https://res.cloudinary.com/dqx1guyc0/image/upload/v1751794900/Yangisdev/Projects/techorashop_elaj5i.png',
        ],
        slug: 'techorashop',
        ref: 'https://shop.yangis.dev',
        technologies: [
            'React.js',
            'Nest.js',
            'Typescript',
            'TypeORM',
            'PostgreSQL',
        ],
        content: 'b',
        startedAt: '09/2024',
        completedAt: '05/2025',
    },
]
