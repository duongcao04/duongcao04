import { queryOptions } from '@tanstack/react-query'

import { PostService } from '@/lib/firebase/services'

export const postsListOptions = () =>
    queryOptions({
        queryKey: ['posts'],
        queryFn: () => PostService.getAll(),
        select: (res) => {
            return {
                posts: res || [],
            }
        },
    })

export const postOptions = (slug: string) =>
    queryOptions({
        queryKey: ['posts', slug],
        queryFn: () => PostService.getDetail(slug),
        select: (res) => ({
            post: res,
        }),
    })
