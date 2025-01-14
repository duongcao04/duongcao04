import React from 'react'

import Image from 'next/image'

import { Button } from '@/components/ui/button'

import HiEmoji from '@/assets/emoji/hi.jpg'
import { MotionDiv, MotionH1 } from '@/lib/motion'

export default function About() {
    return (
        <div>
            <div className="flex flex-col-reverse items-center laptop:grid laptop:grid-cols-[1fr_300px] laptop:gap-36">
                <div className="mt-5 laptop:mt-0 leading-loose tracking-wider">
                    <MotionH1
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        Hi!
                    </MotionH1>
                    <div className="mt-5 laptop:mt-10 text-xl">
                        <p>I am proud to share my achievements:</p>
                        <br />
                        <p>
                            I redesigned the iGoods app which became the number
                            one grocery delivery app in Russia. My redesign
                            increased the conversion rate for adding items to
                            the cart by 70%.
                        </p>
                        <br />
                        <p>
                            I also worked on the ASO, which resulted in an
                            increase in conversion from 40.3% to 58.8% with 300K
                            MAU. Additionally, I created the Memo app for
                            learning languages through memes.
                        </p>
                        <br />
                        <p>
                            I also worked at Cuberto agency, which was named the
                            best agency in the world by Awwwards.
                        </p>
                    </div>
                    <Button className="mt-[89px]">github/duongcao04</Button>
                </div>
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.5, rotate: -60 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                >
                    <div className="mt-16 relative size-[200px] laptop:w-[400px] laptop:h-[500px] bg-border rounded-full overflow-hidden">
                        <div>
                            <Image
                                src={HiEmoji}
                                alt="Hi Emoji"
                                className="absolute -bottom-8 laptop:-bottom-24 size-[200px] laptop:w-[400px] laptop:h-[500px] object-contain"
                            />
                        </div>
                    </div>
                </MotionDiv>
            </div>
        </div>
    )
}
