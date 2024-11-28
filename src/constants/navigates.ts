export type Navigate = {
    id: number
    label: string
    path: string
    isRedirect: boolean
}
export const NAVIGATES: Navigate[] = [
    { id: 1, label: 'Home', path: '/', isRedirect: false },
    { id: 2, label: 'About', path: '/about', isRedirect: false },
    { id: 3, label: 'Processes', path: '/processes', isRedirect: false },
    { id: 4, label: 'Project', path: '/project', isRedirect: false },
    {
        id: 5,
        label: 'Contact',
        path: 'https://github.com/duongcao04',
        isRedirect: true,
    },
]
