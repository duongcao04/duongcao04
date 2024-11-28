import { InlineIcon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import MyAvatar from '@/assets/my_emoji.jpg'
import { SOCIAL_LINKS } from '@/constants'

export default function Home() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-8">
                <div className="bg-gradient-to-b from-primary-300 via-primary-300 to-primary-400 rounded-full size-[145px]">
                    <Image src={MyAvatar} alt="My Avatar" />
                </div>
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Cao Hai Duong</h1>
                    <h3 className="mt-4 text-xl font-medium opacity-50">
                        Software Engineer
                    </h3>
                </div>
                <Button variant={'gradient'} size={'lg'} asChild>
                    <Link href={'/about'} className="text-foreground">
                        Start
                    </Link>
                </Button>
            </div>
            <div className="mt-36 grid grid-cols-3 gap-28">
                {SOCIAL_LINKS.map((item) => (
                    <button
                        key={item.id}
                        className="w-full h-full flex items-center justify-start gap-6"
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
                    </button>
                ))}
            </div>
        </div>
    )
}
