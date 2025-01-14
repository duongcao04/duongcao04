export type Navigate = {
    id: number
    label: string
    path: string
}
export const NAVIGATES: Navigate[] = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'About', path: '/about' },
    { id: 3, label: 'Processes', path: '/processes' },
    { id: 4, label: 'Projects', path: '/projects' },
]
