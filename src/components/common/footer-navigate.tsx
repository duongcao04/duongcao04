import * as React from 'react'

import Link from 'next/link'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

import { Button } from '@/components/ui/button'

import { MotionDiv } from '@/lib/motion'

export default function FooterNavigate({
    previousPage = '/',
    nextPage,
}: {
    previousPage?: string
    nextPage?: string
}) {
    return (
        <MotionDiv className="flex items-center justify-center gap-[1px]">
            <MotionDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <Button
                    className={`${nextPage ? 'rounded-r-none' : 'rounded-full'} size-[51px] shadow-none`}
                    asChild
                >
                    <Link href={previousPage}>
                        <FaArrowLeft size={24} />
                    </Link>
                </Button>
            </MotionDiv>
            {nextPage && (
                <MotionDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                    <Button
                        className="rounded-l-none size-[51px] shadow-none"
                        asChild
                    >
                        <Link href={nextPage}>
                            <FaArrowRight size={24} />
                        </Link>
                    </Button>
                </MotionDiv>
            )}
        </MotionDiv>
    )
}
