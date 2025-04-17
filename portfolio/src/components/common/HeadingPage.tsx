import React from 'react'

import { MotionH1 } from '@/lib/motion'

function HeadingPage({ title }: { title: string }) {
    return (
        <div className="w-full h-[300px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 flex items-center justify-center">
            <MotionH1 className="text-3xl">{title}</MotionH1>
        </div>
    )
}

export default HeadingPage
