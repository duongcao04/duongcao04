'use client'

import { Tooltip, TooltipProps, extendVariants } from '@heroui/react'

// 1. Cấu hình Motion "Quick & Snappy"
// Nhanh, dứt khoát, không nảy (bounce)
const quickTooltipMotion = {
    variants: {
        exit: {
            opacity: 0,
            scale: 0.95, // Thu nhỏ nhẹ khi biến mất
            transition: {
                duration: 0.1, // Biến mất cực nhanh (100ms)
                ease: 'easeIn',
            },
        },
        enter: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.15, // Hiện nhanh (150ms)
                ease: 'easeOut',
            },
        },
    },
}

// 2. Custom Style (Gọn gàng, tối giản)
const StyledTooltip = extendVariants(Tooltip, {
    variants: {
        color: {
            cadsquad: {
                content: [
                    // Background & Text
                    'bg-zinc-900 text-white',
                    'dark:bg-zinc-100 dark:text-zinc-900',

                    // Border & Shadow
                    'border border-transparent dark:border-zinc-200',
                    'shadow-sm',

                    // Typography & Spacing
                    'text-xs font-medium', // Chữ nhỏ, nét vừa
                    'px-2.5 py-1', // Padding gọn
                    'rounded-md',
                ],
                arrow: [
                    'bg-zinc-900 dark:bg-zinc-100', // Màu mũi tên đồng bộ
                ],
            },
        },
    },
    defaultVariants: {
        color: 'cadsquad',
        radius: 'sm',
    },
})

// 3. Wrapper Component
export const HeroTooltip = (props: TooltipProps) => {
    return (
        <StyledTooltip
            // Default settings cho cảm giác "nhanh"
            delay={100} // Delay cực ngắn (tránh hiện nhầm khi lướt chuột qua)
            closeDelay={0} // Đóng ngay lập tức khi chuột rời đi
            offset={8} // Khoảng cách 8px so với vật thể
            showArrow={true} // Mặc định hiện mũi tên cho đẹp
            {...props} // Cho phép override props
            motionProps={props.motionProps || quickTooltipMotion}
        />
    )
}
