import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Avatar from '@/assets/img/avatar.jpg'
import { MotionButton, MotionH1 } from '@/lib/motion'

export default function Hero() {
    return (
        <div>
            <div className="space-y-4">
                <div className="flex flex-col =items-start desktop:flex-row desktop:items-center justify-start gap-5">
                    <MotionH1 className="text-5xl tablet:text-6xl inline-block font-lexendDeca font-medium">{`Hello, I'm `}</MotionH1>
                    <div className="flex items-center justify-start gap-6">
                        <Image
                            src={Avatar}
                            alt="avatar"
                            className="size-24 object-cover rounded-tl-[22px] rounded-tr-[28px] rounded-b-[30px] ring-2 ring-offset-2 ring-border shadow-square"
                        />
                        <MotionH1 className="text-5xl tablet:text-6xl inline-block font-lexendDeca font-medium leading-snug">
                            Duong Cao!
                        </MotionH1>
                    </div>
                </div>
                <MotionH1 className="text-5xl tablet:text-6xl inline-block font-lexendDeca font-medium text-[#8f9194] leading-snug">
                    {`I'm a `}{' '}
                    <span className="text-5xl tablet:text-6xl font-lexendDeca font-medium bg-gradient-to-r from-primary-600 via-orange-600 to-orange-500 text-transparent bg-clip-text">
                        Web Developer.
                    </span>
                </MotionH1>
            </div>
            <div className="mt-5 desktop:mt-10 max-w-[800px]">
                <p className="text-lg text-text-secondary">
                    {`A Developer with a passion for creating beautiful and functional user interfaces. I'm always learning new technologies and tools to improve my skills.`}
                </p>
            </div>
            <div className="mt-10 flex flex-col items-start desktop:flex-row desktop:items-center justify-start gap-5">
                <Link href={'/info'} className="block">
                    <MotionButton className="shadow-md hover:shadow-2xl text-lg px-8 py-3 border border-border rounded-full bg-primary-500 hover:bg-primary-600 transition duration-250 text-white">
                        Talk with me
                    </MotionButton>
                </Link>
                <Link href={'/download-my-resume'} className="block">
                    <MotionButton className="shadow-sm hover:shadow-lg text-lg px-8 py-3 border border-border rounded-full transition duration-250">
                        Download my Resume
                    </MotionButton>
                </Link>
            </div>
        </div>
    )
}
