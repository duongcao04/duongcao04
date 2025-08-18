import { WorkflowStep } from '@/types/workflow'

export const WORKFLOW: WorkflowStep[] = [
    {
        id: 1,
        stepNumber: '01',
        title: 'Branding',
        shortDescription:
            'Crafting unique brand identities that leave a lasting impact and connect with your audience',
        content: '',
        contentTree: [
            {
                title: 'Discovery Phase',
                children: [
                    'Identify the Need for Change',
                    'Define Brand Essence',
                    'Understand Target Audience',
                    'Create Visual & Messaging System',
                    'Document in Brand Guidelines',
                ],
            },
        ],
    },
    {
        id: 2,
        stepNumber: '02',
        title: 'Design',
        shortDescription:
            'Desinging seamless and user-friendly digital experiences that enhance usability and engagement',
        content: '',
        contentTree: [
            {
                title: 'UI/UX',
                children: [
                    'Align with Brand Strategy & Vision',
                    'Build User-Centric UX',
                    'Develop a Maintainable Design System',
                    'Create Future-Proof Visuals',
                    'Design Engaging Interactions',
                ],
            },
        ],
        isImportant: true,
    },
    {
        id: 3,
        stepNumber: '03',
        title: 'Development',
        shortDescription:
            'Complex integrated app & web development techniques, including front-end and back-end, that leverage modern frameworks and libraries.',
        content: '',
        contentTree: [
            {
                title: 'Development',
                children: [
                    'Build Solid Backend Infrastructure',
                    'Implement Frontend Meticulously',
                    'Conduct Extensive Testing',
                    'Apply DevOps for Deployment & Optimization',
                ],
            },
        ],
    },
    {
        id: 4,
        stepNumber: '04',
        title: 'Maintenance',
        shortDescription:
            'A set of post-launch activities to ensure stability, security, and reliability of the custom app and web development services we provided.',
        content: '',
        contentTree: [
            {
                title: 'SRE (Site Reliability Engineering)',
                children: [
                    'Engage the Pillars Team',
                    'Conduct Evaluation Report',
                    'Apply SRE Practices',
                ],
            },
        ],
    },
]
