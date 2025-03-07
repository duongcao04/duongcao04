import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { PROJECTS, type Project } from '@/data/projects'
import { MotionDiv, MotionP, MotionSpan } from '@/lib/motion'

import SectionTag from '../section-tag'

export default function WorkSection() {
    return (
        <>
            <SectionTag title="Work" seeMore href="/work" />
            <div className="mt-5 flex flex-col tablet:grid tablet:grid-cols-2 gap-8">
                {PROJECTS.map((project, index) => (
                    <WorkCard key={index} data={project} />
                ))}
            </div>
        </>
    )
}

function formatWorkingTime(startedAt?: string, endedAt?: string) {
    if (startedAt && endedAt) {
        return `${startedAt} - ${endedAt}`
    }
    if (!endedAt) {
        return `Since ${startedAt}`
    }
    if (!startedAt) {
        return `Until ${endedAt}`
    }
    return 'Present'
}
function WorkCard({ data }: { data: Project }) {
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
                href={`/work/${data.slug}`}
                className="block w-full aspect-[2/1] rounded-xl overflow-hidden border border-border"
            >
                <MotionDiv
                    variants={imageVariant}
                    transition={{ delay: 0.1, duration: 0.3 }}
                >
                    <Image
                        src={data.thumbnail}
                        alt={`${data.name} thumbnail`}
                        className="w-full h-full object-cover rounded-xl"
                        quality={100}
                    />
                </MotionDiv>
            </Link>
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
                    {formatWorkingTime(data.started_at, data.ended_at)}
                </MotionP>
            </div>
        </MotionDiv>
    )
}
