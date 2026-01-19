'use client'

import React from 'react'

import { Card, CardBody } from '@heroui/react'
import { motion } from 'framer-motion'
import { Hash } from 'lucide-react'

import { ScrollArea, ScrollBar } from '@/shared/components'

import { TocItem } from '../hooks/use-html-parser'

// Adjust import path

interface TableOfContentsProps {
    toc: TocItem[]
    activeId: string
}

export const TableOfContents = ({ toc, activeId }: TableOfContentsProps) => {
    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Offset for sticky navbar
                behavior: 'smooth',
            })
        }
    }

    if (toc.length === 0) return null

    return (
        <Card className="bg-background backdrop-blur-md border border-border-default shadow-sm">
            <CardBody className="p-6">
                <div className="flex items-center gap-2 mb-2 text-primary">
                    <Hash size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">
                        Table of Contents
                    </span>
                </div>

                <ScrollArea className="w-full h-175 pr-2">
                    <ScrollBar orientation="horizontal" />
                    <ScrollBar orientation="vertical" />
                    <nav className="flex flex-col gap-1 text-wrap!">
                        {toc.map((item) => (
                            <motion.a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(e, item.id)}
                                initial={false}
                                animate={{
                                    paddingLeft: activeId === item.id ? 16 : 0,
                                    color:
                                        activeId === item.id
                                            ? '#fff'
                                            : '#71717a',
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                }}
                                className={`
                        relative text-sm py-2 block transition-colors duration-200
                        ${item.level > 2 ? 'ml-4 text-xs' : ''} 
                        ${activeId === item.id ? 'font-medium' : 'hover:text-zinc-300'}
                      `}
                            >
                                {/* Active Indicator Line */}
                                {activeId === item.id && (
                                    <motion.div
                                        layoutId="active-toc-indicator"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary rounded-full"
                                    />
                                )}
                                <span className="truncate block">
                                    {item.text}
                                </span>
                            </motion.a>
                        ))}
                    </nav>
                </ScrollArea>
            </CardBody>
        </Card>
    )
}
