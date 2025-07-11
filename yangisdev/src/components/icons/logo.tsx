import React from 'react'

import Link from 'next/link'

import { appName } from '@/constants/appConstants'
import { MotionButton } from '@/lib/motion'
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
        <MotionButton whileTap={{ scale: 0.95 }}>
            <Link
                href={'/'}
                title="Go home"
                style={{ color: color }}
                className={cn('font-logo tracking-widest', className)}
                {...otherProps}
            >
                {appName}
            </Link>
        </MotionButton>
    )
}

export default Logo
