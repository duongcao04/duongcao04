'use client'

import { useState } from 'react'

import {
    Button,
    Card,
    CardBody,
    Input,
    Select,
    SelectItem,
    Switch,
    Textarea,
    addToast,
} from '@heroui/react'
import { ChevronLeft, Eye, Globe, Save, Settings } from 'lucide-react'

import { INTERNAL_URLS } from '@/lib'
import { HeroButton } from '@/shared/components'
import QuillEditor from '@/shared/components/editor-quill/QuillEditor'

import { createPost } from '../actions'

export default function CreatePostPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [content, setContent] = useState('')

    const onSubmit = async (formData: FormData) => {
        await createPost(formData)
            .then(
                (res) => {
                    addToast({
                        title: 'Create post successfully!',
                        description: JSON.stringify(res),
                        color: 'success',
                    })
                },
                (reject) => {
                    addToast({
                        title: 'Create post failed',
                        description: JSON.stringify(reject),
                        color: 'danger',
                    })
                }
            )
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <form
            action={onSubmit}
            onSubmit={() => setIsLoading(true)}
            className="w-full min-h-screen pb-20 bg-background text-foreground"
        >
            {/* Sync Quill state to native form */}
            <input type="hidden" name="content" value={content} />

            {/* --- STICKY HEADER --- */}
            <div className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl mb-8">
                <div className="px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <HeroButton
                            href={INTERNAL_URLS.managePosts}
                            isIconOnly
                            variant="flat"
                            radius="full"
                            size="sm"
                        >
                            <ChevronLeft size={18} />
                        </HeroButton>
                        <div>
                            <h1 className="text-lg font-bold leading-none">
                                Create Post
                            </h1>
                            <p className="text-xs text-default-400 mt-1">
                                Drafting in The Journal
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="flat" startContent={<Eye size={18} />}>
                            Preview
                        </Button>
                        <Button
                            color="primary"
                            type="submit"
                            isLoading={isLoading}
                            className="font-bold shadow-lg shadow-primary-500/20"
                            startContent={<Save size={18} />}
                        >
                            Publish
                        </Button>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* --- MAIN EDITOR (LEFT) --- */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Title Input Area */}
                        <div className="space-y-4">
                            <Input
                                name="title"
                                placeholder="Post Title"
                                variant="underlined"
                                classNames={{
                                    input: 'text-2xl md:text-3xl font-black placeholder:opacity-20',
                                    inputWrapper:
                                        'border-b-2 border-white/5 h-auto py-4',
                                }}
                            />
                            <div className="flex items-center gap-2">
                                <Globe size={14} />
                                <span className="text-sm">Slug:</span>
                                <Input
                                    name="slug"
                                    variant="flat"
                                    size="sm"
                                    placeholder="url-path-here"
                                    className="w-125 text-text-subdued"
                                    classNames={{ input: 'font-mono' }}
                                />
                            </div>
                        </div>

                        {/* Your Custom Quill Editor */}
                        <QuillEditor
                            value={content}
                            onChange={setContent}
                            classNames={{
                                base: 'shadow-sm border-border-default',
                                wrapper: 'max-w-full px-5',
                                scrollarea: 'h-[calc(100vh-350px)]',
                            }}
                            scrollable
                        />
                    </div>

                    {/* --- SETTINGS SIDEBAR (RIGHT) --- */}
                    <div className="lg:col-span-4 space-y-6">
                        <Card
                            shadow="sm"
                            className="bg-background-muted border-border-default backdrop-blur-md"
                        >
                            <CardBody className="p-6 space-y-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Settings
                                        size={18}
                                        className="text-primary"
                                    />
                                    <h3 className="font-bold">Post Settings</h3>
                                </div>

                                <Textarea
                                    label="Excerpt"
                                    name="excerpt"
                                    placeholder="Brief summary for SEO..."
                                    labelPlacement="outside"
                                    variant="bordered"
                                    minRows={3}
                                />

                                <Select
                                    label="Author"
                                    name="authorId"
                                    labelPlacement="outside"
                                    variant="bordered"
                                    placeholder="Select Author"
                                >
                                    <SelectItem
                                        key="auth_01"
                                        textValue="duongcao"
                                    >
                                        Cao Hai Duong
                                    </SelectItem>
                                </Select>

                                <Select
                                    label="Catalog"
                                    name="catalogs"
                                    labelPlacement="outside"
                                    variant="bordered"
                                    selectionMode="multiple"
                                    placeholder="Select Catalogs"
                                >
                                    <SelectItem key="9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d" textValue="dev">
                                        Development
                                    </SelectItem>
                                    <SelectItem key="1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed" textValue="design">
                                        Design
                                    </SelectItem>
                                </Select>

                                <Divider className="bg-white/5" />

                                <div className="space-y-4 pt-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">
                                                Public Access
                                            </span>
                                            <span className="text-xs text-default-400">
                                                Visible on website
                                            </span>
                                        </div>
                                        <Switch
                                            name="isPublished"
                                            value="true"
                                            defaultSelected
                                            color="success"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">
                                                Featured Post
                                            </span>
                                            <span className="text-xs text-default-400">
                                                Pin to top of blog
                                            </span>
                                        </div>
                                        <Switch
                                            name="featured"
                                            value="true"
                                            color="secondary"
                                        />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        {/* Image Placeholder Tip */}
                        <div className="p-6 rounded-2xl border border-dashed border-white/10 text-center">
                            <p className="text-xs text-default-400">
                                Use the toolbar to upload images directly into
                                the post content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

function Divider({ className }: { className?: string }) {
    return <div className={`h-px w-full ${className}`} />
}
