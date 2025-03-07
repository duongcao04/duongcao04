import React from 'react'

import Link, { LinkProps } from 'next/link'

import { MotionButton, MotionDiv } from '@/lib/motion'
import { cn } from '@/lib/utils'

type ButtonLinkProps = LinkProps & {
    children: React.ReactNode
    target?: string
    classNames?: {
        buttonWrapper?: string
        link?: string
        bottomLine?: string
    }
}
export default function ButtonLink({
    children,
    classNames,
    target = '',
    ...otherProps
}: ButtonLinkProps) {
    const lineVariant = {
        hidden: {
            width: 0,
        },
        show: {
            width: '100%',
        },
    }

    return (
        <MotionButton
            initial="hidden"
            animate="hidden"
            whileHover="show"
            className={cn('group', classNames?.buttonWrapper)}
        >
            <Link
                className={cn(
                    'inline-block p-1 group-hover:text-primary transition duration-300',
                    classNames?.link
                )}
                target={target}
                {...otherProps}
            >
                {children}
            </Link>
            <MotionDiv
                variants={lineVariant}
                transition={{ duration: 0.3 }}
                className={cn('h-[2.5px] bg-primary', classNames?.bottomLine)}
            />
        </MotionButton>
    )
}
