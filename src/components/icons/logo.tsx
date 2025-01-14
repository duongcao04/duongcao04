import React from 'react'

import Link from 'next/link'

import { cn } from '@/lib/utils'

const Logo = ({
    color = 'var(--primary)',
    className,
    ...otherProps
}: {
    className?: string
    color?: string
}) => {
    return (
        <Link href={'/'} title="Go home">
            <p
                style={{ color: color }}
                className={cn('font-logo tracking-widest', className)}
                {...otherProps}
            >
                Yangis
            </p>
        </Link>
    )
}

export default Logo
