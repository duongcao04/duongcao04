import { cn } from '@/lib/utils'

import BlogAndArticle from './components/sections/BlogAndArticle'
import GetInTouch from './components/sections/GetInTouchSection'
import HeroSection from './components/sections/HeroSection'
import RecentWork from './components/sections/RecentWork'
import WorkFlow from './components/sections/WorkFlow'

export default async function HomePage() {
    return (
        <div className="max-w-screen overflow-hidden">
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
                        <div className="container pt-14 desktop:pt-20">
                            <HeroSection />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mt-16 mb-24">
                <RecentWork />
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
