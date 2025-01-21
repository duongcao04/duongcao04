import React from 'react'

import { TOOLS } from '@/data/tools'

import ToolCard from './tool-card'

function Tools() {
    return (
        <ul className="grid grid-cols-3 gap-8">
            {TOOLS.map((item) => (
                <li key={item.id}>
                    <ToolCard data={item} />
                </li>
            ))}
        </ul>
    )
}

export default Tools
