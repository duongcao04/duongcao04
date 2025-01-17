import React from 'react'

import Link from 'next/link'

import Facebook from '../icons/social-icons/facebook'
import GithubSocial from '../icons/social-icons/github-social'
import Linkedin from '../icons/social-icons/linkedin'

const FOOTER_SOCIALS = [
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
function Footer() {
    return (
        <footer className="h-[64px] bg-gradient-to-bl from-primary-600 via-primary-500 to-primary-600 text-white flex items-center justify-center">
            <div className="container flex items-center justify-between">
                <p className="font-preahvihear text-xl">
                    &#169; 2025 Cao Hai Duong
                </p>
                <ul className="flex items-center justify-end gap-3">
                    {FOOTER_SOCIALS.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.path}
                                className="block size-[36px]"
                                target="_blank"
                            >
                                <item.icon className="w-full h-full" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer
