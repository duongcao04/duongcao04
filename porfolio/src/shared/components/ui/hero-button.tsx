'use client'

import React, { forwardRef } from 'react'

import {
    Button,
    ButtonProps,
    TooltipProps,
    extendVariants,
} from '@heroui/react'

import { Link, LinkProps } from '@/i18n/navigation'

import { HeroTooltip } from './hero-tooltip'

// 1. Define the Styled Component
const StyledButton = extendVariants(Button, {
    variants: {
        color: {
            blue: 'bg-blue-500 text-white hover:shadow-xs shadow-lg shadow-blue-500/40 data-[hover=true]:bg-blue-600',
            warning:
                'bg-orange-500 text-white hover:shadow-xs shadow-lg shadow-orange-500/40 data-[hover=true]:bg-orange-600',
            danger: 'bg-red-500 text-white hover:shadow-xs shadow-lg shadow-danger/20 data-[hover=true]:bg-red-600',
            success:
                'bg-green-500 text-white hover:shadow-xs shadow-lg shadow-green-500/40 data-[hover=true]:bg-green-600',
            default: 'bg-default-100', // Ensure default exists
            primary: 'bg-primary',
            secondary: 'bg-secondary',
        },
        size: {
            xs: 'px-2 min-w-6 h-6 text-tiny gap-1 rounded-small',
            sm: 'px-3 min-w-16 h-8 text-small gap-2 rounded-small',
            md: 'px-4 min-w-20 h-10 text-medium gap-2 rounded-medium',
            lg: 'px-6 min-w-24 h-12 text-large gap-3 rounded-large',
        },
    },
    defaultVariants: {
        color: 'default',
    },
})

// 2. Define Props
// We omit the original color/size to strictly type our custom variants
type HeroButtonProps = Omit<ButtonProps, 'color' | 'size'> & {
    size?: 'xs' | 'sm' | 'md' | 'lg'
    color?:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'danger'
        | 'blue'
    tooltip?: React.ReactNode
    tooltipProps?: TooltipProps
    href?: string
    linkProps?: Omit<LinkProps, 'href'>
}

// 3. Create the Component with forwardRef
export const HeroButton = forwardRef<HTMLButtonElement, HeroButtonProps>(
    (props, ref) => {
        const { tooltip, tooltipProps, href, linkProps, ...buttonProps } = props

        // Step 1: Create the Base Button
        // We pass the ref here so the parent can control the button DOM element
        let content = <StyledButton ref={ref as never} {...buttonProps} />

        // Step 2: Wrap in Link if href exists
        // Note: We do not pass the button ref to the Link, but to the Button itself above
        if (href) {
            content = (
                <Link href={href} {...linkProps}>
                    {content}
                </Link>
            )
        }

        // Step 3: Wrap in Tooltip if tooltip exists
        if (tooltip) {
            content = (
                <HeroTooltip
                    content={tooltip as TooltipProps['content']}
                    {...tooltipProps}
                >
                    {content}
                </HeroTooltip>
            )
        }

        return content
    }
)

// Display name for dev tools
HeroButton.displayName = 'HeroButton'
