import * as React from 'react'

import Link from 'next/link'

import Logo from '@/components/icons/logo'
import { ResumeIcon } from '@/components/icons/resume-icon'
import Navbar from '@/components/layout/header/navbar'

import { MotionButton } from '@/lib/motion'

import tailwindConfig from '../../../../tailwind.config'

function MyResume() {
    return (
        <MotionButton className="p-2 rounded-full hover:bg-primary-100">
            <Link href={'/my-resume'}>
                <ResumeIcon
                    width={40}
                    height={40}
                    color={tailwindConfig.theme.extend.colors.primary.DEFAULT}
                />
            </Link>
        </MotionButton>
    )
}

export default function Header() {
    return (
        <header className="container backdrop-blur-md shadow-square rounded-[10px]">
            <div className="h-[60px] grid grid-cols-[56px_1fr_44px] place-items-center">
                <MyResume />
                <Logo />
                <Navbar />
            </div>
        </header>
    )
}
