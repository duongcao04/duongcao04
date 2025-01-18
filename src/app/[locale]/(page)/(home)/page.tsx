import Tag from '@/components/ui/tag'

import GetInTouch from './components/sections/get-in-touch'
import Hero from './components/sections/hero'
import Projects from './components/sections/projects'
import TechStack from './components/sections/techstack'

export default function Home() {
    return (
        <>
            <div>
                <section className="container mt-32 pb-5">
                    <Hero />
                </section>
                {/* Section separation */}
                <div className={`relative h-[90px] w-full bg-border`}>
                    <div
                        className={`absolute top-0 left-0 bg-background h-[85px] w-full rounded-b-[100px]`}
                    ></div>
                </div>
                {/*  */}
                <section id="tech-stack" className="bg-border pt-10">
                    <div className="container flex flex-col justify-center items-center">
                        <Tag title="Tech Stack" />
                        <TechStack />
                    </div>
                </section>
                {/* Section separation */}
                <div className={`relative h-[90px] w-full bg-background`}>
                    <div
                        className={`absolute top-0 left-0 bg-border h-[85px] w-full rounded-b-[100px]`}
                    ></div>
                </div>
                {/*  */}
                <section id="projects" className="pt-20 pb-24">
                    <div className="container">
                        <Tag title="Featured Projects" />
                        <Projects />
                    </div>
                </section>
                <section id="contact" className="bg-border rounded-t-[100px]">
                    <div className="py-16 container">
                        <GetInTouch />
                    </div>
                </section>
            </div>
        </>
    )
}