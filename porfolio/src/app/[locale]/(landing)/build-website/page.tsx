'use client'

import {
    Accordion,
    AccordionItem,
    Button,
    Card,
    CardBody,
    Chip,
} from '@heroui/react'
import {
    ArrowRight,
    CheckCircle2,
    Rocket,
    Search,
    ShieldCheck,
    Zap,
} from 'lucide-react'
import Link from 'next/link'

import { INTERNAL_URLS } from '@/lib'
import { MotionDiv, MotionH1, MotionP } from '@/lib/motion'
import { BentoGrid, BentoGridItem, HeroButton } from '@/shared/components'

export default function BuildWebsitePage() {
    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
            {/* --- AMBIENT BACKGROUND (Matching your Layout) --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 space-y-32">
                {/* 1. HERO SECTION */}
                <section className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-sm font-medium"
                    >
                        <Rocket size={16} />
                        <span>Accepting New Clients for 2026</span>
                    </MotionDiv>

                    <MotionH1
                        className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground/90 to-default-500 leading-[1.1]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Websites that drive <br className="hidden md:block" />
                        <span className="pt-1 text-primary font-pacifico font-normal tracking-widest">
                            Digital Momentum.
                        </span>
                    </MotionH1>

                    <MotionP
                        className="text-xl text-default-500 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Stop losing customers to slow loading times. I build
                        ultra-fast, SEO-optimized websites using Next.js and
                        Cloudflare that convert visitors into revenue.
                    </MotionP>

                    <MotionDiv
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <HeroButton
                            size="lg"
                            color="primary"
                            className="font-semibold shadow-lg shadow-primary-500/20"
                            endContent={<ArrowRight size={20} />}
                            href={INTERNAL_URLS.contact}
                        >
                            Start Your Project
                        </HeroButton>
                        <Link href="/work">
                            <Button
                                size="lg"
                                variant="bordered"
                                className="bg-background/50 backdrop-blur-md"
                            >
                                View Portfolio
                            </Button>
                        </Link>
                    </MotionDiv>
                </section>

                {/* 2. THE "WHY" (Bento Grid) */}
                <section>
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why build with me?
                        </h2>
                        <p className="text-default-500">
                            The modern web demands performance. Here is my
                            standard.
                        </p>
                    </div>

                    <BentoGrid>
                        {/* Speed - Big Block */}
                        <BentoGridItem className="md:col-span-2 md:row-span-2 bg-linear-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                            <div className="p-8 flex flex-col h-full justify-between min-h-75">
                                <div className="space-y-2">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mb-4">
                                        <Zap size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold">
                                        Blazing Fast Performance
                                    </h3>
                                    <p className="text-default-500">
                                        Google Core Web Vitals optimization.
                                        100/100 Lighthouse scores ensure your
                                        users never wait and Google loves your
                                        site.
                                    </p>
                                </div>
                                <div className="mt-8 relative h-32 w-full bg-background/50 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
                                    <span className="text-4xl font-mono font-bold text-green-500">
                                        99/100
                                    </span>
                                </div>
                            </div>
                        </BentoGridItem>

                        {/* SEO */}
                        <BentoGridItem className="md:col-span-1 bg-zinc-900/5 dark:bg-zinc-900/50 border-white/5">
                            <div className="p-6 flex flex-col h-full">
                                <Search
                                    className="text-purple-500 mb-4"
                                    size={24}
                                />
                                <h3 className="text-xl font-bold mb-2">
                                    SEO Native
                                </h3>
                                <p className="text-sm text-default-500">
                                    Server-side rendering (SSR) and semantic
                                    HTML structure meant for ranking.
                                </p>
                            </div>
                        </BentoGridItem>

                        {/* Security */}
                        <BentoGridItem className="md:col-span-1 bg-zinc-900/5 dark:bg-zinc-900/50 border-white/5">
                            <div className="p-6 flex flex-col h-full">
                                <ShieldCheck
                                    className="text-emerald-500 mb-4"
                                    size={24}
                                />
                                <h3 className="text-xl font-bold mb-2">
                                    Enterprise Security
                                </h3>
                                <p className="text-sm text-default-500">
                                    Protected by Cloudflare&apos;s global edge
                                    network against DDoS and attacks.
                                </p>
                            </div>
                        </BentoGridItem>

                        {/* Tech Stack - Wide */}
                        <BentoGridItem className="md:col-span-3 bg-zinc-900/5 dark:bg-zinc-900/50 border-white/5">
                            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Modern Stack Only
                                    </h3>
                                    <p className="text-default-500">
                                        I don&apos;t use bloated page builders.
                                        I write clean code.
                                    </p>
                                </div>
                                <div className="flex gap-3 flex-wrap justify-center">
                                    {[
                                        'Next.js 14',
                                        'React',
                                        'TypeScript',
                                        'Tailwind',
                                        'Supabase',
                                        'Framer Motion',
                                    ]?.map((tech) => (
                                        <Chip
                                            key={tech}
                                            variant="flat"
                                            className="bg-default-100"
                                        >
                                            {tech}
                                        </Chip>
                                    ))}
                                </div>
                            </div>
                        </BentoGridItem>
                    </BentoGrid>
                </section>

                {/* 3. PRICING PACKAGES */}
                <section>
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Transparent Pricing
                        </h2>
                        <p className="text-default-500">
                            Invest in a digital asset, not just a webpage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Starter */}
                        <PricingCard
                            title="Landing Page"
                            price="$500"
                            description="Perfect for personal brands or single product launches."
                            features={[
                                'One-Page Conversion Layout',
                                'Mobile Responsive',
                                'Fast Next.js Static Build',
                                'Contact Form Integration',
                                '1 Week Delivery',
                            ]}
                        />
                        {/* Pro */}
                        <PricingCard
                            title="Business Website"
                            price="$1,200"
                            isPopular
                            description="A complete multi-page presence for growing businesses."
                            features={[
                                'Up to 5 Pages',
                                'CMS Integration (Blog)',
                                'SEO Optimization Setup',
                                'Google Analytics & Maps',
                                'Animation & Motion Effects',
                                '2 Weeks Delivery',
                            ]}
                        />
                        {/* Custom */}
                        <PricingCard
                            title="Web Application"
                            price="Custom"
                            description="Complex functionality, SaaS, or E-commerce solutions."
                            features={[
                                'User Authentication',
                                'Database Integration (Supabase)',
                                'Payment Gateway (Stripe)',
                                'Admin Dashboard',
                                'API Development',
                                'Priority Support',
                            ]}
                        />
                    </div>
                </section>

                {/* 4. FAQ */}
                <section className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Common Questions
                    </h2>
                    <Accordion selectionMode="multiple" variant="splitted">
                        <AccordionItem
                            key="1"
                            aria-label="Accordion 1"
                            title="Why Next.js over WordPress?"
                        >
                            Next.js offers superior speed, security, and
                            scalability. Unlike WordPress, it doesn&apos;t rely
                            on heavy plugins that slow down your site and create
                            security vulnerabilities. It&apos;s the technology
                            used by Netflix, TikTok, and Nike.
                        </AccordionItem>
                        <AccordionItem
                            key="2"
                            aria-label="Accordion 2"
                            title="Do you handle hosting?"
                        >
                            Yes. I deploy sites on Vercel or VPS (Coolify),
                            ensuring global CDN distribution via Cloudflare for
                            instant load times anywhere in the world.
                        </AccordionItem>
                        <AccordionItem
                            key="3"
                            aria-label="Accordion 3"
                            title="Will I be able to edit content?"
                        >
                            Absolutely. For business sites, I integrate a
                            Headless CMS (like Sanity or Strapi) so you can edit
                            text and images without touching a line of code.
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* 5. FINAL CTA */}
                <section className="relative rounded-3xl overflow-hidden border border-border-default bg-linear-to-br from-primary-900/50 to-background p-12 text-center">
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Ready to build something extraordinary?
                        </h2>
                        <p className="text-xl text-text-subdued max-w-2xl mx-auto">
                            Let&apos;s turn your vision into a high-performance
                            reality.
                        </p>
                        <Button
                            size="lg"
                            className="bg-white text-black font-bold text-lg px-8"
                            endContent={<ArrowRight />}
                        >
                            Book a Free Consultation
                        </Button>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary-500/20 blur-[100px] rounded-full" />
                </section>
            </div>
        </div>
    )
}

