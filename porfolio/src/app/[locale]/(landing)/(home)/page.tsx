import { cn } from '@/lib/utils'

import BlogAndArticle from '../../../../features/home/components/sections/BlogAndArticle'
import GetInTouch from '../../../../features/home/components/sections/GetInTouchSection'
import HeroSection from '../../../../features/home/components/sections/HeroSection'
import WorkFlow from '../../../../features/home/components/sections/WorkFlow'
import WorkSection from '../../../../features/home/components/sections/WorkSection'

export default async function HomePage() {
    return (
        <div className="max-w-screen overflow-hidden">
            <section>
                <div className="relative flex h-200 w-full items-center justify-center bg-white dark:bg-black">
                    <div
                        className={cn(
                            'absolute inset-0',
                            'bg-size-[40px_40px]',
                            'bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
                            'dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
                        )}
                    />
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
                    <div className="relative z-20 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                        <div className="container pt-14 desktop:pt-20">
                            <HeroSection />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mt-16 mb-20">
                <WorkSection />
            </section>
            <section>
                <WorkFlow />
            </section>
            <section className="container mt-16 mb-24">
                <BlogAndArticle />
            </section>
            <section className="container mt-32 mb-24">
                <GetInTouch />
            </section>
        </div>
    )
}
