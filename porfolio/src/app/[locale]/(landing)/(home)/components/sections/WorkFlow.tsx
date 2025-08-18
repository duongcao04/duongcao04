'use client'

import React from 'react'

import { Accordion, AccordionItem } from '@heroui/react'
import { child } from 'firebase/database'
import { Plus } from 'lucide-react'

import MarkdownContent from '@/components/MarkdownContent'

import { WORKFLOW } from '@/database/workflow'
import { MotionH2 } from '@/lib/motion'

export default function WorkFlow() {
    const workflow = WORKFLOW

    return (
        <div className="pt-24 pb-20 bg-black">
            <div className="container !text-white">
                <div className="grid grid-cols-[1fr_1.5fr] gap-24">
                    <div>
                        <MotionH2 className="text-4xl font-medium leading-inherit tracking-wider">
                            Empowering visionaries to drive meaningful progress
                        </MotionH2>
                        <div className="mt-8 text-lg leading-loose tracking-wide">
                            <p>
                                Am blend imagination with technical expertise to
                                help brands transform, shine, and thrive — both
                                commercially and culturally.
                            </p>
                            <p className="mt-4">
                                <span>
                                    Our greatest asset is our clients’ trust.
                                </span>
                                <br />
                                <span>Our true success is their success.</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <Accordion
                            dividerProps={{
                                style: {
                                    background: '#545454 ',
                                },
                            }}
                        >
                            {workflow.map((step) => {
                                return (
                                    <AccordionItem
                                        key={step.id}
                                        title={
                                            <div className="my-3 text-white grid grid-cols-[44px_1fr] gap-8">
                                                <p className="text-3xl font-thin">
                                                    {step.stepNumber}
                                                </p>
                                                <div>
                                                    <p className="text-2xl font-normal font-lexendDeca">
                                                        {step.title}
                                                    </p>
                                                    <div className="mt-3 text-[#a2a2a2] font-thin">
                                                        {step.shortDescription}
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        HeadingComponent={'h3'}
                                        indicator={<Plus />}
                                        classNames={{
                                            content: 'ml-[76px] pb-8',
                                        }}
                                    >
                                        <div className="space-y-5">
                                            {step.contentTree?.map(
                                                (item, idx) => {
                                                    return (
                                                        <div key={idx}>
                                                            <p className="text-lg">
                                                                {item.title}
                                                            </p>
                                                            <ul className="mt-3 ml-5 list-disc space-y-4 text-base text-[#a2a2a2]">
                                                                {item.children.map(
                                                                    (
                                                                        child,
                                                                        idx
                                                                    ) => {
                                                                        return (
                                                                            <li
                                                                                key={
                                                                                    child +
                                                                                    idx
                                                                                }
                                                                            >
                                                                                {
                                                                                    child
                                                                                }
                                                                            </li>
                                                                        )
                                                                    }
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}
