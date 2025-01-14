import React from 'react'

import Send from '@/components/icons/send'

import { MotionH2 } from '@/lib/motion'

import CopyButton from '../copy-button'
import ScrollToTopButton from '../scroll-to-top-button'

function Contact() {
    const email = 'contact@yangis.dev'

    return (
        <div className="mt-5">
            <MotionH2 className="text-center font-preahvihear">
                Let's talk!
            </MotionH2>
            <div className="my-10 flex flex-col items-center gap-3">
                <div className="size-[44px] mb-1">
                    <Send className="w-full h-full" />
                </div>
                <p className="text-xl font-preahvihear">E-mail</p>
                <p className="-mt-1 text-[21px] font-preahvihear text-primary tracking-wider">
                    {email}
                </p>
                <CopyButton text={email} />
            </div>
            <div className='flex items-center justify-center'>
                <ScrollToTopButton />
            </div>
        </div>
    )
}

export default Contact
