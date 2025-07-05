export type TMenuItem = {
    id: number
    title: string
    path: string
    icon: string
}
export type TSidebarNavigate = {
    id: number
    isGroup: boolean
    groupTitle?: string
    groupIcon?: string
    groupPath?: string
    menus?: TMenuItem[]
}
// copilot: abc
export const SIDEBAR_NAVIGATE: TSidebarNavigate[] = [
    {
        id: 1,
        isGroup: true,
    },
]
