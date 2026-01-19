'use client'

import React from 'react'

import { Button, Card, CardBody, Chip, Divider, Image } from '@heroui/react'
import parse from 'html-react-parser'
import {
    ArrowLeftIcon,
    CalendarIcon,
    CheckCircleIcon,
    ExternalLinkIcon,
    GithubIcon,
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { INTERNAL_URLS } from '../../../../../lib'

// <--- 1. Import Parser

// --- EXTENDED MOCK DATA (With HTML Content) ---
const PROJECTS_DATA = [
    {
        slug: 'csd-governance',
        title: 'CSD Governance System',
        category: 'Systems',
        role: 'Lead Developer',
        date: 'Oct 2025 - Present',
        client: 'Internal Tool',
        description:
            'A comprehensive ERP solution designed to streamline HR management, centralized brand asset distribution, and automate internal workflows.',
        // 2. HTML Content Example
        longDescription: `
      The <strong>CSD Governance System</strong> was born out of a need to unify fragmented internal processes. 
      <br/><br/>
      Previously, HR data, brand assets, and project files were scattered across different drives and spreadsheets. 
      This system centralizes everything into a single, <em>role-based dashboard</em>.
    `,
        challenge: `
      The main challenge was handling complex permission levels (<strong>RBAC</strong>) while ensuring the interface remained simple for non-technical staff. 
      <br/>
      Additionally, real-time synchronization for the asset library was critical.
    `,
        solution:
            'We utilized <strong>NestJS</strong> for a robust backend architecture and <strong>TanStack Query</strong> on the frontend to manage server state efficiently.',
        features: [
            'Role-Based Access Control (RBAC)',
            'Real-time Notification System',
            'Automated Payroll Calculation',
            'Centralized Brand Asset Library',
        ],
        image: 'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768814466/Yangisdev/Projects/StaffCadsquad_exgcfc.png',
        tags: [
            'Next.js',
            'NestJS',
            'Docker',
            'TanStack',
            'Prisma',
            'PostgreSQL',
        ],
        links: {
            demo: '#',
            repo: '#',
        },
    },
    {
        slug: 'cadsquad-official',
        title: 'Cadsquad.vn Official',
        category: 'Landing Page',
        role: 'Frontend Developer',
        date: 'Dec 2025',
        client: 'Cadsquad',
        description:
            'Official service landing page for mechanical design and 3D digitization services.',
        longDescription: `
      A high-performance landing page built to showcase <strong>3D mechanical engineering portfolios</strong>. 
      <br/><br/>
      The site features heavy image optimization and smooth scroll animations to keep users engaged.
    `,
        challenge:
            'Achieving a perfect Google Lighthouse score while loading high-resolution 3D renders was the primary bottleneck.',
        solution:
            'Leveraged Next.js Image Optimization and lazy-loading techniques. <strong>Framer Motion</strong> was used for scroll-triggered animations.',
        features: [
            'Multi-language Support (i18n)',
            'SEO Optimized Structure',
            'Responsive 3D Model Viewer',
            'Fast Load Times (Lighthouse 95+)',
        ],
        image: 'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768813487/Yangisdev/Projects/Cadsquad_ekxdr9.jpg',
        tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO'],
        links: {
            demo: 'https://www.cadsquad.vn/vi',
            repo: null,
        },
    },
    {
        slug: 'bloboff-cloud',
        title: 'BlobOff Cloud',
        category: 'Cloud Security',
        role: 'Full Stack',
        date: 'Jan 2026',
        client: 'BlobOff',
        description:
            'A quantum-resistant personal data vault that remains offline by default.',
        longDescription:
            'BlobOff Cloud introduces a <strong>"Deep Sleep"</strong> architecture where user data remains physically disconnected from the internet until requested via a separate secure channel.',
        challenge:
            'Creating a secure "wake-on-lan" mechanism over the public internet without exposing the server IP.',
        solution:
            ' implemented a <strong>Zero-Trust Tunnel</strong> architecture.',
        features: [
            'Quantum Safe Encryption',
            'Deep Sleep Mode',
            'Offline-First',
        ],
        image: 'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768814302/Yangisdev/Projects/BlobOff_bigw3e.png',
        tags: [
            'Cybersecurity',
            'Green Energy',
            'Quantum Safe',
            'Offline-First',
        ],
        links: { demo: 'https://bloboff.cloud/', repo: null },
    },
]

export default function WorkDetailPage() {
    const params = useParams()
    const slug = params?.slug

    const project = PROJECTS_DATA.find((p) => p.slug === slug)

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-text-default">
                Project not found
            </div>
        )
    }

    return (
        <div className="min-h-screen w-full bg-background text-text-default selection:bg-purple-500 selection:text-white relative pb-24 overflow-hidden">
            {/* Background Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 pt-32 relative z-10 max-w-5xl">
                {/* --- NAVIGATION --- */}
                <Link href={INTERNAL_URLS.work}>
                    <Button
                        variant="light"
                        className="text-default-subdued mb-8 gap-2"
                        startContent={<ArrowLeftIcon size={18} />}
                    >
                        Back to All Projects
                    </Button>
                </Link>

                {/* --- HEADER SECTION --- */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-3 mb-4">
                        <Chip
                            variant="flat"
                            classNames={{
                                base: 'bg-primary-500/20 border border-purple-500/20',
                            }}
                        >
                            {project.category}
                        </Chip>
                        <span className="text-text-subdued text-sm flex items-center gap-1">
                            <CalendarIcon size={14} /> {project.date}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        {project.title}
                    </h1>

                    <div className="text-xl text-default-400 max-w-3xl leading-relaxed">
                        {/* Using Parse for the short description if it has HTML, otherwise simple render is fine */}
                        {project.description}
                    </div>

                    <div className="flex gap-4 mt-8">
                        {project.links.demo && (
                            <Button
                                as="a"
                                href={project.links.demo}
                                target="_blank"
                                className="bg-white text-black font-semibold"
                                endContent={<ExternalLinkIcon size={18} />}
                                radius="full"
                            >
                                Live Demo
                            </Button>
                        )}
                        {project.links.repo && (
                            <Button
                                as="a"
                                href={project.links.repo}
                                target="_blank"
                                variant="bordered"
                                className="border-white/20 text-white hover:bg-white/5"
                                startContent={<GithubIcon size={18} />}
                                radius="full"
                            >
                                Source Code
                            </Button>
                        )}
                    </div>
                </div>

                {/* --- HERO IMAGE --- */}
                <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 relative group">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        removeWrapper
                        classNames={{
                            img: 'w-full h-full object-cover',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] to-transparent opacity-20 pointer-events-none" />
                </div>

                {/* --- CONTENT GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* LEFT COL: Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">
                                Overview
                            </h2>
                            {/* 3. PARSING HTML HERE */}
                            <div className="text-default-400 leading-relaxed text-lg space-y-4">
                                {parse(project.longDescription)}
                            </div>
                        </section>

                        <Divider className="bg-white/10" />

                        {/* Challenge & Solution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="bg-red-500/5 border border-red-500/10">
                                <CardBody className="p-6">
                                    <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center gap-2">
                                        The Challenge
                                    </h3>
                                    {/* 3. PARSING HTML HERE */}
                                    <div className="text-default-400 text-sm leading-relaxed">
                                        {parse(project.challenge)}
                                    </div>
                                </CardBody>
                            </Card>

                            <Card className="bg-emerald-500/5 border border-emerald-500/10">
                                <CardBody className="p-6">
                                    <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                                        The Solution
                                    </h3>
                                    {/* 3. PARSING HTML HERE */}
                                    <div className="text-default-400 text-sm leading-relaxed">
                                        {parse(project.solution)}
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        {/* Key Features List */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">
                                Key Features
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                                    >
                                        <CheckCircleIcon
                                            className="text-purple-500 shrink-0 mt-0.5"
                                            size={20}
                                        />
                                        <span className="text-default-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* RIGHT COL: Sidebar Info */}
                    <div className="space-y-8">
                        <Card className="bg-white/5 border border-white/10 backdrop-blur-md">
                            <CardBody className="p-6 space-y-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-default-500 uppercase tracking-wider mb-2">
                                        Role
                                    </h4>
                                    <p className="text-white font-medium">
                                        {project.role}
                                    </p>
                                </div>
                                <Divider className="bg-white/10" />
                                <div>
                                    <h4 className="text-sm font-semibold text-default-500 uppercase tracking-wider mb-2">
                                        Client
                                    </h4>
                                    <p className="text-white font-medium">
                                        {project.client}
                                    </p>
                                </div>
                                <Divider className="bg-white/10" />
                                <div>
                                    <h4 className="text-sm font-semibold text-default-500 uppercase tracking-wider mb-3">
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Chip
                                                key={tag}
                                                size="sm"
                                                variant="flat"
                                                className="bg-white/10 text-default-300"
                                            >
                                                {tag}
                                            </Chip>
                                        ))}
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 text-center">
                            <h4 className="text-white font-bold mb-2">
                                Need something similar?
                            </h4>
                            <p className="text-default-400 text-sm mb-4">
                                I can help build your next big idea.
                            </p>
                            <Link href="/contact">
                                <Button
                                    size="sm"
                                    className="bg-white text-black font-medium w-full"
                                >
                                    Let's Talk
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- FOOTER NAV --- */}
                <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center text-sm text-default-400">
                    <span>© 2026 Yangis.dev</span>
                    <Link
                        href="/work"
                        className="hover:text-white transition-colors"
                    >
                        View all projects &rarr;
                    </Link>
                </div>
            </div>
        </div>
    )
}
