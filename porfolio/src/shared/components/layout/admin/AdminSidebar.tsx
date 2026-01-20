'use client'

import { cn } from '@heroui/react'
import {
    FileText,
    Image as ImageIcon,
    Layers,
    LayoutDashboard,
    Monitor,
    PlusCircle,
    Tag,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { INTERNAL_URLS } from '@/lib'

const navItems = [
    { name: 'Dashboard', href: INTERNAL_URLS.dashboard, icon: LayoutDashboard },
    { name: 'All Posts', href: INTERNAL_URLS.managePosts, icon: FileText },
    { name: 'Projects', href: '/admin/project', icon: Layers },
    { name: 'Categories', href: '/admin/category', icon: Tag },
    { name: 'Media Library', href: '/admin/media', icon: ImageIcon },
]

export function AdminSidebar() {
    const pathname = usePathname()
    console.log(pathname)

    return (
        <aside className="w-64 hidden lg:flex flex-col fixed inset-y-0 left-0 z-50 bg-background backdrop-blur-xl border-r border-border-default">
            {/* Logo Section */}
            <div className="p-6">
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-primary-500 flex items-center justify-center text-white font-bold">
                        Y
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        Yangis Admin
                    </span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-1.5 mt-4">
                <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-default-400">
                    Main Menu
                </p>
                {navItems.map((item) => {
                    const isActive =
                        pathname.split('/').at(-1) ===
                        item.href.split('/').at(-1)

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group',
                                isActive
                                    ? 'bg-primary-200 text-primary-500 border border-primary-500/20'
                                    : 'text-default-500 hover:bg-background-hovered hover:text-foreground border border-transparent'
                            )}
                        >
                            <item.icon
                                size={20}
                                className={cn(
                                    isActive
                                        ? 'text-primary'
                                        : 'group-hover:text-foreground'
                                )}
                            />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            {/* Quick Actions Footer */}
            <div className="p-4 border-t border-white/5 space-y-2">
                <Link href={INTERNAL_URLS.createPost}>
                    <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors">
                        <PlusCircle size={16} />
                        New Post
                    </button>
                </Link>
                <Link href="/" target="_blank">
                    <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-white/10 text-default-400 font-medium text-sm hover:bg-white/5 transition-colors">
                        <Monitor size={16} />
                        View Site
                    </button>
                </Link>
            </div>
        </aside>
    )
}
