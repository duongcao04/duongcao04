import * as React from 'react'
import Logo from '@/components/icons/logo'
import Navbar from '@/components/layout/header/navbar'

export default function Header() {
    return (
        <header className="container">
            <div className="flex items-center justify-between gap-5">
                <Logo />
                <Navbar />
            </div>
        </header>
    )
}
