import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import { createClient } from '@/lib/supabase/server'

// 2. Dynamic Metadata (SEO)
// Fetches the specific project details for the <head> tags
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const supabase = createClient()

    const { data: project } = await supabase
        .from('projects')
        .select('title, description, thumbnail_url')
        .eq('slug', slug)
        .single()

    if (!project) {
        return {
            title: 'Project Not Found | Cao Hai Duong',
            description: 'The project you are looking for does not exist.',
        }
    }

    return {
        title: `${project.title} | Cao Hai Duong`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description || 'Project Case Study',
            images: project.thumbnail_url ? [project.thumbnail_url] : [],
            type: 'article',
        },
    }
}

// 3. The Layout UI
export default function WorkDetailLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <div className="min-h-screen w-full bg-background text-text-default relative overflow-x-hidden">
            {/* --- AMBIENT BACKGROUND --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Purple Orb */}
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[120px]" />

                {/* Blue Orb */}
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-[120px]" />

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            </div>

            {/* Content Content */}
            <div className="relative z-10">{children}</div>
        </div>
    )
}
