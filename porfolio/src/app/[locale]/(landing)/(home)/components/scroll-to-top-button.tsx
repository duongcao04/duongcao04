'use client'

import React from 'react'

import ArrowUp from '@/components/icons/arrow-up'

import { MotionButton } from '@/lib/motion'

function ScrollToTopButton() {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <MotionButton
            className="w-fit flex items-center justify-center gap-2 font-preahvihear"
            onClick={() => {
                handleClick()
            }}
        >
            <p className="text-xl">Go to top</p>
            <ArrowUp width={24} height={24} />
        </MotionButton>
    )
}

export default ScrollToTopButton
