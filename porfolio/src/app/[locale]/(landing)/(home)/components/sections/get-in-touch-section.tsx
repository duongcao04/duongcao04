import React from 'react'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { RoughNotation } from 'react-rough-notation'

import { CONTACT_INFOS } from '@/constants/appConstants'
import { SupportLanguages } from '@/i18n/routing'

import ContactForm from '../forms/contact-form'

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
    const tTag = useTranslations('app.common.tag')

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-fit">
                    <RoughNotation
                        type="box"
                        show={true}
                        customElement="h2"
                        color="var(--secondary)"
                        order={5}
                    >
                        <span className="font-lexendDeca font-semibold px-8 capitalize">
                            {tTag('getInTouch')}
                        </span>
                    </RoughNotation>
                </div>
                <div className="mt-20 flex flex-col gap-12 items-start w-full desktop:w-[1280px] tablet:grid tablet:grid-cols-[400px_minmax(0,1fr)] desktop:gap-8">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </>
    )
}
