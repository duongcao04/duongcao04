'use client'

import * as React from 'react'
import Logo from '@/components/icons/logo'
import { MenuButton } from '../../ui/menu-button'
import Navbar from './navbar'
import CustomizeDialog from '../../common/customize-dialog'

export default function Header() {
    const [isOpen, setOpen] = React.useState(false)

    return (
        <header className="container">
            <div className="flex items-center justify-between gap-5">
                <Logo />
                <CustomizeDialog
                    trigger={
                        <MenuButton
                            isOpen={isOpen}
                            onClick={() => setOpen(!isOpen)}
                        />
                    }
                >
                    <Navbar />
                </CustomizeDialog>
            </div>
        </header>
    )
}
