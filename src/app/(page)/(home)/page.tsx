import { InlineIcon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import MyAvatar from '@/assets/my_emoji.jpg'
import { SOCIAL_LINKS } from '@/constants'
import { MotionButton, MotionDiv, MotionH1, MotionH3 } from '@/lib/motion'

import tailwindConfig from '../../../../tailwind.config'

function Avatar() {
    return (
        <MotionDiv
            initial={{ opacity: 0, scale: 0.5, rotate: -60 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="bg-gradient-to-b from-primary-300 via-primary-300 to-primary-400 rounded-full size-[145px]"
        >
            <Image src={MyAvatar} alt="My Avatar" />
        </MotionDiv>
    )
}

function ActionButton() {
    return (
        <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2, rotate: 1 }}
            whileTap={{ scale: 1, rotate: 0 }}
        >
            <Button variant={'gradient'} size={'xl'} asChild>
                <Link href={'/about'} className="text-foreground text-xl">
                    Start
                </Link>
            </Button>
        </MotionDiv>
    )
}

function SocialMedia() {
    return (
        <ul className="grid grid-cols-3 gap-28">
            {SOCIAL_LINKS.map((item) => (
                <li key={item.id}>
                    <MotionButton
                        className="w-full h-full flex items-center justify-start gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="size-[58px] p-[18px] rounded-full bg-border flex items-center justify-center">
                            <InlineIcon
                                icon={item.icon}
                                fontSize={27}
                                className="text-foreground"
                            />
                        </div>
                        <div className="text-xl text-left">
                            <p>{item.label}</p>
                            <Link
                                href={item.path}
                                className="text-primary-600 dark:text-primary-700 flex items-center justify-start"
                                target={item.isRedirect ? '_blank' : ''}
                            >
                                {item.username}
                                {item.isRedirect && (
                                    <InlineIcon
                                        icon="humbleicons:arrow-up"
                                        className="rotate-45"
                                    />
                                )}
                            </Link>
                        </div>
                    </MotionButton>
                </li>
            ))}
        </ul>
    )
}

function MobileSocialMedia() {
    return (
        <ul className="grid grid-cols-3 gap-7">
            {SOCIAL_LINKS.map((item) => (
                <li key={item.id}>
                    <MotionButton
                        className="group w-full h-full flex items-center justify-start gap-6 rounded-full"
                        initial={{
                            opacity: 0,
                            backgroundColor:
                                tailwindConfig.theme.extend.colors.border,
                        }}
                        animate={{ opacity: 1 }}
                        whileHover={{
                            backgroundColor:
                                tailwindConfig.theme.extend.colors.primary
                                    .DEFAULT,
                        }}
                    >
                        <Link
                            href={item.path}
                            className="size-[58px] p-[18px] rounded-full flex items-center justify-center"
                            target={item.isRedirect ? '_blank' : ''}
                        >
                            <InlineIcon
                                icon={item.icon}
                                fontSize={27}
                                className="text-foreground group-hover:text-white transition duration-300"
                            />
                        </Link>
                    </MotionButton>
                </li>
            ))}
        </ul>
    )
}

export default function Home() {
    return (
        <div className="w-full h-full mt-36 laptop:mt-0 flex flex-col items-center laptop:justify-center">
            <div className="flex flex-col justify-center items-center gap-8">
                <Avatar />
                <div className="text-center">
                    <MotionH1
                        className="text-5xl font-bold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        Cao Hai Duong
                    </MotionH1>
                    <MotionH3
                        className="mt-4 text-xl font-medium"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 0.5, x: 0 }}
                        transition={{ delay: 0.05, duration: 0.3 }}
                    >
                        Software Engineer
                    </MotionH3>
                </div>
                <ActionButton />
            </div>
            <div className="mt-8 laptop:mt-36">
                <div className="hidden laptop:block">
                    <SocialMedia />
                </div>
                <div className="block laptop:hidden">
                    <MobileSocialMedia />
                </div>
            </div>
        </div>
    )
}
