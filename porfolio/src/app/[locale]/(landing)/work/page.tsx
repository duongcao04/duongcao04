'use client'

import { Chip } from '@heroui/react'
import { ArrowDownIcon, SparklesIcon } from 'lucide-react'

import { FilterBuilder, RecentWorkList } from '@/features/works'

import { INTERNAL_URLS } from '@/lib'
import { HeroButton } from '@/shared/components'

export default function RecentWorkPage() {
    return (
        <>
            {/* --- HEADER SECTION --- */}
            <div className="relative pt-32 pb-20 min-h-[80vh] flex items-center justify-center text-center z-10 px-4">
                {/* Background Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-primary-600/20 blur-[120px] rounded-full pointer-events-none"></div>

                {/* Render Heading */}
                <PageHeading />
            </div>

            {/* Features */}
            <div className="relative z-10" id="explore-projects">
                <FilterBuilder />
                <RecentWorkList />
            </div>

            <FooterCTA />
        </>
    )
}

function PageHeading() {
    return (
        <div className="relative z-20 h-full max-w-4xl mx-auto flex flex-col items-center">
            {/* Badge */}
            <Chip
                variant="shadow"
                classNames={{
                    base: 'bg-background/70 border border-border-muted shadow-lg backdrop-blur-md mb-6',
                    content:
                        'text-text-subdued font-medium tracking-wide uppercase text-xs',
                }}
                startContent={
                    <SparklesIcon size={14} className="text-primary" />
                }
            >
                Featured Projects 2026
            </Chip>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                <span className="text-text-subdued">
                    Architecting Solutions,
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary-500 to-orange-400">
                    Elevating Digital Experiences.
                </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-default-400 mb-10 leading-relaxed max-w-2xl text-center">
                A curated collection of projects demonstrating systemic thinking
                and full-stack expertise. From crafting intuitive interfaces
                with{' '}
                <span className="text-text-subdued font-semibold">HeroUI</span>,
                to engineering robust backends with{' '}
                <span className="text-text-subdued font-semibold">NestJS</span>.
            </p>

            <HeroButton
                variant="flat"
                className="text-text-subdued backdrop-blur-md hover:bg-primary transition-colors hover:text-white"
                radius="full"
                endContent={
                    <ArrowDownIcon size={16} className="animate-bounce" />
                }
                href={'#explore-projects'}
            >
                Explore Projects
            </HeroButton>
        </div>
    )
}

function FooterCTA() {
    return (
        <div className="text-center mt-32 px-4 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Have an idea for your next project?
            </h2>
            <p className="text-default-400 mb-8">
                Let{`'s`} work together to turn that vision into reality.
            </p>
            <HeroButton
                size="lg"
                className="bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 font-semibold px-8"
                radius="full"
                href={INTERNAL_URLS.contact}
            >
                Let{`'s`} Collaborate
            </HeroButton>
        </div>
    )
}
