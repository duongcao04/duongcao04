import * as React from 'react'

import Logo from '@/components/icons/logo'

import Navbar from './navbar'
import SocialNavigate from './social-navigate'

export default function Header() {
    return (
        <header className="border-b-2 border-slate-300 bg-[#ececea]">
            <div className="container grid grid-cols-[1fr_86px_1fr] gap-20 items-center">
                <div className="flex justify-start">
                    <Navbar />
                </div>
                <Logo className="text-3xl py-5" />
                <div className="flex justify-end">
                    <SocialNavigate />
                </div>
            </div>
        </header>
    )
}
