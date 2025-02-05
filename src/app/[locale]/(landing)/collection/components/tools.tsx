import React from 'react'

import { TOOLS } from '@/data/tools'

import ToolCard from './tool-card'

function Tools() {
    return (
        <ul className="desktop:grid desktop:grid-cols-3 desktop:gap-8 space-y-8 desktop:space-y-0">
            {TOOLS.map((item) => (
                <li key={item.id}>
                    <ToolCard data={item} />
                </li>
            ))}
        </ul>
    )
}

export default Tools
