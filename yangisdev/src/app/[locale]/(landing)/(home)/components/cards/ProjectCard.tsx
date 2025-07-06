'use client'

import { Image } from 'antd'

import { Link } from '@/i18n/navigation'
import { formatWorkingTime } from '@/lib/formatTime'
import { MotionDiv, MotionP, MotionSpan } from '@/lib/motion'
import { Project } from '@/types/projects'

export default function ProjectCard({ data }: { data: Project }) {
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
            <MotionDiv className="block w-full aspect-[2/1] rounded-xl overflow-hidden border border-border">
                <MotionDiv
                    variants={imageVariant}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="size-full rounded-xl"
                >
                    <Image
                        src={data.thumbnail}
                        alt={`${data.name} thumbnail`}
                        className="size-full object-cover rounded-xl"
                    />
                </MotionDiv>
            </MotionDiv>
            <div className="mt-2 desktop:mt-4 w-fit">
                <Link
                    href={`/work/${data.slug}`}
                    className="text-lg desktop:text-2xl font-lexendDeca font-light inline-block p-1 group-hover:text-primary transition duration-300"
                >
                    <MotionSpan variants={titleVariant}>{data.name}</MotionSpan>
                </Link>
                <MotionDiv
                    variants={lineVariant}
                    transition={{ duration: 0.4 }}
                    className={'h-[2.5px] bg-primary'}
                />
                <MotionP
                    variants={dateVariant}
                    className="mt-2 text-sm desktop:text-lg font-lexendDeca font-extralight tracking-wide uppercase"
                >
                    {formatWorkingTime(data.startedAt!, data.completedAt!)}
                </MotionP>
            </div>
        </MotionDiv>
    )
}
