import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('./components/sections/hero'))
const LastUpdateSection = dynamic(
    () => import('./components/sections/last-update-section')
)
const WritingSection = dynamic(
    () => import('./components/sections/writing-section')
)
const WorkSection = dynamic(
    () => import('./components/sections/new-work-section')
)
const GetInTouch = dynamic(
    () => import('./components/sections/get-in-touch-section')
)

export default async function Home() {
    return (
        <>
            <section className="container pt-14 desktop:pt-28">
                <Hero />
            </section>
            <section className="container mt-20 desktop:mt-36">
                <LastUpdateSection />
            </section>
            <section className="container mt-14">
                <WorkSection />
            </section>
            <section className="container mt-14">
                <WritingSection />
            </section>
            <section className="container mt-32 mb-24">
                <GetInTouch />
            </section>
        </>
    )
}
