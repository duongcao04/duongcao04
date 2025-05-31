'use client'

import React from 'react'

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from '@heroui/react'
import { PressEvent } from '@react-types/shared'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { HiLanguage } from 'react-icons/hi2'

import { APP_LANGUAGES } from '@/constants/appConstants'
import { useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export default function LanguageToggle() {
    const getPathname = usePathname().slice(1)
    const router = useRouter()

    const onChangeLanguage = (event: PressEvent) => {
        const locale = (event.target as HTMLElement).dataset.key

        const hasLocale = routing.locales.some((locale) =>
            getPathname.startsWith(locale)
        )
        const pathname = hasLocale
            ? '/' + getPathname.split('/').slice(1).join('/')
            : '/' + getPathname

        router.push(pathname, { locale })
    }
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="bordered">
                    <HiLanguage size={20} />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                {APP_LANGUAGES.map((lang) => (
                    <DropdownItem key={lang.locale} onPress={onChangeLanguage}>
                        <div className="flex items-center justify-start gap-3">
                            <Image
                                src={lang.icon}
                                alt={lang.name}
                                width={24}
                                height={24}
                                className="w-6"
                            />
                            <p>{lang.name}</p>
                        </div>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}
