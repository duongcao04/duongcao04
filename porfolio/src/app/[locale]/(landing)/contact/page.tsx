'use client'

import React from 'react'

import { Card, CardBody, Input, Textarea } from '@heroui/react'
import {
    MailIcon,
    MessageCircleIcon,
    MessageSquareIcon,
    PhoneIcon,
    SendIcon,
} from 'lucide-react'

import { HeroButton, HeroInput } from '@/shared/components'

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 pt-32 relative z-10 max-w-6xl">
            {/* Page Title */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-primary-500 to-orange-400">
                        Get in Touch
                    </span>
                </h1>
                <p className="text-text-subdued text-sm max-w-xl mx-auto">
                    <span>Have a project in mind or just want to say hi?</span>
                    <br />
                    <span>
                        I&lsquo;m always open to discussing new projects,
                        creative ideas or opportunities to be part of your
                        visions.
                    </span>
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* --- LEFT COLUMN: CONTACT INFO (Based on your image) --- */}
                <div className="lg:col-span-5 space-y-12">
                    {/* Section: Call Me */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-text-default flex items-center gap-2">
                            <PhoneIcon className="text-purple-400" size={24} />
                            Call me
                        </h3>
                        <p className="text-default-400 text-sm">
                            Available from 8:00am to 5:00pm.
                        </p>
                        <a
                            href="tel:+84862248332"
                            className="text-xl font-semibold text-text-default hover:text-purple-400 transition-colors inline-block"
                        >
                            (+84) 862 248 332
                        </a>
                    </div>

                    {/* Section: Chat with me */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-text-default flex items-center gap-2">
                                <MessageSquareIcon
                                    className="text-pink-400"
                                    size={24}
                                />
                                Chat with me
                            </h3>
                            <p className="text-default-400 text-sm">
                                Send me a message on social media.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <ContactLink
                                icon={<MessageCircleIcon size={20} />}
                                label="Start a live chat"
                                subLabel="Skype / Zalo"
                                href="#"
                            />
                            <ContactLink
                                icon={<MailIcon size={20} />}
                                label="Shoot me an email"
                                subLabel="yangisdev@gmail.com" // Update your email
                                href="mailto:yangisdev@gmail.com"
                            />
                            <ContactLink
                                icon={<SendIcon size={20} />}
                                label="Message me on Messenger"
                                subLabel="Facebook / Meta"
                                href="#"
                            />
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN: FORM (Based on your image) --- */}
                <div className="lg:col-span-7">
                    <Card className="bg-background-muted border border-white/10 backdrop-blur-md shadow-2xl rounded-3xl">
                        <CardBody className="p-8">
                            <form className="flex flex-col gap-6">
                                {/* Row 1: First & Last Name */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    <HeroInput
                                        isRequired
                                        label="First name"
                                        placeholder="Enter your first name"
                                        labelPlacement="outside-top"
                                        variant="bordered"
                                        radius="sm"
                                        classNames={{
                                            inputWrapper: 'border',
                                        }}
                                    />
                                    <Input
                                        isRequired
                                        label="Last name"
                                        placeholder="Enter your last name"
                                        labelPlacement="outside-top"
                                        variant="bordered"
                                        radius="sm"
                                        classNames={{
                                            inputWrapper: 'border',
                                        }}
                                    />
                                </div>

                                {/* Row 2: Email */}
                                <Input
                                    isRequired
                                    type="email"
                                    label="Email"
                                    placeholder="you@company.com"
                                    labelPlacement="outside-top"
                                    variant="bordered"
                                    radius="sm"
                                    classNames={{
                                        inputWrapper: 'border',
                                    }}
                                />

                                {/* Row 3: Message */}
                                <Textarea
                                    isRequired
                                    label="Message"
                                    placeholder="Leave me a message..."
                                    labelPlacement="outside-top"
                                    variant="bordered"
                                    radius="sm"
                                    minRows={5}
                                    classNames={{
                                        inputWrapper: 'border',
                                    }}
                                />

                                {/* Row 4: Button */}
                                <HeroButton
                                    size="lg"
                                    className="w-full bg-linear-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-lg shadow-primary-500/20 mt-2"
                                    radius="sm"
                                >
                                    Send message
                                </HeroButton>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

// Helper Component for Social Links
function ContactLink({
    icon,
    label,
    subLabel,
    href,
}: {
    icon: React.ReactNode
    label: string
    subLabel: string
    href: string
}) {
    return (
        <HeroButton
            href={href}
            className="w-full flex items-center justify-start group px-5 py-6"
            variant="light"
            startContent={
                <div className="size-11 flex items-center justify-center">
                    {icon}
                </div>
            }
        >
            <div className="flex flex-col items-start justify-start">
                <h4 className="font-medium text-text-default text-sm">
                    {label}
                </h4>
                <span className="text-xs text-text-subdued">{subLabel}</span>
            </div>
        </HeroButton>
    )
}
