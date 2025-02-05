import dynamic from 'next/dynamic'

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

export default async function Home() {
    return (
        <>
            <section className="container pt-14 desktop:pt-28">
                <HeroSection />
            </section>
            <section className="container mt-20 desktop:mt-36">
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
