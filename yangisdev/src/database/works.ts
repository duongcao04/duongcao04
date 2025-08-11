import CadsquadThumbnail from '@/assets/img/work/cadsquad_thumbnail.webp'
import YangisdevThumbnail from '@/assets/img/work/yangisdev_thumbnail.webp'
import { Work } from '@/types/work'

export const WORKS: Work[] = [
    {
        id: 1,
        name: 'Yangis.dev',
        title: 'My portfolio Next Gen website',
        description:
            'This portfolio website is a showcase of my skills, projects, and experience as a web developer. Built using React.js, TypeScript, and modern web technologies, it features a clean, responsive design optimized for all devices. The site includes sections highlighting my technical expertise, professional journey, and completed projects with live demos and GitHub links. It also offers a seamless contact form for visitors to get in touch. This portfolio reflects my passion for creating elegant, functional, and user-centric web solutions.',
        thumbnailUrl: YangisdevThumbnail,
        screenshotUrls: [
            'https://res.cloudinary.com/dqx1guyc0/image/upload/v1751794825/Yangisdev/Projects/Yangisdev_bxildv.png',
        ],
        tags: ['Branding', 'Web Development'],
        slug: 'yangisdev',
        originalUrl: 'https://yangis.dev',
        technologies: ['Next.js', 'Typescript', 'MongoDB'],
        content: 'a',
        startedAt: '02/2025',
        completedAt: '02/2025',
        createdAt: '2025',
        updatedAt: '2025',
    },
    {
        id: 2,
        name: 'Cadsquad.vn',
        title: 'A highly skilled and experienced group of mechanical engineers passionate',
        tags: ['Branding', 'Web Development'],
        slug: 'Cadsquadvietnam',
        thumbnailUrl: CadsquadThumbnail,
        originalUrl: 'https://www.cadsquad.vn/en',
        technologies: ['Next.js', 'Typescript', 'Firebase'],
        content: 'a',
        startedAt: '02/2025',
        completedAt: '02/2025',
        createdAt: '2025',
        updatedAt: '2025',
    },
]
