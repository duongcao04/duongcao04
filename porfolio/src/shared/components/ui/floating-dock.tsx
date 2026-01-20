'use client'

import {
    HomeIcon,
    LayoutGridIcon,
    PenToolIcon,
    StoreIcon,
    UserIcon,
    WrenchIcon,
} from 'lucide-react'

import { HeroButton } from './hero-button'
import { HeroTooltip } from './hero-tooltip'

export const FloatingDock = () => {
    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg border border-default-200/50">
                <DockItem icon={<HomeIcon size={20} />} tooltip="Trang chủ" />
                <DockItem
                    icon={<LayoutGridIcon size={20} />}
                    tooltip="Danh mục"
                />
                <DockItem
                    icon={<WrenchIcon size={20} />}
                    tooltip="Công cụ"
                    active
                />
                <DockItem icon={<PenToolIcon size={20} />} tooltip="Blog" />
                <DockItem icon={<StoreIcon size={20} />} tooltip="Cửa hàng" />
                <div className="w-px h-6 bg-default-300 mx-1"></div>
                <DockItem icon={<UserIcon size={20} />} tooltip="Tài khoản" />
            </div>
        </div>
    )
}
// Helper Component cho Dock Items
const DockItem = ({
    icon,
    tooltip,
    active = false,
}: {
    icon: React.ReactNode
    tooltip: string
    active?: boolean
}) => (
    <HeroTooltip content={tooltip} placement="top" offset={10}>
        <HeroButton
            isIconOnly
            radius="full"
            variant={active ? 'solid' : 'light'}
            color={active ? 'primary' : 'default'}
            className={`w-10 h-10 transition-transform hover:scale-110 ${!active ? 'text-default-500 hover:text-foreground hover:bg-default-100' : ''}`}
        >
            {icon}
        </HeroButton>
    </HeroTooltip>
)
