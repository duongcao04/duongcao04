import { SVGProps } from 'react'

import CppIcon from '@/shared/components/icons/skill-icons/cpp-icon'
import Css3Icon from '@/shared/components/icons/skill-icons/css3-icon'
import DockerIcon from '@/shared/components/icons/skill-icons/docker-icon'
import FigmaIcon from '@/shared/components/icons/skill-icons/figma-icon'
import FlutterIcon from '@/shared/components/icons/skill-icons/flutter-icon'
import GitIcon from '@/shared/components/icons/skill-icons/git-icon'
import GithubIcon from '@/shared/components/icons/skill-icons/github-icon'
import Html5Icon from '@/shared/components/icons/skill-icons/html5-icon'
import JavascriptIcon from '@/shared/components/icons/skill-icons/javascript-icon'
import MongodbIcon from '@/shared/components/icons/skill-icons/mongodb-icon'
import NestjsIcon from '@/shared/components/icons/skill-icons/nestjs-icon'
import NodejsIcon from '@/shared/components/icons/skill-icons/nodejs-icon'
import PostgresIcon from '@/shared/components/icons/skill-icons/postgres-icon'
import PostmanIcon from '@/shared/components/icons/skill-icons/postman-icon'
import ReactIcon from '@/shared/components/icons/skill-icons/react-icon'
import TailwindcssIcon from '@/shared/components/icons/skill-icons/tailwindcss-icon'
import TypescriptIcon from '@/shared/components/icons/skill-icons/typescript-icon'
import ViteIcon from '@/shared/components/icons/skill-icons/vite-icon'

export type Technology = {
    id: number
    name: string
    logo: ({
        width,
        height,
        fill,
        ...otherProps
    }: SVGProps<SVGSVGElement>) => JSX.Element
    original_website?: string
}

export const TECHNOLOGIES: Technology[] = [
    { id: 1, name: 'C++', logo: CppIcon },
    { id: 2, name: 'Html5', logo: Html5Icon },
    { id: 3, name: 'Css3', logo: Css3Icon },
    { id: 4, name: 'Javascript', logo: JavascriptIcon },
    { id: 5, name: 'Typescript', logo: TypescriptIcon },
    {
        id: 6,
        name: 'ReactJs',
        original_website: 'https://react.dev/',
        logo: ReactIcon,
    },
    {
        id: 7,
        name: 'Vite',
        original_website: 'https://vite.dev/',
        logo: ViteIcon,
    },
    {
        id: 8,
        name: 'TailwindCss',
        original_website: 'https://tailwindcss.com/',
        logo: TailwindcssIcon,
    },
    {
        id: 9,
        name: 'NodeJs',
        original_website: 'https://nodejs.org/',
        logo: NodejsIcon,
    },
    {
        id: 10,
        name: 'NestJs',
        original_website: 'https://nestjs.com/',
        logo: NestjsIcon,
    },
    {
        id: 11,
        name: 'Flutter',
        original_website: 'https://flutter.dev/',
        logo: FlutterIcon,
    },
]

export const DATABASES: Technology[] = [
    {
        id: 12,
        name: 'MongoDB',
        original_website: 'https://www.mongodb.com/',
        logo: MongodbIcon,
    },
    {
        id: 13,
        name: 'PostgreSql',
        original_website: 'https://www.postgresql.org/',
        logo: PostgresIcon,
    },
]

export const TOOLS: Technology[] = [
    {
        id: 14,
        name: 'Figma',
        original_website: 'https://www.figma.com/',
        logo: FigmaIcon,
    },
    {
        id: 15,
        name: 'Git',
        original_website: 'https://git-scm.com/',
        logo: GitIcon,
    },
    {
        id: 16,
        name: 'Github',
        original_website: 'https://github.com/',
        logo: GithubIcon,
    },
    {
        id: 17,
        name: 'Docker',
        original_website: 'https://www.docker.com/',
        logo: DockerIcon,
    },
    {
        id: 18,
        name: 'Postman',
        original_website: 'https://www.postman.com/',
        logo: PostmanIcon,
    },
]
export const TECHSTACK_LIST = [...TECHNOLOGIES, ...DATABASES, ...TOOLS]
