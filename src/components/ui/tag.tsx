import React from 'react'

function Tag({ title = 'Tag' }: { title: string }) {
    return (
        <div className="w-fit px-4 py-1 border border-primary-200 rounded-xl bg-primary-100">
            <p className="text-primary font-semibold">{title}</p>
        </div>
    )
}

export default Tag
