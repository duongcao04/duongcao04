'use client'

import React, { useState } from 'react'

import {
    Button,
    Chip,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tooltip,
    User,
} from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import {
    Edit2,
    ExternalLink,
    FileTextIcon,
    MoreVertical,
    Plus,
    Search,
} from 'lucide-react'

import { INTERNAL_URLS } from '@/lib'
import { dateFormatter } from '@/lib/dayjs'
import { HeroButton } from '@/shared/components'
import { IPost } from '@/shared/interfaces'
import { postQueries } from '@/shared/queries'

import { deletePost } from './actions'

// Mock columns for your Prisma Schema
const columns = [
    { name: 'POST', uid: 'post' },
    { name: 'STATUS', uid: 'status' },
    { name: 'DATE', uid: 'date' },
    { name: 'ACTIONS', uid: 'actions' },
]

export default function AllPostsPage() {
    const { data } = useQuery({ ...postQueries.list() })
    const posts = data?.data ?? []
    const [filterValue, setFilterValue] = useState('')

    // In a real app, you'd fetch this from a Server Action or useQuery
    // For now, assume data is passed or fetched on mount

    const renderCell = (post: IPost, columnKey: React.Key) => {
        const cellValue = post[columnKey as string]

        switch (columnKey) {
            case 'post':
                return (
                    <User
                        avatarProps={{
                            radius: 'lg',
                            src: post.thumbnail_url,
                            fallback: <FileTextIcon size={20} />,
                        }}
                        description={post.slug}
                        name={post.title}
                        classNames={{ name: 'font-bold' }}
                    >
                        {post.title}
                    </User>
                )
            case 'status':
                return (
                    <Chip
                        className="capitalize border-none gap-1 text-default-600"
                        color={post.is_published ? 'success' : 'warning'}
                        size="sm"
                        variant="flat"
                    >
                        {post.is_published ? 'Published' : 'Draft'}
                    </Chip>
                )
            case 'date':
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small text-default-400">
                            {dateFormatter(post.created_at)}
                        </p>
                    </div>
                )
            case 'actions':
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Tooltip content="Quick Edit">
                            <HeroButton
                                href={INTERNAL_URLS.editPost(post.slug)}
                                isIconOnly
                                size="sm"
                                variant="light"
                                className="text-default-400"
                            >
                                <Edit2 size={16} />
                            </HeroButton>
                        </Tooltip>
                        <Tooltip content="View Live">
                            <HeroButton
                                isIconOnly
                                href={INTERNAL_URLS.postDetail(post.slug)}
                                linkProps={{
                                    target: '_blank',
                                }}
                                size="sm"
                                variant="light"
                                className="text-default-400"
                            >
                                <ExternalLink size={16} />
                            </HeroButton>
                        </Tooltip>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <MoreVertical className="text-text-subdued" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Action menu">
                                <DropdownItem key="edit">
                                    Edit Details
                                </DropdownItem>
                                <DropdownItem
                                    key="delete"
                                    className="text-danger"
                                    color="danger"
                                    onPress={() => deletePost(post.id)}
                                >
                                    Delete Post
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                )
            default:
                return cellValue
        }
    }

    return (
        <div className="space-y-6">
            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">The Journal</h1>
                    <p className="text-default-400 text-sm">
                        Manage your stories and insights.
                    </p>
                </div>
                <HeroButton
                    href={INTERNAL_URLS.createPost}
                    color="primary"
                    startContent={<Plus size={18} />}
                    className="font-bold"
                >
                    Create New Post
                </HeroButton>
            </div>

            {/* --- FILTERS --- */}
            <div className="flex justify-between items-center">
                <Input
                    isClearable
                    className="w-full sm:max-w-[44%]"
                    placeholder="Search posts by title or slug..."
                    startContent={
                        <Search size={18} className="text-default-300" />
                    }
                    value={filterValue}
                    onValueChange={setFilterValue}
                    variant="bordered"
                />
                <div className="flex gap-3">
                    <Button variant="flat" size="sm">
                        All
                    </Button>
                    <Button variant="flat" size="sm">
                        Published
                    </Button>
                    <Button variant="flat" size="sm">
                        Drafts
                    </Button>
                </div>
            </div>

            {/* --- TABLE --- */}
            <Table
                aria-label="Posts management table"
                className="bg-background-muted backdrop-blur-md rounded-3xl border border-border-muted p-4"
                removeWrapper
            >
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={
                                column.uid === 'actions' ? 'center' : 'start'
                            }
                            className="bg-transparent border-b border-border-default text-text-subdued font-bold"
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={'No posts found.'} items={posts}>
                    {(item) => (
                        <TableRow
                            key={item.id}
                            className="border-b border-border-muted last:border-none hover:bg-background-hovered transition-colors"
                        >
                            {(columnKey) => (
                                <TableCell>
                                    {renderCell(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* --- PAGINATION --- */}
            <div className="flex justify-between items-center px-2">
                <span className="text-small text-default-400">
                    Total {posts.length} posts
                </span>
                <Pagination
                    isCompact
                    showControls
                    color="primary"
                    page={1}
                    total={10}
                    variant="flat"
                />
            </div>
        </div>
    )
}