// --- SUB-COMPONENT: Pricing Card ---
function PricingCard({
    title,
    price,
    description,
    features,
    isPopular = false,
}: {
    title: string
    price: string
    description: string
    features: string[]
    isPopular?: boolean
}) {
    return (
        <Card
            className={`
            p-6 h-full border 
            ${isPopular ? 'border-primary-500/50 bg-primary-500/5' : 'border-white/10 bg-white/5'}
            backdrop-blur-md relative 
        `}
            style={{ overflow: 'auto' }}
        >
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Chip color="primary" variant="shadow" size="sm">
                        Most Popular
                    </Chip>
                </div>
            )}
            <CardBody className="space-y-6">
                <div>
                    <h3 className="text-xl font-semibold text-default-500">
                        {title}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-4xl font-bold text-foreground">
                            {price}
                        </span>
                        {price !== 'Custom' && (
                            <span className="text-default-400">/project</span>
                        )}
                    </div>
                    <p className="text-sm text-default-400 mt-2">
                        {description}
                    </p>
                </div>

                <div className="w-full h-px bg-white/10" />

                <ul className="space-y-3">
                    {features?.map((feature: string, i: number) => (
                        <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-default-300"
                        >
                            <CheckCircle2
                                size={18}
                                className="text-primary-500 shrink-0 mt-0.5"
                            />
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-6">
                    <Button
                        className="w-full font-medium"
                        color={isPopular ? 'primary' : 'default'}
                        variant={isPopular ? 'solid' : 'flat'}
                    >
                        Choose {title}
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}
