import * as React from 'react'
import { Icon } from '@iconify/react'
import Button from '../atoms/Button'
import Link from 'next/link'

export interface INavigate {
    path: string
    icon?: string
    title: string
    label?: string
}

export interface NavbarProps {
    data?: INavigate[]
}
const defaultSocialNavigates: INavigate[] = [
    { path: '#', icon: 'mdi:github', title: 'Github' },
    { path: '#', icon: 'mdi:linkedin', title: 'Linkedin' },
    { path: 'mailto:caohaiduong04@gmail.com', icon: 'fluent:mail-48-filled', title: 'Gmail' },
]

export default function Navbar({ data = defaultSocialNavigates }: NavbarProps) {
    return (
        <div>
            <ul className="flex items-center justify-end gap-3">
                {data.map((item, index) => (
                    <li key={index}>
                        <Button asChild>
                            <Link href={item.path} className="p-2">
                                {item.label && <p>{item.label}</p>}
                                {item.icon && <Icon icon={item.icon} fontSize={32} />}
                            </Link>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
