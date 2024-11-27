'use client'

import React from 'react'
import { MenuButton } from '@/components/ui/menu-button'
import NavbarDialog from '@/components/dialogs/navbar-dialog'

function Navbar() {
    const [isOpen, setOpen] = React.useState(false)
    return (
        <>
            <MenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
            <NavbarDialog isOpen={isOpen} setOpen={setOpen} />
        </>
    )
}

export default Navbar
