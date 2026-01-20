'use client'

import {
    Avatar,
    Badge,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarContent,
} from '@heroui/react'
import { Bell, LogOut, Search, Settings, User } from 'lucide-react'

export function AdminHeader() {
    return (
        <Navbar
            isBordered
            maxWidth="full"
            position="sticky"
            className="h-16 bg-background backdrop-blur-md border-b border-border-default"
            classNames={{ wrapper: 'px-6' }}
        >
            {/* Search Bar / Left Side */}
            <NavbarContent className="hidden md:flex">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-muted border border-border-muted text-text-subdued hover:border-border-default cursor-pointer transition-all">
                    <Search size={16} />
                    <span className="text-xs pr-8">Search admin...</span>
                    <kbd className="text-[10px] font-mono bg-background-hovered px-1.5 py-0.5 rounded">
                        ⌘K
                    </kbd>
                </div>
            </NavbarContent>

            {/* Right Side Actions */}
            <NavbarContent justify="end" className="gap-4">
                <Badge
                    content="3"
                    color="danger"
                    size="sm"
                    shape="circle"
                    variant="shadow"
                >
                    <Button isIconOnly variant="light" radius="full" size="sm">
                        <Bell size={20} className="text-default-500" />
                    </Button>
                </Badge>

                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="primary"
                            name="Cao Hai Duong"
                            size="sm"
                            src="https://avatars.githubusercontent.com/u/1234567" // Use your actual avatar
                            classNames={{
                                base: 'cursor-pointer',
                            }}
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem
                            key="profile"
                            startContent={<User size={16} />}
                        >
                            My Profile
                        </DropdownItem>
                        <DropdownItem
                            key="settings"
                            startContent={<Settings size={16} />}
                        >
                            Settings
                        </DropdownItem>
                        <DropdownItem
                            key="logout"
                            color="danger"
                            className="text-danger"
                            startContent={<LogOut size={16} />}
                        >
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}
