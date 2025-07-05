import { Image } from 'antd'
import Link from 'next/link'

import { MotionDiv, MotionP, MotionSpan } from '@/lib/motion'
import { Post } from '@/types/post'
import { calculateFromDateToNow } from '@/utils/calc-function'

export default function PostCard({ data }: { data: Post }) {
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
                href={`/blog/${data.slug}`}
                className="block w-full aspect-video rounded-xl overflow-hidden border border-border"
            >
                <MotionDiv
                    variants={imageVariant}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <Image
                        src={data.thumbnail}
                        alt={`${data.title} thumbnail`}
                        className="w-full h-full object-cover rounded-xl aspect-video"
                        wrapperClassName="w-full h-full"
                        preview={false}
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
                    {calculateFromDateToNow(data.createdAt ?? '')}
                </MotionP>
            </div>
        </MotionDiv>
    )
}
