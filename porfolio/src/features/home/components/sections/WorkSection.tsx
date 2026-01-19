'use client'

import { Button, Spinner } from '@heroui/react'
import { motion } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { useProjects } from '@/shared/queries'

import { HomeWorkCard } from '../HomeWorkCard'

// --- ANIMATION VARIANTS ---
const containerVar = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
}

const itemVar = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

// Helper: Determine grid spans for Bento Layout
const getBentoClass = (index: number) => {
    switch (index) {
        case 0:
            // First item: Big Square (2x2)
            return 'md:col-span-2 md:row-span-2 min-h-[400px]'
        case 4:
            // Fourth item: Wide Rectangle (2 cols)
            return 'md:col-span-2 min-h-[250px]'
        default:
            // Others: Standard Cell (1x1)
            return 'md:col-span-1 min-h-[250px]'
    }
}

export default function WorkSection() {
    const t = useTranslations()

    // Fetch 5 projects to fill the bento grid perfectly
    const { data: projects, isLoading } = useProjects()
    const recentProjects = (projects ?? []).slice(0, 5)

    return (
        <section className="relative z-10 py-24">
            <div className="px-4 lg:px-8">
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 max-w-2xl"
                    >
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
                    </motion.div>

                    <div className="hidden md:block">
                        <Link href="/work">
                            <Button
                                variant="light"
                                className="text-default-500 hover:text-foreground font-medium"
                                endContent={<ArrowRight size={18} />}
                            >
                                View All
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* --- BENTO GRID --- */}
                {isLoading ? (
                    <div className="w-full h-96 flex flex-col items-center justify-center gap-4">
                        <Spinner
                            size="lg"
                            color="current"
                            className="text-primary-500"
                        />
                        <p className="text-default-400 text-sm animate-pulse">
                            Loading works...
                        </p>
                    </div>
                ) : (
                    <motion.div
                        variants={containerVar}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        // 3 columns on desktop, 1 on mobile
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                        {recentProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={itemVar}
                                className={getBentoClass(index)}
                            >
                                <HomeWorkCard data={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Mobile View All */}
                <div className="md:hidden mt-8">
                    <Link href="/work">
                        <Button className="w-full" variant="flat" size="lg">
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
