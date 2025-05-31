import { useTranslations } from 'next-intl'
import Link from 'next/link'

import Logo from '@/components/icons/logo'

import { MotionButton, MotionDiv } from '@/lib/motion'

import LanguageToggle from './LanguageToggle'
import AppNavigate from './app-navigate'
import FloatingNavbar from './floating-navbar'
import VietnamClock from './vietnam-clock'

export default function Header() {
    const tLayout = useTranslations('app.layout')

    return (
        <MotionDiv className="container w-full h-20 2xl:grid 2xl:grid-cols-navbar flex justify-between gap-8 items-center">
            <Logo className="text-3xl" />

            <div className="hidden 2xl:block ml-2">
                <AppNavigate />
            </div>

            <div className="hidden 2xl:block">
                <div className="flex items-center justify-end gap-5">
                    <div className="flex flex-col items-end">
                        <p className="text-sm font-medium text-text-secondary">
                            {tLayout('region')}
                        </p>
                        <VietnamClock />
                    </div>
                    <div className="mx-3 w-[2px] h-5 bg-border" />
                    <LanguageToggle />
                    <MotionButton className="px-8 py-3 rounded-xl border border-border bg-primary hover:bg-primary-700 transition duration-200 text-white">
                        <Link href={'https://www.facebook.com/hyang.309'}>
                            Contact
                        </Link>
                    </MotionButton>
                </div>
            </div>

            <div className="block 2xl:hidden">
                <FloatingNavbar />
            </div>
        </MotionDiv>
    )
}
