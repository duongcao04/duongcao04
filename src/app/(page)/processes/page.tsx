import React from 'react'

import { Button } from '@/components/ui/button'

import { PROCESSES } from '@/constants'
import { Process } from '@/constants/processes'
import { MotionDiv, MotionH1 } from '@/lib/motion'

function ProcessNode({
    isHead,
    isTail,
    data,
}: {
    isHead: boolean
    isTail: boolean
    data: Process
}) {
    console.log(isHead, isTail)

    return (
        <div className="flex items-start justify-start gap-[26px]">
            <div className="mt-3">
                <div className="relative size-[17px] bg-primary rounded-full">
                    <div className="absolute top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%] size-[8px] bg-background rounded-full"></div>
                </div>
            </div>
            <MotionDiv whileHover={{ x: 15 }}>
                <p className="text-xl">{data.title}</p>
                <p className="text-base opacity-70">{data.description}</p>
            </MotionDiv>
        </div>
    )
}

function ProcessTimeline() {
    return (
        <ul className="flex flex-col items-start gap-[21px]">
            {PROCESSES.map((item, index) => {
                const isTail = index === PROCESSES.length - 1 ? true : false
                const isHead = index === 0 ? true : false
                return (
                    <li key={item.id}>
                        <ProcessNode
                            isHead={isHead}
                            isTail={isTail}
                            data={item}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

function Processes() {
    return (
        <div className="container px-5 mt-20 laptop:mt-32">
            <MotionH1
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
            >
                Processes
            </MotionH1>
            <div className="grid grid-cols-[1fr_500px] gap-36">
                <div>
                    <div className="mt-5 laptop:mt-10 text-xl">
                        <p>
                            I am a web developer. With my expertise, I create
                            responsive, user-friendly websites and dynamic
                            applications, ready to bring your vision to life.
                        </p>
                        <br />
                        <p>
                            My work process begins with understanding the needs
                            and goals of my clients, followed by creating a
                            detailed plan and designing a user-friendly,
                            intuitive interface.
                        </p>
                        <br />
                        <p>
                            I leverage my expertise to develop high-quality web
                            products that are compatible across various devices.
                        </p>
                        <br />
                        <p>
                            Before delivery, I conduct thorough testing and
                            optimization to ensure the best performance.
                        </p>
                        <br />
                        <p>{`I'm online 24/7, so feel free to contact me anytime`}</p>
                    </div>
                    <Button className="mt-[89px]">facebook/hyang.309</Button>
                </div>
                <div>
                    <ProcessTimeline />
                </div>
            </div>
        </div>
    )
}

export default Processes
