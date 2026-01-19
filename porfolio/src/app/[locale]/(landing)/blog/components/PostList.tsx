import { Spinner } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'

import { postsListOptions } from '@/shared/queries'

import PostCard from './cards/PostCard'

export default function PostList() {
    const { data, isLoading } = useQuery({ ...postsListOptions() })
    const posts = data?.posts || []

    if (isLoading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        )
    }

    if (!posts.length) {
        return <div className="p-4 text-center">No posts found</div>
    }

    return (
        <div className="space-y-4">
            {posts.map((post, index) => (
                <PostCard key={post.id || index} data={post} />
            ))}
        </div>
    )
}
