import React from 'react'

import Link from 'next/link'

import { MotionP } from '@/lib/motion'

const Logo = () => {
    return (
        <Link href={'/'} title="Go home">
            <MotionP
                className="text-xl font-bold text-primary py-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                Duong Cao
            </MotionP>
        </Link>
    )
}

export default Logo
