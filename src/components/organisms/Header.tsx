import * as React from 'react'
import Logo from '../molecules/Logo'
import Navbar from '../molecules/Navbar'

export default function Header() {
    return (
        <div className="py-8">
            <div className="w-navbar h-navbar mx-auto pr-6 pl-4 flex items-center justify-between">
                <Logo />
                <Navbar />
            </div>
        </div>
    )
}
