import React from 'react'

import Link from 'next/link'

import { SOCIAL_LINKS } from '@/constants/social_links'

function SocialNavigate() {
    return (
        <ul className="flex items-center justify-start [&>:not(:last-child)]:after:content-['/'] [&>:not(:last-child)]:after:mx-3">
            {SOCIAL_LINKS.map((item) => (
                <li key={item.id}>
                    <Link href={item.path} className="font-medium">
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SocialNavigate
