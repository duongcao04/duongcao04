'use client'

import React, { useState } from 'react'

import { CgMenuRightAlt } from 'react-icons/cg'

import NavbarDialog from '@/components/dialogs/NavbarDialog'

import { MotionButton, MotionDiv } from '@/lib/motion'

function FloatingNavbar() {
    const [isOpen, setOpen] = useState(false)

    return (
        <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full flex justify-center items-center"
        >
            <div>
                {/* <MenuButton
                    isOpen={isOpen}
                    onClick={() => setOpen(!isOpen)}
                    color={buttonColor}
                /> */}
                <MotionButton
                    onClick={() => setOpen(!isOpen)}
                    className="border border-border rounded-xl px-4 py-3 flex items-center gap-2 hover:border-primary hover:text-primary focus:ring-1 focus:ring-offset-2 focus:ring-primary transition-colors duration-250"
                >
                    <CgMenuRightAlt size={25} />
                    <p>Menu</p>
                </MotionButton>
                <NavbarDialog isOpen={isOpen} setOpen={setOpen} />
            </div>
        </MotionDiv>
    )
}

export default FloatingNavbar
