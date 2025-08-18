'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

import TabIntroduce from './tabs/tab-introduce'
import TabPicture from './tabs/tab-picture'

interface Tab {
    label: string
    component: () => React.JSX.Element
}
const TABS: Tab[] = [
    { label: 'Introduce', component: TabIntroduce },
    { label: 'Picture', component: TabPicture },
]

function AboutMeTabs() {
    const [tab, setTab] = useState<Tab>(TABS[0])

    const buttonStyles = {
        active: 'text-text-primary',
        inActive: 'text-text-secondary hover:bg-border',
    }

    return (
        <>
            <div className="container flex items-center justify-start">
                {TABS.map((item, index) => (
                    <div key={index}>
                        <button
                            className={cn(
                                'px-5 py-4 font-semibold transition duration-200 rounded-md text-sm',
                                item.label === tab.label
                                    ? buttonStyles.active
                                    : buttonStyles.inActive
                            )}
                            onClick={() => {
                                setTab(item)
                            }}
                        >
                            {item.label}
                        </button>
                        <div
                            className={`w-full h-[4px] rounded-lg ${
                                item.label === tab.label
                                    ? 'bg-primary'
                                    : 'bg-transparent'
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
            <div className="pt-5 bg-background">
                <div className="container">
                    <tab.component />
                </div>
            </div>
        </>
    )
}

export default AboutMeTabs
