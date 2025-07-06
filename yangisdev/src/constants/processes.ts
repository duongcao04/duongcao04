export type Process = {
    id: number
    title: string
    description: string
}
export const PROCESSES: Process[] = [
    {
        id: 1,
        title: 'Understanding Client Needs',
        description:
            'I begin by discussing in detail with clients to fully understand their requirements, goals, and vision for the project.',
    },
    {
        id: 2,
        title: 'Planning & Designing',
        description:
            'I create a detailed plan and design an intuitive, user-friendly interface that balances aesthetics and functionality.',
    },
    {
        id: 3,
        title: 'Development & Programming',
        description:
            'I use my expertise to develop dynamic, high-performance web applications compatible across devices.',
    },
    {
        id: 4,
        title: 'Testing & Optimization',
        description:
            'I rigorously test and optimize the product to ensure flawless functionality and top-notch performance before delivery.',
    },
    {
        id: 5,
        title: 'Post-Deployment Support',
        description:
            'I provide ongoing support and maintenance to ensure the product remains stable and updated as needed.',
    },
]
