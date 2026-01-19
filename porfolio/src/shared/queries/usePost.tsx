'use client'

import { useQuery } from '@tanstack/react-query'

import { postQueries } from './options/post-queries'

export const usePosts = () => {
    const { data, isFetching, isLoading } = useQuery({ ...postQueries.list() })
    return {
        posts: data,
        isLoading: isFetching || isLoading,
    }
}

export const usePostDetail = (slug: string) => {
    const { data, isFetching, isLoading } = useQuery({
        ...postQueries.detail(slug),
    })
    return {
        post: data,
        isLoading: isFetching || isLoading,
    }
}
