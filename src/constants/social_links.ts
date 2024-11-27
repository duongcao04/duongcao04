interface ISocialLink {
    id: number
    label: string
    username: string
    path: string
    icon: string
    isRedirect?: boolean
}
export const SOCIAL_LINKS: ISocialLink[] = [
    {
        id: 1,
        label: 'Github',
        username: '@duongcao04',
        path: 'https://github.com/duongcao04',
        icon: 'tabler:brand-github-filled',
        isRedirect: true,
    },
    {
        id: 2,
        label: 'Mail',
        username: 'contact@yangis.dev',
        path: 'mailto:contact@yangis.dev',
        icon: 'tabler:mail-filled',
    },
    {
        id: 3,
        label: 'LinkedIn',
        username: '@caohaiduong',
        path: '#',
        icon: 'akar-icons:linkedin-fill',
        isRedirect: true,
    },
]
