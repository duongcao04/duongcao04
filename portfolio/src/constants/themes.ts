export type Theme = {
    label: string
    icon: string
    value: string
}
export const THEMES: Theme[] = [
    { label: 'Light', icon: 'tabler:sun-filled', value: 'light' },
    { label: 'Dark', icon: 'tabler:moon-filled', value: 'dark' },
    {
        label: 'System',
        icon: 'material-symbols:brightness-auto',
        value: 'system',
    },
]
