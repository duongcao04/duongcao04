'use client'

import { Button, Spinner } from '@heroui/react'
import { motion } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { HomeWorkCard } from '@/features/home'

import { useProjects } from '@/shared/queries'

// --- ANIMATION VARIANTS ---
const containerVar = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
}

const itemVar = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }, // Cubic bezier for "pop"
    },
}

export default function WorkSection() {
    const t = useTranslations()

    // Fetch top 4 recent projects
    const { data: projects, isLoading } = useProjects()
    const recentProjects = (projects ?? []).slice(0, 4)

    return (
        <section className="relative z-10 py-24">
            <div className="container mx-auto max-w-7xl px-4 lg:px-8">
                {/* --- SECTION HEADER --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
                >
                    <div className="space-y-4 max-w-2xl">
                        <div className="flex items-center gap-2">
                            <span className="p-1.5 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-500">
                                <Layers size={16} />
                            </span>
                            <span className="text-sm font-semibold tracking-widest text-primary-500 uppercase">
                                {t('work')}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground via-foreground/90 to-default-500">
                            Selected Works
                        </h2>

                        <p className="text-lg text-default-500 leading-relaxed max-w-lg">
                            An embrace of effective design ensuring flawless
                            execution, perfectly aligning technical efforts with
                            your vision.
                        </p>
                    </div>

                    {/* Desktop "View All" Button */}
                    <div className="hidden md:block">
                        <Link href="/work">
                            <Button
                                variant="bordered"
                                radius="full"
                                size="lg"
                                className="border-default-200 hover:border-foreground hover:bg-foreground hover:text-background transition-all font-medium group"
                                endContent={
                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                }
                            >
                                View All Projects
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* --- PROJECTS GRID --- */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 h-96 items-center justify-center">
                        <div className="col-span-full flex flex-col items-center gap-4">
                            <Spinner
                                size="lg"
                                color="current"
                                className="text-primary-500"
                            />
                            <p className="text-default-400 text-sm animate-pulse">
                                Loading masterpiece...
                            </p>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        variants={containerVar}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
                    >
                        {recentProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVar}
                                className="h-full"
                            >
                                <HomeWorkCard data={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Mobile "View All" Button (Bottom) */}
                <div className="md:hidden mt-12 text-center">
                    <Link href="/work">
                        <Button
                            variant="flat"
                            radius="full"
                            size="lg"
                            className="w-full bg-default-100 text-default-900 font-semibold"
                            endContent={<ArrowRight size={18} />}
                        >
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
