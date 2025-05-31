import React from 'react'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { MdArrowForward, MdSubdirectoryArrowRight } from 'react-icons/md'

import { MotionButton } from '@/lib/motion'

function SectionTag({
    title,
    seeMore,
    href,
}: {
    title: string
    seeMore?: boolean
    href?: string
}) {
    const tButton = useTranslations('app.common.button')

    return (
        <div className="flex items-center justify-start gap-1 tracking-wide text-text-secondary">
            <MdSubdirectoryArrowRight size={20} />
            <p className="uppercase font-lexendDeca">{title}</p>
            {seeMore && <p className="mx-2">/</p>}
            {seeMore && (
                <MotionButton className="group underline underline-offset-2 transition duration-250 hover:text-secondary">
                    <Link
                        href={href ?? '#'}
                        className="flex items-center justify-start gap-1 uppercase font-lexendDeca"
                    >
                        {tButton('seeMore')}
                        <MdArrowForward size={17} />
                    </Link>
                </MotionButton>
            )}
        </div>
    )
}

export default SectionTag
