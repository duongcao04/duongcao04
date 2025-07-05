import React from 'react'

function ToolTag({
    title,
    color = '#e3283e',
}: {
    title: string
    color?: string
}) {
    return (
        <div
            style={{ borderColor: color }}
            className="w-fit rounded-md py-1 px-2 text-xs border"
        >
            {title}
        </div>
    )
}

export default ToolTag
