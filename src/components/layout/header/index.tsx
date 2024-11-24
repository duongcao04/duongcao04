import * as React from 'react'
import Navbar from './navbar'
import Logo from '@/components/icons/logo'

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
