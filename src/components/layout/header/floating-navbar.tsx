'use client'

import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import NavbarDialog from '@/components/dialogs/navbar-dialog'
import { MenuButton } from '@/components/ui/menu-button'

import { MotionDiv } from '@/lib/motion'

function FloatingNavbar() {
    const [isOpen, setOpen] = useState(false)
    const { theme, systemTheme } = useTheme()
    const [buttonColor, setButtonColor] = useState<string | undefined>(
        undefined
    )
    useEffect(() => {
        if (theme === 'system') {
            setButtonColor(systemTheme === 'dark' ? '#fff' : '#000')
        } else {
            setButtonColor(theme === 'dark' ? '#fff' : '#000')
        }
    }, [theme, systemTheme])

    return (
        <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full flex justify-center items-center"
        >
            <div>
                <MenuButton
                    isOpen={isOpen}
                    onClick={() => setOpen(!isOpen)}
                    color={buttonColor}
                />
                <NavbarDialog isOpen={isOpen} setOpen={setOpen} />
            </div>
        </MotionDiv>
    )
}

export default FloatingNavbar
