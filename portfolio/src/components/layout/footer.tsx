import React from 'react'

import Link from 'next/link'

import Logo from '@/components/icons/logo'
import NextjsIcon from '@/components/icons/nextjs-icon'
import Facebook from '@/components/icons/social-icons/facebook'
import GithubSocial from '@/components/icons/social-icons/github-social'
import Linkedin from '@/components/icons/social-icons/linkedin'

import { NAVIGATES } from '@/constants/navigates'

const SOCIALS = [
    {
        id: 1,
        title: 'Facebook',
        icon: Facebook,
        path: 'https://facebook.com/hyang309',
    },
    {
        id: 2,
        title: 'Github',
        icon: GithubSocial,
        path: 'https://github.com/duongcao04',
    },
    {
        id: 3,
        title: 'Linkedin',
        icon: Linkedin,
        path: '#',
    },
]
export default function Footer() {
    return (
        <footer className="container border-t py-8">
            <div className="tablet:grid tablet:grid-cols-3 desktop:grid-cols-4 gap-8">
                <div className="tablet:col-span-1 desktop:col-span-2">
                    <Logo className="text-3xl" />
                </div>
                <div className="mt-7 tablet:mt-0 desktop:mt-0 col-span-2 grid grid-cols-2 gap-8">
                    <div className="flex flex-col items-start gap-1">
                        {NAVIGATES.map((nav) => (
                            <Link
                                key={nav.id}
                                href={nav.path}
                                className="font-lexendDeca font-normal inline-block p-1 hover:text-primary transition duration-300"
                            >
                                {nav.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        {SOCIALS.map((social) => (
                            <Link
                                key={social.id}
                                href={social.path}
                                className="font-lexendDeca font-normal inline-block p-1 hover:text-primary transition duration-300"
                            >
                                {social.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-14">
                <CopyRight />
            </div>
        </footer>
    )
}

function CopyRight() {
    return (
        <div className="flex flex-col items-center gap-1">
            <p className="font-lexendDeca">Copyright © Yangis · 2025</p>
            <Link
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                title="Nextjs"
                className="ml-5"
            >
                <NextjsIcon />
            </Link>
        </div>
    )
}
