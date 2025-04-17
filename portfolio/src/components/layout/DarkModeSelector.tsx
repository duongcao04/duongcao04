'use client'

import { Dispatch, SetStateAction, useState } from 'react'

import { InlineIcon } from '@iconify/react'
import { useTheme } from 'next-themes'

import { THEMES } from '@/constants/themes'
import { MotionButton, MotionUl } from '@/lib/motion'

import tailwindConfig from '../../../tailwind.config'

interface IThemeList {
    theme: string | undefined
    setTheme: Dispatch<SetStateAction<string>>
    setOpen: Dispatch<SetStateAction<boolean>>
}
function ThemeList({ theme, setTheme, setOpen }: IThemeList) {
    return (
        <MotionUl
            className="flex items-center justify-end gap-2 p-2 bg-primary-50 rounded-[10px]"
            initial={{
                opacity: 0,
                x: 50,
            }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
                gap: '16px',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            }}
        >
            {THEMES.map((item, index) => {
                return (
                    <li key={index}>
                        <MotionButton
                            className={`p-2 rounded-[10px] ${theme === item.value ? 'bg-red-100 text-red-500 border' : 'text-black'}`}
                            onClick={() => {
                                setTheme(item.value)
                                setOpen(false)
                            }}
                            whileHover={{
                                scale: 1.4,
                                boxShadow:
                                    'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                            }}
                            whileTap={{
                                scale: 1,
                            }}
                        >
                            <InlineIcon icon={item.icon} fontSize={25} />
                        </MotionButton>
                    </li>
                )
            })}
        </MotionUl>
    )
}

export default function DarkModeSelector() {
    const { theme, setTheme } = useTheme()
    const [isOpen, setOpen] = useState<boolean>(false)

    return (
        <div className="flex items-center justify-end flex-row-reverse gap-2">
            <MotionButton
                className="rounded-full bg-primary-100 p-3"
                onClick={() => {
                    setOpen(!isOpen)
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                    scale: 1.1,
                    boxShadow: tailwindConfig.theme.extend.boxShadow.square,
                }}
                whileTap={{ scale: 1 }}
                onBlur={() => {
                    setTimeout(() => {
                        setOpen(false)
                    }, 100)
                }}
            >
                <InlineIcon
                    icon="streamline:paint-palette-solid"
                    fontSize={40}
                    className="text-primary"
                />
            </MotionButton>
            {isOpen && (
                <ThemeList
                    theme={theme}
                    setTheme={setTheme}
                    setOpen={setOpen}
                />
            )}
        </div>
    )
}
