'use client'

import { Card, CardFooter, Chip, Image } from '@heroui/react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowUpRight, Calendar } from 'lucide-react'
import Link from 'next/link'

import { IProject } from '@/shared/interfaces'

interface HomeWorkCardProps {
    data: IProject
    className?: string
}

export function HomeWorkCard({ data, className }: HomeWorkCardProps) {
    // --- MOUSE TRACKING GLOW ---
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    // Light Mode Glow (Subtle Dark/Shadowy)
    const backgroundLight = useMotionTemplate`
        radial-gradient(
          600px circle at ${mouseX}px ${mouseY}px,
          rgba(0, 0, 0, 0.05),
          transparent 80%
        )
    `

    // Dark Mode Glow (White/Sheen)
    const backgroundDark = useMotionTemplate`
        radial-gradient(
          600px circle at ${mouseX}px ${mouseY}px,
          rgba(255, 255, 255, 0.1),
          transparent 80%
        )
    `

    return (
        <Link
            href={`/work/${data.slug}`}
            className={`block h-full group ${className}`}
        >
            <div
                onMouseMove={handleMouseMove}
                className="
                    relative h-full flex flex-col overflow-hidden transition-all duration-500
                    rounded-3xl 
                    border border-zinc-200/60 dark:border-white/5 
                    bg-white/60 dark:bg-zinc-900/40 
                    hover:bg-white/80 dark:hover:bg-zinc-900/60 
                    hover:border-zinc-300/80 dark:hover:border-white/10 
                    hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-none
                "
            >
                {/* --- DUAL GLOW OVERLAYS --- */}

                {/* Light Mode Glow (Visible only in light mode) */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-10 dark:hidden"
                    style={{ background: backgroundLight }}
                />

                {/* Dark Mode Glow (Visible only in dark mode) */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-10 hidden dark:block"
                    style={{ background: backgroundDark }}
                />

                <Card className="bg-transparent shadow-none border-none h-full flex flex-col p-0">
                    {/* --- IMAGE HEADER --- */}
                    {/* flex-1 allows this to stretch to fill the Bento cell */}
                    <div className="relative w-full flex-1 overflow-hidden z-0 min-h-[220px]">
                        <Image
                            src={
                                data.thumbnail_url || '/placeholder-project.jpg'
                            }
                            alt={data.title}
                            removeWrapper
                            classNames={{
                                img: 'w-full h-full object-cover absolute inset-0 transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-100 dark:opacity-90 dark:group-hover:opacity-100',
                            }}
                        />

                        {/* Gradient Overlay (Darker in dark mode for depth, lighter in light mode for vibrance) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 dark:from-zinc-900/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                        {/* Floating 'View' Button */}
                        <div className="absolute top-4 right-4 z-20">
                            <div
                                className="
                                w-12 h-12 rounded-full flex items-center justify-center 
                                translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 
                                shadow-lg shadow-black/10 dark:shadow-black/20
                                bg-white/80 dark:bg-white/10 backdrop-blur-xl 
                                border border-white/40 dark:border-white/20 
                                text-zinc-800 dark:text-white
                             "
                            >
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>

                    {/* --- CONTENT FOOTER --- */}
                    <CardFooter
                        className="
                        flex-none flex flex-col items-start p-6 gap-4 relative z-20 
                        bg-transparent backdrop-blur-sm
                        border-t border-zinc-100 dark:border-white/5
                    "
                    >
                        {/* Title & Year */}
                        <div className="w-full flex justify-between items-start gap-4">
                            <h3 className="text-xl font-bold text-zinc-800 dark:text-foreground group-hover:text-primary-500 transition-colors duration-300 line-clamp-1">
                                {data.title}
                            </h3>
                            {data.started_at && (
                                <div
                                    className="
                                    flex items-center gap-1.5 px-2.5 py-1 rounded-full 
                                    text-xs font-medium 
                                    bg-zinc-100 dark:bg-white/5 
                                    border border-zinc-200 dark:border-white/10 
                                    text-zinc-500 dark:text-default-400
                                "
                                >
                                    <Calendar size={12} />
                                    <span>
                                        {new Date(
                                            data.started_at
                                        ).getFullYear()}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-base text-zinc-500 dark:text-default-500 line-clamp-2 leading-relaxed">
                            {data.description}
                        </p>

                        {/* Tags */}
                        <div className="w-full pt-2 flex flex-wrap gap-2">
                            {(data.services || [])
                                ?.slice(0, 3)
                                .map((service, i) => (
                                    <Chip
                                        key={i}
                                        size="sm"
                                        variant="flat"
                                        classNames={{
                                            base: 'bg-zinc-100 hover:bg-zinc-200 dark:bg-default-100/50 dark:hover:bg-default-200/50 transition-colors border border-zinc-200/50 dark:border-white/5 h-7',
                                            content:
                                                'text-zinc-600 dark:text-default-500 font-medium text-xs tracking-wide',
                                        }}
                                    >
                                        {service}
                                    </Chip>
                                ))}
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </Link>
    )
}
