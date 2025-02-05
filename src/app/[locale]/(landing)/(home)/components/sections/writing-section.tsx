import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { POSTS, type Post } from '@/data/posts'
import { MotionDiv, MotionP, MotionSpan } from '@/lib/motion'
import { calculateFromDateToNow } from '@/utils/calc-function'

import SectionTag from '../section-tag'

export default function WritingSection() {
    return (
        <>
            <SectionTag title="Writing" seeMore />
            <div className="mt-5 flex flex-col tablet:grid tablet:grid-cols-2 gap-8">
                {POSTS.map((post) => (
                    <PostCard key={post.id} data={post} />
                ))}
            </div>
        </>
    )
}

function PostCard({ data }: { data: Post }) {
    const lineVariant = {
        initial: {
            width: 0,
        },
        animate: {
            width: '100%',
        },
    }

    const imageVariant = {
        initial: {
            scale: 1,
        },
        animate: {
            scale: 1.05,
        },
    }

    const titleVariant = {
        initial: {
            color: 'var(--primary-text)',
        },
        animate: {
            color: 'var(--primary)',
        },
    }

    const dateVariant = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
    }

    return (
        <MotionDiv
            initial="initial"
            animate="initial"
            whileHover="animate"
            className="w-full"
        >
            <Link
                href={`/writing/${data.slug}`}
                className="block w-full aspect-video rounded-xl overflow-hidden border border-border"
            >
                <MotionDiv
                    variants={imageVariant}
                    transition={{ delay: 0.1, duration: 0.3 }}
                >
                    <Image
                        src={data.thumbnail}
                        alt={`${data.title} thumbnail`}
                        className="w-full h-full object-cover rounded-xl"
                        quality={100}
                        width={416}
                        height={416}
                    />
                </MotionDiv>
            </Link>
            <div className="mt-2 desktop:mt-4 w-fit">
                <Link
                    href={`/work/${data.slug}`}
                    className="text-lg desktop:text-2xl font-lexendDeca font-light inline-block p-1 group-hover:text-primary transition duration-300"
                >
                    <MotionSpan variants={titleVariant}>
                        {data.title}
                    </MotionSpan>
                </Link>
                <MotionDiv
                    variants={lineVariant}
                    transition={{ duration: 0.4 }}
                    className={'h-[2.5px] bg-primary'}
                />
                <MotionP
                    variants={dateVariant}
                    className="mt-2 text-sm desktop:text-lg uppercase font-lexendDeca font-extralight tracking-wide"
                >
                    {calculateFromDateToNow(data.createdAt)}
                </MotionP>
            </div>
        </MotionDiv>
    )
}
