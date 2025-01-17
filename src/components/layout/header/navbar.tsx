'use client'

import { useEffect, useState } from 'react'

import Logo from '@/components/icons/logo'

import { MotionDiv } from '@/lib/motion'

import AppNavigate from './app-navigate'
import FloatingNavbar from './floating-navbar'
import SocialNavigate from './social-navigate'

function Navbar() {
    const [isAside, setAside] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () =>
                setAside(window.scrollY > 80)
            )
        }
    }, [])

    /**
     * motion variants
     */
    const navigateVariant = {
        init: {
            y: 0,
            opacity: 1,
        },
        onMove: {
            y: -100,
            opacity: 0,
        },
    }
    const logoVariant = {
        init: { x: 0, opacity: 0 },
        onMove: { x: -120, opacity: 1, zIndex: 0 },
    }
    const buttonVariant = {
        init: { x: 0, opacity: 0 },
        onMove: { x: 120, opacity: 1 },
    }

    return (
        <MotionDiv className="w-full grid grid-cols-navbar h-[80px] backdrop-blur-sm">
            {isAside ? (
                <MotionDiv
                    variants={logoVariant}
                    initial="init"
                    animate={isAside ? 'onMove' : 'init'}
                    transition={{ delay: 0.02 }}
                    className="flex items-center justify-end"
                >
                    <Logo className="text-3xl" />
                </MotionDiv>
            ) : (
                <div></div>
            )}

            <MotionDiv
                variants={navigateVariant}
                initial="init"
                animate={isAside ? 'onMove' : 'init'}
                className="p-4 h-full grid grid-cols-[1fr_86px_1fr] gap-20 items-center"
            >
                <div className="flex justify-start">
                    <AppNavigate />
                </div>
                <Logo className="text-3xl" />
                <div className="flex justify-end">
                    <SocialNavigate />
                </div>
            </MotionDiv>

            {isAside ? (
                <MotionDiv
                    variants={buttonVariant}
                    initial="init"
                    animate={isAside ? 'onMove' : 'init'}
                    transition={{ delay: 0.02 }}
                    className="flex items-center justify-start"
                >
                    <FloatingNavbar />
                </MotionDiv>
            ) : (
                <div></div>
            )}
        </MotionDiv>
    )
}

export default Navbar
