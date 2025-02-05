import Link from 'next/link'
import { HiLanguage } from 'react-icons/hi2'

import Logo from '@/components/icons/logo'

import { MotionButton, MotionDiv } from '@/lib/motion'

import AppNavigate from './app-navigate'
import FloatingNavbar from './floating-navbar'
import VietnamClock from './vietnam-clock'

export default function Header() {
    return (
        <MotionDiv className="container w-full h-20 desktop:grid desktop:grid-cols-navbar flex justify-between gap-8 items-center">
            <Logo className="text-3xl" />

            <div className="hidden desktop:block ml-2">
                <AppNavigate />
            </div>

            <div className="hidden desktop:block">
                <div className="flex items-center justify-end gap-5">
                    <VietnamClock />
                    <div className="mx-3 w-[2px] h-5 bg-border" />
                    <MotionButton className="px-6 py-3 rounded-xl border border-border">
                        <HiLanguage size={20} />
                    </MotionButton>
                    <MotionButton className="px-8 py-3 rounded-xl border border-border bg-primary hover:bg-primary-700 transition duration-200 text-white">
                        <Link href={'https://www.facebook.com/hyang.309'}>
                            Contact
                        </Link>
                    </MotionButton>
                </div>
            </div>

            <div className="block desktop:hidden">
                <FloatingNavbar />
            </div>
        </MotionDiv>
    )
}
