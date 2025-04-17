import React from 'react'

import { Button } from '@heroui/react'

import envConfig from '@/config/config'

import { Post } from '../../../../../../../models/Post'

async function fetchPosts() {
    try {
        const res = await fetch(
            `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/posts`,
            {
                // Add cache and revalidation options
                cache: 'no-store', // or use { next: { revalidate: 60 } } for ISR
            }
        )

        if (!res.ok) {
            throw new Error(`Failed to fetch posts: ${res.status}`)
        }

        return res.json()
    } catch (error) {
        console.error('Error fetching posts:', error)
        return []
    }
}

type Props = {
    slug: string
}
export default async function RelatedPosts({ slug }: Props) {
    const posts: Post[] = (await fetchPosts()) || []

    if (!posts.length) {
        return <div className="p-4 text-center">No posts found</div>
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h2>Related Posts</h2>
                <Button>All posts</Button>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {posts.map((post, index) => (
                    <RelatedPostCard data={post} key={index} />
                ))}
            </div>
        </>
    )
}
function RelatedPostCard({ data }: { data: any }) {
    return <div></div>
}
