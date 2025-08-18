'use client'

import { Variants } from 'framer-motion'
import { useLocale } from 'next-intl'

import ButtonLink from '@/components/common/ButtonLink'

import { NAVIGATES } from '@/constants/appConstants'
import { SupportLanguages } from '@/i18n/routing'
import { MotionDiv } from '@/lib/motion'

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

function AppNavigate() {
    const locale = useLocale()

    return (
        <nav className="flex items-center justify-between">
            <div className="flex items-center justify-start">
                {NAVIGATES.map((nav, idx) => {
                    const label = nav[`${locale as SupportLanguages}Label`]

                    return (
                        <MotionDiv
                            key={nav.id}
                            variants={navItemVariant}
                            custom={idx}
                            initial="init"
                            animate="animate"
                        >
                            <ButtonLink
                                href={nav.path}
                                classNames={{
                                    link: `block px-6 py-3 font-medium hover:text-primary-600 transition duration-200`,
                                    bottomLine: 'h-[2px]',
                                }}
                            >
                                {label}
                            </ButtonLink>
                        </MotionDiv>
                    )
                })}
            </div>
        </nav>
    )
}

export default AppNavigate
