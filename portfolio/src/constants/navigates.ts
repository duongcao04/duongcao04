export type Navigate = {
    id: number
    enLabel: string
    viLabel: string
    path: string
}
export const NAVIGATES: Navigate[] = [
    { id: 1, enLabel: 'Work', viLabel: 'Dự án', path: '/work' },
    { id: 2, enLabel: 'Source code', viLabel: 'Source code', path: '/work' },
    {
        id: 3,
        enLabel: 'Collection',
        viLabel: 'Bộ sưu tập',
        path: '/collection',
    },
    { id: 4, enLabel: 'Writing', viLabel: 'Bài viết', path: '/blog' },
    { id: 5, enLabel: 'Info', viLabel: 'Thông tin', path: '/info' },
]
