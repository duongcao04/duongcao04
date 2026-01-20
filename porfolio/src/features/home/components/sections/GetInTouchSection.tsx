'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

import { SupportLanguages } from '@/i18n/routing'
import { CONTACT_INFOS } from '@/shared/constants'
import { useDevice } from '@/shared/hooks'

import ContactForm from '../forms/ContactForm'

function ContactInfo() {
    const locale = useLocale()

    return (
        <div className="space-y-10">
            {CONTACT_INFOS.map((group, index) => {
                const groupTitle = group[`${locale as SupportLanguages}Title`]
                const groupDesc =
                    group[`${locale as SupportLanguages}Description`]

                return (
                    <div key={index}>
                        <p className="text-lg font-semibold">{groupTitle}</p>
                        <p className="mt-2 font-medium text-text-secondary tracking-wider">
                            {groupDesc}
                        </p>
                        <div className="mt-5 space-y-4">
                            {group.method.map((method, index) => {
                                const methodLabel =
                                    method[`${locale as SupportLanguages}Label`]

                                return (
                                    <div
                                        key={index}
                                        className="flex items-center justify-start gap-2"
                                    >
                                        <method.icon size={22} />
                                        <Link
                                            href={method.href}
                                            target="_blank"
                                            className="hover:text-secondary transition duration-250 p-1"
                                        >
                                            {methodLabel}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default function GetInTouch() {
    const tTag = useTranslations()
    const { isSmallDevice } = useDevice()

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-fit">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground via-foreground/90 to-default-500 font-lexendDeca capitalize">
                        {tTag('getInTouch')}
                    </h2>
                </div>
                <div
                    className="mt-20 flex-col gap-12 items-start w-full"
                    style={{
                        display: isSmallDevice ? 'flex' : 'grid',
                        gridTemplateColumns: isSmallDevice ? '' : '400px 1fr',
                        gap: isSmallDevice ? 32 : 0,
                    }}
                >
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </>
    )
}
