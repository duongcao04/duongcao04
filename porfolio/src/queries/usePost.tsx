'use client'

import { useQuery } from '@tanstack/react-query'

import { axiosClient } from '@/lib/axios'

export const usePosts = () => {
    const { data, isFetching, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: () => axiosClient.get('/posts'),
        select: (res) => res?.data,
    })
    return {
        posts: data,
        isLoading: isFetching || isLoading,
    }
}

export const usePostDetail = (slug?: string) => {
    const { data, isFetching, isLoading } = useQuery({
        queryKey: ['posts', 'slug', slug],
        queryFn: () => {
            if (!slug) {
                return undefined
            }
            return axiosClient.get(`/posts/slug/${slug}`)
        },
        enabled: !!slug,
        select: (res) => res?.data,
    })
    return {
        post: data,
        isLoading: isFetching || isLoading,
    }
}
