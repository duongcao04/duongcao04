'use client'

import { useQuery } from '@tanstack/react-query'

import { postOptions, postsListOptions } from './options/post-queries'

export const usePosts = () => {
    const { data, isFetching, isLoading } = useQuery({ ...postsListOptions() })
    return {
        posts: data,
        isLoading: isFetching || isLoading,
    }
}

export const usePostDetail = (slug: string) => {
    const { data, isFetching, isLoading } = useQuery({ ...postOptions(slug) })
    return {
        post: data,
        isLoading: isFetching || isLoading,
    }
}
