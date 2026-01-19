import { IProject } from '@/shared/interfaces'

import { WorkCard } from './WorkCard'

const PROJECTS: IProject[] = [
    {
        id: 1,
        title: 'CSD Governance System',
        category: 'Systems',
        description:
            'A compact ERP solution for HR management, brand asset distribution, and workflow automation.',
        image: 'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768814466/Yangisdev/Projects/StaffCadsquad_exgcfc.png',
        tags: ['Next.js', 'NestJS', 'Docker', 'TanStack'],
        link: 'https://staff.cadsquad.vn',
    },
    {
        id: 4,
        title: 'Cadsquad.vn Official',
        category: 'Landing Page',
        description:
            'Service landing page for mechanical design and 3D digitization. Optimized for SEO, multi-language support, and high performance.',
        image: 'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768813487/Yangisdev/Projects/Cadsquad_ekxdr9.jpg',
        tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO'],
        link: 'https://www.cadsquad.vn',
    },
    {
        id: 5,
        title: 'BlobOff Cloud',
        category: 'Cloud Security',
        description:
            'A quantum-resistant personal data vault that remains offline by default ("Deep Sleep" architecture). Features on-demand activation via an independent control channel.',
        image: 'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768814302/Yangisdev/Projects/BlobOff_bigw3e.png',
        tags: [
            'Cybersecurity',
            'Green Energy',
            'Quantum Safe',
            'Offline-First',
        ],
        link: 'https://bloboff.cloud/',
    },
    {
        id: 6,
        title: 'LoopXcell Energy',
        category: 'Green Tech',
        description:
            'Sovereign energy storage system powered by open-source CerebroXmesh. Features immersion cooling for 100% fire safety and silent operation.',
        image: 'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768814345/Yangisdev/Projects/LoopXcell_yg2tkz.png',
        tags: [
            'Energy Storage',
            'Open Source',
            'Immersion Cooling',
            'Smart Grid',
        ],
        link: 'https://loopxcell.energy/',
    },
    {
        id: 7,
        title: 'Amoovo Lab',
        category: 'R&D',
        description:
            'An advanced R&D lab in Belgium focused on sustainable energy solutions and immersion cooling technologies. The parent hub behind LoopXcell.',
        image: 'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768814401/Yangisdev/Projects/Amoovo_ttbg3q.png',
        tags: ['R&D', 'Engineering', 'Sustainable Tech', 'Battery Innovation'],
        link: 'https://www.amoovo.com/',
    },
]

export function RecentWorkList() {
    return (
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {PROJECTS.map((item) => (
                <WorkCard key={item.id} data={item} />
            ))}
        </div>
    )
}
