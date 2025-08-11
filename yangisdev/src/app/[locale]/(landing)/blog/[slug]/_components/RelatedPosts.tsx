import React from 'react'

import { Button } from '@heroui/react'
import { Image } from 'antd'
import Link from 'next/link'

import { Post } from '@/types/article'
import { calculateFromDateToNow } from '@/utils/calc-function'

type Props = {
    slug: string
}
export default async function RelatedPosts({ slug }: Props) {
    const posts: Post[] = []

    // Filter out the current post and get related posts
    const relatedPosts = posts.filter((post) => post.slug !== slug).slice(0, 4)

    if (!relatedPosts.length) {
        return <div className="p-4 text-center">No related posts found</div>
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h2>Related Posts</h2>
                <Button>All posts</Button>
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-3">
                {relatedPosts.map((post, index) => (
                    <RelatedPostCard data={post} key={post.id || index} />
                ))}
            </div>
        </>
    )
}
function RelatedPostCard({ data }: { data: Post }) {
    return (
        <Link href={`/blog/${data.slug}`} className="group block w-full">
            <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <Image
                    src={data.thumbnail}
                    alt={`${data.title} thumbnail`}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    preview={false}
                />
            </div>
            <div className="mt-2">
                <h3 className="text-lg font-lexendDeca font-light group-hover:text-primary transition duration-300">
                    {data.title}
                </h3>
                <p className="mt-1 text-sm uppercase font-lexendDeca font-extralight tracking-wide">
                    {calculateFromDateToNow(data.createdAt)}
                </p>
            </div>
        </Link>
    )
}
