import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('./components/sections/hero'))
const Projects = dynamic(() => import('./components/sections/projects'))
const TechStack = dynamic(() => import('./components/sections/techstack'))
const GetInTouch = dynamic(() => import('./components/sections/get-in-touch'))
const Tag = dynamic(() => import('@/components/ui/tag'))

const TIME_OUT = 1000

export default async function Home() {
    await new Promise((resolve) => setTimeout(resolve, TIME_OUT))

    return (
        <>
            <section className="container mt-12 desktop:mt-32 pb-5">
                <Hero />
            </section>
            {/* Section separation */}
            <div className={`relative h-[90px] w-full bg-background`}>
                <div
                    className={`absolute top-0 left-0 bg-wallground h-[30px] desktop:h-[85px] w-full rounded-b-[50px] desktop:rounded-b-[100px]`}
                ></div>
            </div>
            {/*  */}
            <section
                id="tech-stack"
                className="bg-background pt-8 desktop:pt-10"
            >
                <div className="container flex flex-col justify-center items-center">
                    <Tag title="Tech Stack" />
                    <TechStack />
                </div>
            </section>
            {/* Section separation */}
            <div className={`relative h-[90px] w-full bg-wallground`}>
                <div
                    className={`absolute top-0 left-0 bg-background h-[60px] desktop:h-[85px] w-full rounded-b-[30px] desktop:rounded-b-[100px]`}
                ></div>
            </div>
            {/*  */}
            <section id="projects" className="pt-20 pb-20 desktop:pb-24">
                <div className="container">
                    <Tag title="Featured Projects" />
                    <Projects />
                </div>
            </section>
            <section
                id="contact"
                className="bg-background rounded-t-[30px] desktop:rounded-t-[100px]"
            >
                <div className="pt-10 pb-16 container">
                    <GetInTouch />
                </div>
            </section>
        </>
    )
}
