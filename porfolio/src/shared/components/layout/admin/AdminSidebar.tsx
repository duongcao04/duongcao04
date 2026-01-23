import { Link, useLocation } from '@tanstack/react-router'
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

import { INTERNAL_URLS } from '@/lib'

const navItems = [
    { name: 'Dashboard', href: INTERNAL_URLS.dashboard, icon: LayoutDashboard },
    { name: 'All Posts', href: INTERNAL_URLS.managePosts, icon: FileText },
    { name: 'Projects', href: '/admin/project', icon: Layers },
    { name: 'Categories', href: '/admin/category', icon: Tag },
    { name: 'Media Library', href: '/admin/media', icon: ImageIcon },
]

export function AdminSidebar() {
    const location = useLocation()
    const pathname = location.pathname

    return (
        <aside className="w-64 hidden lg:flex flex-col fixed inset-y-0 left-0 z-50 bg-background/80 backdrop-blur-xl border-r border-border-default">
            {/* Logo Section */}
            <div className="p-6">
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20">
                        Y
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        Yangis Admin
                    </span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-1 mt-4">
                <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-default-400">
                    Main Menu
                </p>
                {navItems.map((item) => {
                    // Check if current path starts with item.href to keep parent active for sub-routes
                    const isActive =
                        pathname === item.href ||
                        (item.href !== '/' && pathname.startsWith(item.href))

                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group border',
                                isActive
                                    ? 'bg-primary/10 text-primary border-primary/20'
                                    : 'text-default-500 hover:bg-default-100 hover:text-foreground border-transparent'
                            )}
                        >
                            <item.icon
                                size={20}
                                className={cn(
                                    'transition-colors',
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
            <div className="p-4 border-t border-divider space-y-2">
                <Link to={INTERNAL_URLS.createPost} className="block">
                    <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-foreground text-background font-bold text-sm hover:opacity-90 transition-opacity">
                        <PlusCircle size={16} />
                        New Post
                    </button>
                </Link>
                <a
                    href="https://www.yangis.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-divider text-default-500 font-medium text-sm hover:bg-default-100 transition-colors"
                >
                    <Monitor size={16} />
                    View Site
                </a>
            </div>
        </aside>
    )
}
