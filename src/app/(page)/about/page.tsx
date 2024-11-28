import React from 'react'
import { Button } from '@/components/ui/button'
import HiEmoji from '@/assets/emoji/hi.jpg'
import Image from 'next/image'

export default function About() {
    return (
        <div className="container mt-32">
            <div className="grid grid-cols-[1fr_300px] gap-36">
                <div className="leading-loose tracking-wider">
                    <h1>Hi!</h1>
                    <div className="mt-10 text-xl">
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
                <div className="relative w-[400px] h-[500px] bg-border rounded-full overflow-hidden">
                    <Image
                        src={HiEmoji}
                        alt="Hi Emoji"
                        className="absolute -bottom-24 w-[400px] h-[500px] object-contain"
                    />
                </div>
            </div>
        </div>
    )
}
