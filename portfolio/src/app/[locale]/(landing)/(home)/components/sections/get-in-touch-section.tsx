import React from 'react'

import Link from 'next/link'
import { FiPhoneCall } from 'react-icons/fi'
import { LuSend } from 'react-icons/lu'
import { PiMessengerLogoBold, PiSkypeLogoBold } from 'react-icons/pi'
import { RoughNotation } from 'react-rough-notation'

import ContactForm from '../forms/contact-form'

function ContactInfo() {
    const INFO = [
        {
            title: 'Call me',
            desc: 'Available from 8:00am to 5:00pm.',
            method: [
                {
                    icon: FiPhoneCall,
                    label: '(+84) 862 248 332',
                    href: '(+84) 862 248 332',
                },
            ],
        },
        {
            title: 'Chat with me',
            desc: 'Send me a message on social media.',
            method: [
                {
                    icon: PiSkypeLogoBold,
                    label: 'Start a live chat.',
                    href: '(+84) 862 248 332',
                },
                {
                    icon: LuSend,
                    label: 'Shoot me an email.',
                    href: 'mailto:contact@yangis.dev',
                },
                {
                    icon: PiMessengerLogoBold,
                    label: 'Message me on Messenger.',
                    href: 'https://www.facebook.com/hyang.309',
                },
            ],
        },
    ]
    return (
        <div className="space-y-10">
            {INFO.map((group, index) => (
                <div key={index}>
                    <p className="text-lg font-semibold">{group.title}</p>
                    <p className="mt-2 font-medium text-text-secondary tracking-wider">
                        {group.desc}
                    </p>
                    <div className="mt-5 space-y-4">
                        {group.method.map((method, index) => (
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
                                    {method.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function GetInTouch() {
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
                        <span className="font-lexendDeca font-semibold px-8">
                            Get In Touch
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
