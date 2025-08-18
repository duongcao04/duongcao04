import React from 'react'

import { useLocale } from 'next-intl'
import Link from 'next/link'

import Logo from '@/components/icons/logo'
import NextjsIcon from '@/components/icons/nextjs-icon'

import { FOOTER_CONTACTS } from '@/constants/appConstants'
import { NAVIGATES } from '@/constants/navigates'
import { SupportLanguages } from '@/i18n/routing'

export default function Footer() {
    const locale = useLocale()

    return (
        <footer className="container border-t py-8">
            <div className="tablet:grid tablet:grid-cols-3 desktop:grid-cols-4 gap-8">
                <div className="tablet:col-span-1 desktop:col-span-2">
                    <Logo className="text-3xl" />
                    {/* <p className="mt-5 font-lexendDeca text-2xl tracking-wider">
                        hello@yangis.dev
                    </p> */}
                </div>
                <div className="mt-7 tablet:mt-0 desktop:mt-0 col-span-2 grid grid-cols-2 gap-8">
                    <div className="flex flex-col items-start gap-1">
                        {NAVIGATES.map((nav) => {
                            const label =
                                nav[`${locale as SupportLanguages}Label`]

                            return (
                                <Link
                                    key={nav.id}
                                    href={nav.path}
                                    className="font-lexendDeca font-normal inline-block p-1 hover:text-primary transition duration-300"
                                >
                                    {label}
                                </Link>
                            )
                        })}
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        {FOOTER_CONTACTS.map((social) => (
                            <Link
                                key={social.id}
                                href={social.path}
                                className="font-lexendDeca font-normal inline-block p-1 hover:text-primary transition duration-300 capitalize"
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
