'use client'

import { useEffect, useState } from 'react'

import { Skeleton } from '@heroui/react'

export default function VietnamClock() {
    const [time, setTime] = useState<Date | null>(null)

    useEffect(() => {
        const updateTime = () => {
            setTime(new Date())
        }

        updateTime() // Set initial time
        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    if (!time) return <Skeleton className="w-52 h-10 rounded-xl" />

    const vietnamTime = new Date(time.getTime() + 7 * 60 * 60 * 1000)
    const hours = vietnamTime.getUTCHours().toString().padStart(2, '0')
    const minutes = vietnamTime.getUTCMinutes().toString().padStart(2, '0')
    const seconds = vietnamTime.getUTCSeconds().toString().padStart(2, '0')

    return (
        <div className="flex flex-col items-end">
            <p className="text-sm font-medium text-text-secondary">
                Ho Chi Minh City, Viet Nam
            </p>
            <div className="-mt-[2px] text-base font-bold tracking-wider">
                {hours}:{minutes}:{seconds}
            </div>
        </div>
    )
}
