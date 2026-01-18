'use client'

import { MailIcon } from 'lucide-react'
import { useLocale } from 'next-intl'
import Link from 'next/link'

import { SupportLanguages } from '@/i18n/routing'
import { contactMail } from '@/lib'
import Logo from '@/shared/components/icons/logo'
import NextjsIcon from '@/shared/components/icons/nextjs-icon'
import { FOOTER_CONTACTS, HEADER_NAVIGATES } from '@/shared/constants'
import { useDevice } from '@/shared/hooks'

import { HeroButton } from '../ui/hero-button'

export default function Footer() {
    const locale = useLocale()
    const { isSmallDevice } = useDevice()

    return (
        <footer className="container border-t-1 border-border-default py-8">
            <div
                className="grid gap-8"
                style={{
                    gridTemplateColumns: isSmallDevice ? '1fr' : '1fr 1fr',
                }}
            >
                <div className="space-y-5">
                    <div className="w-fit">
                        <Logo className="text-3xl" />
                    </div>
                    <HeroButton
                        startContent={<MailIcon size={16} />}
                        variant="flat"
                        href={`mailto:${contactMail}`}
                    >
                        {contactMail}
                    </HeroButton>
                </div>
                <div
                    className="grid grid-cols-2 gap-8"
                    style={{ marginTop: isSmallDevice ? 12 : 0 }}
                >
                    <div className="flex flex-col items-start gap-1">
                        {HEADER_NAVIGATES.map((nav) => {
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
    const year = new Date().getFullYear()
    return (
        <div className="flex flex-col items-center gap-1">
            <p className="font-lexendDeca">Copyright © Yangis · {year}</p>
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
