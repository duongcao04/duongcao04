import * as React from 'react'

import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

import Logo from '@/components/icons/logo'
import Navbar from '@/components/layout/header/navbar'

import { MotionButton } from '@/lib/motion'

function MyResume() {
    return (
        <MotionButton className="p-2 rounded-full hover:bg-primary-100">
            <Link href={'/my-resume'}>
                <Icon
                    icon="mdi:resume"
                    fontSize={40}
                    className="text-primary"
                />
            </Link>
        </MotionButton>
    )
}

export default function Header() {
    return (
        <header className="container backdrop-blur-md shadow-square rounded-[10px]">
            <div className="h-[60px] flex items-center justify-between gap-5">
                <MyResume />
                <Logo />
                <Navbar />
            </div>
        </header>
    )
}
