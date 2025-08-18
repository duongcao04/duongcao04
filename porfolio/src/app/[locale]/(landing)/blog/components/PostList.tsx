import React from 'react'

import { Spinner } from '@heroui/react'

import { useFirebaseData } from '@/hooks/useFirebase'

import { Post } from '@/types/article'

import PostCard from './cards/PostCard'

export default function PostList() {
    const { data: allPosts, loading } = useFirebaseData<Post>('posts')

    if (loading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        )
    }

    if (!allPosts.length) {
        return <div className="p-4 text-center">No posts found</div>
    }

    return (
        <div className="space-y-4">
            {allPosts.map((post, index) => (
                <PostCard key={post.id || index} data={post} />
            ))}
        </div>
    )
}
