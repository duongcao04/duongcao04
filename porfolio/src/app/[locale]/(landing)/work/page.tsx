'use client'

import React from 'react'

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Chip,
    Divider,
    Image,
    Link,
} from '@heroui/react'
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react'

// Assuming you use tabler icons or similar

// Define your project type
type Project = {
    id: string
    title: string
    role: string
    description: string
    tags: string[]
    imageUrl: string
    link?: string
    github?: string
}

// PERSONALIZED DATA: Based on your recent work context
const projects: Project[] = [
    {
        id: 'csd-cadsquad',
        title: 'CSD Cadsquad',
        role: 'IT Manager & Lead Developer',
        description:
            'A comprehensive internal system for branding asset management and staff data administration. Features include dynamic staff lists, branding resource distribution, and automated workflows.',
        tags: ['Next.js', 'TanStack Table', 'NestJS', 'Prisma', 'Docker'],
        imageUrl: '/projects/cadsquad-preview.png', // Replace with your actual screenshot
        link: '#',
    },
    {
        id: 'security-demo',
        title: 'Cybersecurity Training Platform',
        role: 'Full-Stack Developer',
        description:
            'An educational demonstration platform analyzing SQL Injection vulnerabilities and prevention techniques using XAMPP and SQLMap.',
        tags: ['Cybersecurity', 'PHP', 'MySQL', 'Network Security'],
        imageUrl: '/projects/security-demo.png',
    },
]

const techStack = {
    Frontend: [
        'Next.js',
        'React',
        'TypeScript',
        'TanStack Query',
        'HeroUI',
        'Tailwind CSS',
    ],
    Backend: [
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'Better-Auth',
        'Winston Logger',
    ],
    DevOps: ['Docker', 'Nginx Proxy Manager', 'Grafana', 'Prometheus', 'Git'],
}

export default function WorkPage() {
    return (
        <section className="container mx-auto px-6 py-12 max-w-5xl">
            {/* Header Section */}
            <div className="mb-12 space-y-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Selected Work
                </h1>
                <p className="text-default-500 text-lg max-w-2xl">
                    A showcase of my technical projects, ranging from enterprise
                    resource planning to DevOps infrastructure and full-stack
                    web applications.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        className="py-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <div className="flex justify-between w-full items-start">
                                <div>
                                    <h4 className="font-bold text-large">
                                        {project.title}
                                    </h4>
                                    <small className="text-default-500 uppercase font-semibold text-xs tracking-wider">
                                        {project.role}
                                    </small>
                                </div>
                                {/* Optional Status Indicator */}
                                <Chip size="sm" color="primary" variant="flat">
                                    Active
                                </Chip>
                            </div>
                        </CardHeader>

                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt={project.title}
                                className="object-cover rounded-xl w-full h-[200px]"
                                src={project.imageUrl}
                                width={600}
                            />
                            <p className="text-default-500 mt-4 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tags.map((tag) => (
                                    <Chip
                                        key={tag}
                                        size="sm"
                                        variant="flat"
                                        color="secondary"
                                    >
                                        {tag}
                                    </Chip>
                                ))}
                            </div>
                        </CardBody>

                        <CardFooter className="pt-0 px-4 flex gap-2">
                            <Button
                                as={Link}
                                href={project.link}
                                variant="solid"
                                color="primary"
                                size="sm"
                                endContent={<IconExternalLink size={16} />}
                            >
                                Live Demo
                            </Button>
                            <Button
                                as={Link}
                                href={project.github}
                                variant="light"
                                color="default"
                                size="sm"
                                startContent={<IconBrandGithub size={18} />}
                            >
                                Source Code
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <Divider className="my-12" />

            {/* Technical Expertise Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Frontend Ecosystem
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.Frontend.map((tech) => (
                            <Chip
                                key={tech}
                                variant="dot"
                                color="primary"
                                className="border-none"
                            >
                                {tech}
                            </Chip>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Backend Architecture
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.Backend.map((tech) => (
                            <Chip
                                key={tech}
                                variant="dot"
                                color="success"
                                className="border-none"
                            >
                                {tech}
                            </Chip>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        DevOps & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {techStack.DevOps.map((tech) => (
                            <Chip
                                key={tech}
                                variant="dot"
                                color="warning"
                                className="border-none"
                            >
                                {tech}
                            </Chip>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
