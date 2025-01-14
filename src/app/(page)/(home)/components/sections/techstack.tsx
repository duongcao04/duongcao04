import React from 'react'

import { DATABASES, TECHNOLOGIES, TOOLS } from '@/constants/techstack-list'
import { MotionH2, MotionH3 } from '@/lib/motion'

function Technologies() {
    const combineTools = [...DATABASES, ...TOOLS]

    return (
        <div className="space-y-14">
            <ul className="flex items-center justify-center gap-8">
                {combineTools.map((item) => (
                    <li key={item.id} className="size-[64px]">
                        <item.logo className="w-full h-full" />
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center gap-8">
                {TECHNOLOGIES.map((item) => (
                    <li key={item.id} className="size-[64px]">
                        <item.logo className="w-full h-full" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

function TechStack() {
    return (
        <div className="mt-5 flex flex-col items-center">
            <MotionH2 className="text-center font-preahvihear">
                Technologies and skills
            </MotionH2>
            <MotionH3 className="text-center mt-4 leading-relaxed tracking-wide max-w-[700px]">
                {`I'm currently looking to join a cross-functional team that
                    values improving people's lives through accessible design`}
            </MotionH3>
            <div className="mt-11">
                <Technologies />
            </div>
        </div>
    )
}

export default TechStack
