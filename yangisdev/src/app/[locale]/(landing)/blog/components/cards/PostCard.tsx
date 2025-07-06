import React from 'react'

import { Image } from '@heroui/react'
import Link from 'next/link'

import { MotionH3 } from '@/lib/motion'
import { Post } from '@/types/post'

type Props = {
    data: Post
}
function PostCard({ data: post }: Props) {
    return (
        <div className="flex flex-col gap-4 desktop:grid desktop:grid-cols-[200px_1fr] desktop:gap-10 desktop:items-start p-5 rounded-2xl border-2 border-transparent hover:border-border hover:shadow-square">
            {post.thumbnail ? (
                <Image
                    src={post.thumbnail}
                    alt={post.title}
                    className="h-[200px] desktop:size-[200px] rounded-2xl object-cover"
                />
            ) : (
                <div className="w-full h-[200px] desktop:size-[200px] bg-gradient-to-br from-primary-400 via-primary-600 to-primary-800 rounded-2xl" />
            )}

            <div className="mt-1">
                <p className="uppercase font-semibold tracking-wider opacity-70">
                    {post.title}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-block my-2">
                    <MotionH3 className="py-1 text-2xl font-bold tracking-wide">
                        {post.title}
                    </MotionH3>
                </Link>
                <p className="text-lg leading-relaxed tracking-wide">
                    All of the sites we visit today use trackers called cookies.
                    These cookies (trackers) always track our internet footprint
                    and collect data about us collect data about us.
                </p>
                <p className="mt-3 opacity-70">24 June, 2025</p>
            </div>
        </div>
    )
}

export default PostCard
