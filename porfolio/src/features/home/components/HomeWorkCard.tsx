'use client'

import { Card, CardBody, CardFooter, Chip, Image } from '@heroui/react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { IProject } from '@/shared/interfaces'

interface HomeWorkCardProps {
    data: IProject
}

export function HomeWorkCard({ data }: HomeWorkCardProps) {
    // --- MOUSE TRACKING GLOW EFFECT (Optional Polish) ---
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

    const background = useMotionTemplate`
        radial-gradient(
          650px circle at ${mouseX}px ${mouseY}px,
          rgba(255, 255, 255, 0.1),
          transparent 80%
        )
    `

    return (
        <Link href={`/work/${data.slug}`} className="block h-full group">
            <div
                onMouseMove={handleMouseMove}
                className="relative h-full rounded-3xl border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-colors duration-500 overflow-hidden"
            >
                {/* Mouse Hover Glow Overlay */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                    style={{ background }}
                />

                <Card className="bg-transparent shadow-none border-none h-full">
                    {/* --- IMAGE SECTION --- */}
                    <CardBody className="p-0 overflow-hidden aspect-video relative z-0">
                        <Image
                            src={
                                data.thumbnail_url || '/placeholder-project.jpg'
                            }
                            alt={data.title}
                            removeWrapper
                            classNames={{
                                img: 'w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105',
                            }}
                        />

                        {/* Dark Gradient Overlay for text contrast if needed */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Floating 'View' Button (Appears on Hover) */}
                        <div className="absolute top-4 right-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                            <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                <ArrowUpRight size={20} />
                            </span>
                        </div>
                    </CardBody>

                    {/* --- CONTENT SECTION --- */}
                    <CardFooter className="flex flex-col items-start p-6 pt-8 space-y-4 relative z-20 bg-transparent">
                        {/* Header: Title & Year */}
                        <div className="w-full flex justify-between items-start gap-4">
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary-500 transition-colors duration-300">
                                {data.title}
                            </h3>
                            {data.started_at && (
                                <span className="text-xs font-mono text-default-400 border border-default-200/20 px-2 py-1 rounded-md shrink-0">
                                    {new Date(data.started_at).getFullYear()}
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-default-500 line-clamp-2 leading-relaxed">
                            {data.description}
                        </p>

                        {/* Tags / Tech Stack */}
                        <div className="w-full pt-4 mt-auto flex flex-wrap gap-2">
                            {/* Assuming data.tags or data.project_tags is an array */}
                            {data.services?.slice(0, 3).map((service, i) => (
                                <Chip
                                    key={i}
                                    size="sm"
                                    variant="flat"
                                    classNames={{
                                        base: 'bg-default-100/50 hover:bg-default-200/50 transition-colors border border-transparent hover:border-default-200/50',
                                        content:
                                            'text-default-500 text-xs font-medium',
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
