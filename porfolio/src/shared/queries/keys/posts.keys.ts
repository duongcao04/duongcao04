export const postKeys = {
    all: ['posts'] as const,
    lists: () => [...postKeys.all, 'list'] as const,
    list: (filters: PostFilters) => [...postKeys.lists(), filters] as const,
    details: () => [...postKeys.all, 'detail'] as const,
    detail: (slug: string) => [...postKeys.details(), slug] as const,
}

export type PostFilters = {
    search?: string
    catalog?: string // Filter by Catalog Name (e.g. "tech")
    tag?: string // Filter by Tag Code (e.g. "nextjs")
    page?: number
    pageSize?: number
}
