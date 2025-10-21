'use client'

import { Variants } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import Logo from '@/components/icons/logo'

import { SOCIAL_NETWORKS } from '@/constants/appConstants'
import { MotionDiv } from '@/lib/motion'

import LanguageToggle from './LanguageToggle'
import AppNavigate from './app-navigate'
import FloatingNavbar from './floating-navbar'
import VietnamClock from './vietnam-clock'

const logoVariants: Variants = {
    init: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { delay: 0, type: 'spring', stiffness: 120, damping: 20 },
    },
}

const navItemVariant: Variants = {
    init: {
        opacity: 0,
        y: 20,
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * i,
            type: 'spring',
            stiffness: 120,
            damping: 20,
        },
    }),
}

export default function Header() {
    const t = useTranslations()
    const tButton = useTranslations()

    return (
        <MotionDiv className="container w-full h-20 2xl:grid 2xl:grid-cols-navbar flex justify-between gap-8 items-center">
            <MotionDiv variants={logoVariants} initial="init" animate="animate">
                <Logo className="text-3xl" />
            </MotionDiv>

            <div className="hidden 2xl:block ml-2">
                <AppNavigate />
            </div>

            <div className="hidden 2xl:block">
                <div className="flex items-center justify-end gap-5">
                    <MotionDiv
                        variants={navItemVariant}
                        custom={0}
                        initial="init"
                        animate="animate"
                        className="flex flex-col items-end"
                    >
                        <p className="text-sm font-medium text-text-secondary">
                            {t('region')}
                        </p>
                        <VietnamClock />
                    </MotionDiv>
                    <div className="mx-3 w-[2px] h-5 bg-border" />
                    <MotionDiv
                        variants={navItemVariant}
                        custom={1}
                        initial="init"
                        animate="animate"
                    >
                        <LanguageToggle />
                    </MotionDiv>
                    <MotionDiv
                        variants={navItemVariant}
                        custom={2}
                        initial="init"
                        animate="animate"
                    >
                        <button className="px-8 py-2 rounded-xl border border-border bg-primary hover:bg-primary-700 transition duration-200 text-white">
                            <Link href={SOCIAL_NETWORKS['facebook']}>
                                {tButton('contact')}
                            </Link>
                        </button>
                    </MotionDiv>
                </div>
            </div>

            <div className="block 2xl:hidden">
                <FloatingNavbar />
            </div>
        </MotionDiv>
    )
}
