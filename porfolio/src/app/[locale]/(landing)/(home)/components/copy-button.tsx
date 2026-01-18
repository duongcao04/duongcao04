'use client'

import React from 'react'

import Copy from '@/shared/components/icons/copy'

import { MotionButton } from '@/lib/motion'

function CopyButton({ text }: { text: string }) {
    const hanldeCopy = () => {
        navigator.clipboard.writeText(text)
    }
    return (
        <MotionButton
            className="size-[30px]"
            onClick={() => {
                hanldeCopy()
            }}
        >
            <Copy className="w-full h-full" />
        </MotionButton>
    )
}

export default CopyButton
