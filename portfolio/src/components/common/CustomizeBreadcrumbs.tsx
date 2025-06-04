import { BreadcrumbItem, BreadcrumbItemProps, Breadcrumbs } from '@heroui/react'
import { LucideIcon } from 'lucide-react'

import { Link, LinkProps } from '@/i18n/navigation'

export type BreadcrumbItem = {
    wrapperProps?: BreadcrumbItemProps
    linkProps?: LinkProps
    href: string
    label?: string
    icon?: LucideIcon
}

type Props = {
    data: BreadcrumbItem[]
}
export default function CustomizeBreadcrumbs({ data }: Props) {
    return (
        <Breadcrumbs>
            {data.map((item, index) => (
                <BreadcrumbItem key={index} {...item.wrapperProps}>
                    <Link {...item.linkProps} href={item.href}>
                        {item.label}
                        {item.icon && <item.icon />}
                    </Link>
                </BreadcrumbItem>
            ))}
        </Breadcrumbs>
    )
}
