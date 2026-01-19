'use client'

import { Divider } from '@heroui/react'
import { Variants } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { MotionDiv } from '@/lib/motion'
import Logo from '@/shared/components/icons/logo'
import { SOCIAL_NETWORKS } from '@/shared/constants'
import { useDevice } from '@/shared/hooks'

import { HeroButton } from '../../ui/hero-button'
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
    const { isSmallDevice } = useDevice()

    if (isSmallDevice) {
        return <MobileHeader />
    }

    return (
        <MotionDiv className="container relative mx-auto w-full h-20 grid grid-cols-[110px_1fr_500px] gap-8 items-center z-50!">
            <MotionDiv variants={logoVariants} initial="init" animate="animate">
                <Logo className="text-3xl" />
            </MotionDiv>

            <div className="ml-2">
                <AppNavigate />
            </div>

            <div className="flex items-center justify-end gap-5">
                <MotionDiv
                    variants={navItemVariant}
                    custom={0}
                    initial="init"
                    animate="animate"
                    className="flex flex-col items-end"
                >
                    <p className="text-sm font-medium text-text-subdued">
                        {t('region')}
                    </p>
                    <VietnamClock />
                </MotionDiv>

                <Divider className="mx-3 w-px h-5 bg-border-default" />

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
                    <HeroButton
                        href={SOCIAL_NETWORKS['facebook']}
                        color="primary"
                        className="px-8 py-2 rounded-xl"
                        linkProps={{
                            target: '_blank',
                        }}
                    >
                        {tButton('contact')}
                    </HeroButton>
                </MotionDiv>
            </div>
        </MotionDiv>
    )
}

export const MobileHeader = () => {
    return (
        <MotionDiv className="container w-full h-20 flex justify-between gap-8 items-center">
            <MotionDiv variants={logoVariants} initial="init" animate="animate">
                <Logo className="text-3xl" />
            </MotionDiv>

            <FloatingNavbar />
        </MotionDiv>
    )
}
