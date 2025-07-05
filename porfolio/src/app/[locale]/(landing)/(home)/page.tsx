import dynamic from 'next/dynamic'

import { cn } from '@/lib/utils'

import ScrollDownButton from './components/ScrollDownButton'

const HeroSection = dynamic(() => import('./components/sections/hero-section'))
const LastUpdateSection = dynamic(
    () => import('./components/sections/last-update-section')
)
const WritingSection = dynamic(
    () => import('./components/sections/writing-section')
)
const WorkSection = dynamic(() => import('./components/sections/work-section'))
const GetInTouch = dynamic(
    () => import('./components/sections/get-in-touch-section')
)

export default async function HomePage() {
    return (
        <>
            <section>
                <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
                    <div
                        className={cn(
                            'absolute inset-0',
                            '[background-size:40px_40px]',
                            '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
                            'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
                        )}
                    />
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
                    <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                        <div className="container pt-14 desktop:pt-24">
                            <HeroSection />
                            <div className="hidden mt-8 container desktop:grid place-items-center opacity-70 scale-90">
                                <ScrollDownButton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="scroll-down" />
            <section className="container mt-20 desktop:mt-16">
                <LastUpdateSection />
            </section>
            <section className="container mt-14">
                <WorkSection />
            </section>
            <section className="container mt-10">
                <WritingSection />
            </section>
            <section className="container mt-32 mb-24">
                <GetInTouch />
            </section>
        </>
    )
}
