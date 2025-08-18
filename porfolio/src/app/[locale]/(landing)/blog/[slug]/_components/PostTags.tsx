import React from 'react'

import { Chip } from '@heroui/react'

export default function PostTags() {
    return (
        <div className="flex items-center justify-start gap-5">
            <p className="text-xl font-semibold">Post Tags:</p>
            <ul className="flex items-center justify-start gap-3 flex-wrap">
                {['#Useful', '#Website', '#Coding', '#Technology'].map(
                    (tag, index) => (
                        <li key={index}>
                            <Chip
                                classNames={{
                                    base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
                                    content:
                                        'drop-shadow shadow-black text-white',
                                }}
                                size="lg"
                                variant="shadow"
                            >
                                {tag}
                            </Chip>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}
