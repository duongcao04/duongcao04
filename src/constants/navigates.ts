interface INavigate {
    id: number
    label: string
    path: string
    isRedirect: boolean
}
export const NAVIGATES: INavigate[] = [
    { id: 1, label: 'Home', path: '/', isRedirect: false },
    { id: 2, label: 'About', path: '/about', isRedirect: false },
    { id: 3, label: 'Progress', path: '/progress', isRedirect: false },
    { id: 4, label: 'Project', path: '/project', isRedirect: false },
    {
        id: 5,
        label: 'Contact',
        path: 'https://github.com/duongcao04',
        isRedirect: true,
    },
]
