'use client'

import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import NavbarDialog from '@/components/dialogs/navbar-dialog'
import { MenuButton } from '@/components/ui/menu-button'

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
        <>
            <MenuButton
                isOpen={isOpen}
                onClick={() => setOpen(!isOpen)}
                color={buttonColor}
            />
            <NavbarDialog isOpen={isOpen} setOpen={setOpen} />
        </>
    )
}

export default FloatingNavbar
