'use client'

import React, { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export const InfiniteMovingCards = ({
    children,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    classNames,
}: {
    children: React.ReactNode
    direction?: 'left' | 'right'
    speed?: 'fast' | 'normal' | 'slow'
    pauseOnHover?: boolean
    classNames?: {
        divWrapper?: string
        listWrapper?: string
    }
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const scrollerRef = React.useRef<HTMLUListElement>(null)

    useEffect(() => {
        addAnimation()
    }, [])
    const [start, setStart] = useState(false)
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem)
                }
            })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'left') {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'forwards'
                )
            } else {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'reverse'
                )
            }
        }
    }
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '20s'
                )
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '40s'
                )
            } else {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '80s'
                )
            }
        }
    }
    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
                classNames?.divWrapper
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
                    start && 'animate-scroll ',
                    pauseOnHover && 'hover:[animation-play-state:paused]',
                    classNames?.listWrapper
                )}
            >
                {children}
            </ul>
        </div>
    )
}
