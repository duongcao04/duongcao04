'use client'

import * as React from 'react'
import Logo from '../molecules/Logo'
import Navbar from '../molecules/Navbar'

export default function Header() {
    const BORDER_CHANGE_BREAKPOINT_IN_PX = 20
    const [isShowBorder, setIsShowBorder] = React.useState(false)

    React.useEffect(() => {
        const onScroll = () => {
            if (window.innerWidth > BORDER_CHANGE_BREAKPOINT_IN_PX) {
                setIsShowBorder(true)
            } else {
                setIsShowBorder(false)
            }
        }

        window.addEventListener('scroll', onScroll)
    }, [])

    return (
        <div className="py-8">
            <div
                className={`w-navbar h-navbar mx-auto pr-6 pl-4 flex items-center justify-between backdrop-blur-[20px] rounded-[20px] border-[2px] border-transparent ${
                    isShowBorder && 'border-border'
                }`}
            >
                <Logo />
                <Navbar />
            </div>
        </div>
    )
}
