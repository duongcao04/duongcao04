import React from 'react'

import { GET } from '@/app/api/posts/route'
import { Post } from '@/models/Post'

import PostCard from './cards/PostCard'

export default async function PostList() {
    const data = await GET()
    const allPosts: Post[] = await data.json()

    if (!allPosts.length) {
        return <div className="p-4 text-center">No posts found</div>
    }

    return (
        <div className="space-y-4">
            {allPosts.map((post, index) => (
                <PostCard key={post._id || index} data={post} />
            ))}
        </div>
    )
}
