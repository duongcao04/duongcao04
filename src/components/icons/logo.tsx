'use client'

import { motion, MotionProps } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export interface LogoProps extends React.HTMLProps<HTMLParagraphElement> {
    motion?: MotionProps
}

const Logo: React.FC<LogoProps> = (props) => {
    return (
        <Link href={'/'} title="Go home">
            <motion.p
                {...props}
                className="text-xl font-bold text-primary py-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                Duong Cao
            </motion.p>
        </Link>
    )
}

export default Logo
