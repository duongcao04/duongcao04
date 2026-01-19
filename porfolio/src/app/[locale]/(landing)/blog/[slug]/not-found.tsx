'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { ArrowLeft, DatabaseZap } from 'lucide-react'

import { INTERNAL_URLS } from '@/lib'
import { HeroButton } from '@/shared/components'

// --- CUSTOM SVG COMPONENT ---
// Represents a "Missing Module" in a technical structure
const DeconstructedCube = () => (
    <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-zinc-800 dark:text-zinc-200"
    >
        {/* Base Grid - Subtle */}
        <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            d="M20 100H180 M100 20V180"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
        />

        {/* The Cube Outline (Solid) */}
        <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            d="M100 40 L160 70 L160 140 L100 170 L40 140 L40 70 Z"
            stroke="currentColor"
            strokeWidth="2"
        />

        {/* Internal Lines (Giving it 3D depth) */}
        <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            d="M100 170 V 100 M100 100 L 160 70 M100 100 L 40 70"
            stroke="currentColor"
            strokeWidth="2"
        />

        {/* The "Missing" Piece / Glitch Effect (Orange Accent) */}
        <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
            }}
        >
            <path
                d="M85 85 L115 115 M115 85 L85 115"
                stroke="#F97316" // Orange-500
                strokeWidth="4"
                strokeLinecap="round"
            />
            <circle
                cx="100"
                cy="100"
                r="25"
                stroke="#F97316"
                strokeWidth="2"
                strokeDasharray="4 4"
            />
        </motion.g>
    </svg>
)

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 selection:bg-orange-500/30 font-sans overflow-hidden">
            {/* --- TECHNICAL BACKGROUND --- */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,black)]"></div>
            </div>

            <div className="container max-w-lg mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* --- ILLUSTRATION --- */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-48 h-48 mb-8 relative"
                >
                    {/* Glowing backdrop behind SVG */}
                    <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
                    <DeconstructedCube />
                </motion.div>

                {/* --- TYPOGRAPHY --- */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-mono tracking-widest uppercase">
                            Error 404
                        </span>
                        <span className="h-px w-10 bg-zinc-800"></span>
                        <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
                            Null_Reference
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Project Not Found
                    </h1>

                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        The project you are looking for has been{' '}
                        <span className="text-zinc-200 font-medium">
                            permanently deleted
                        </span>
                        , removed, or the link is broken.
                    </p>

                    {/* --- ACTION BUTTONS --- */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                        <HeroButton
                            href={INTERNAL_URLS.work}
                            variant="flat"
                            className="bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors w-full sm:w-auto min-w-35"
                            startContent={<ArrowLeft size={18} />}
                            size="lg"
                        >
                            Back to Work
                        </HeroButton>

                        <HeroButton
                            href={INTERNAL_URLS.home}
                            className="bg-orange-600 text-white font-semibold shadow-lg shadow-orange-900/20 hover:bg-orange-500 transition-all w-full sm:w-auto min-w-35"
                            startContent={<DatabaseZap size={18} />}
                            size="lg"
                        >
                            System Home
                        </HeroButton>
                    </div>
                </motion.div>
            </div>

            {/* --- FOOTER STATUS BAR --- */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zinc-900 bg-zinc-950/50 backdrop-blur-sm flex justify-between items-center text-[10px] text-zinc-600 font-mono uppercase tracking-wider">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Status: Disconnected</span>
                </div>
                <div>ID: {new Date().getFullYear()}-MISSING-DATA</div>
            </div>
        </div>
    )
}
