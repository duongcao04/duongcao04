import React from 'react'

import Arrow from '@/components/icons/arrow'

import { MotionH1, MotionH2, MotionH3 } from '@/lib/motion'

import Avatar from '../avatar'

function Hero() {
    return (
        <>
            <div className="relative flex justify-start items-center gap-20">
                <Avatar />

                <div className="absolute top-5 left-64 flex items-start">
                    <Arrow />
                    <p className="mt-6 -ml-3 font-preahvihear text-lg">
                        Hello! I Am{' '}
                        <span className="text-primary">Cao Hai Duong</span>
                    </p>
                </div>

                <div className="flex flex-col justify-start">
                    <div className="mt-20 font-preahvihear space-y-3">
                        <MotionH2 className="text-xl underline underline-offset-2">
                            I can craft excellence through with
                        </MotionH2>
                        <MotionH1 className="text-5xl leading-snug max-w-[550px]">
                            design, functionality, optimization,{' '}
                        </MotionH1>
                        <MotionH3 className="text-lg">
                            and innovation, ensuring performance and user
                            satisfaction.
                        </MotionH3>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <MotionH1 className="text-5xl leading-snug font-preahvihear">
                    {`I'm a Web Developer.`}
                </MotionH1>
                <MotionH3 className="mt-5 text-xl leading-relaxed tracking-wider font-preahvihear max-w-[1000px]">
                    A Developer focused on creating responsive, high-quality
                    websites and dynamic applications. I ensure seamless
                    performance through detailed planning, intuitive design, and
                    thorough testing and optimization.
                </MotionH3>
                <MotionH3 className="mt-3 text-xl leading-relaxed tracking-wider font-preahvihear">
                    {`Available 24/7, I'm ready to assist you anytime!`}
                </MotionH3>
            </div>
        </>
    )
}

export default Hero
