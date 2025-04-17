import { StaticImageData } from 'next/image'

import AnimateStyle from '@/assets/img/tools/animate/animate-css.jpg'
import CssLoader from '@/assets/img/tools/animate/css-loader.png'
import MotionDev from '@/assets/img/tools/animate/motion-dev.png'
import Gitbook from '@/assets/img/tools/buildDocsWeb/gitbook.jpg'
import VitePress from '@/assets/img/tools/buildDocsWeb/vitepress.jpg'
import HeroUI from '@/assets/img/tools/uiLibrary/hero-ui.png'

export type Tool = {
    id: string | number
    name: string
    desc: string
    thumbnail: string | StaticImageData
    tag: string
    website: string
}

export const TOOLS: Tool[] = [
    {
        id: 1,
        name: 'VitePress',
        desc: 'VitePress là framework tĩnh nhẹ dựa trên Vite, hỗ trợ tạo tài liệu và blog với hiệu suất cao, giao diện tối ưu, dễ tùy chỉnh và tốc độ dựng trang nhanh chóng.',
        thumbnail: VitePress,
        tag: 'build-docs-website',
        website: 'https://vitepress.dev/',
    },
    {
        id: 2,
        name: 'Gitbook',
        desc: 'GitBook là một nền tảng hiện đại để tạo tài liệu, nơi các team có thể tài liệu hóa mọi thứ từ sản phẩm đến kiến thức nội bộ và API.',
        thumbnail: Gitbook,
        tag: 'build-docs-website',
        website: 'https://www.gitbook.com/',
    },
    {
        id: 3,
        name: 'Animate.style',
        desc: 'Animate.style là thư viện CSS đơn giản, giúp thêm hiệu ứng chuyển động mượt mà vào website. Với nhiều hiệu ứng sẵn có, nó dễ sử dụng, nhẹ và tối ưu cho mọi dự án.',
        thumbnail: AnimateStyle,
        tag: 'animate',
        website: 'https://animate.style/',
    },
    {
        id: 4,
        name: 'Motion.dev',
        desc: 'Motion.dev là thư viện animation mạnh mẽ dành cho React, cung cấp công cụ dễ dùng để tạo hiệu ứng mượt mà. Với hiệu suất cao, nó hỗ trợ tùy chỉnh linh hoạt cho mọi dự án.',
        thumbnail: MotionDev,
        tag: 'animate',
        website: 'https://motion.dev/',
    },
    {
        id: 5,
        name: 'CSS Loader',
        desc: 'CSS Loader là một trang web cung cấp các bộ tải (loader) CSS miễn phí, giúp tạo hiệu ứng tải dữ liệu mượt mà cho website. Các loader này dễ dàng tích hợp và tùy chỉnh.',
        thumbnail: CssLoader,
        tag: 'animate',
        website: 'https://css-loaders.com/',
    },
    {
        id: 6,
        name: 'HeroUI',
        desc: 'HeroUI cung cấp các thành phần UI sẵn sàng sử dụng, được thiết kế đẹp mắt và tối ưu hiệu suất. Trang web giúp phát triển giao diện nhanh chóng.',
        thumbnail: HeroUI,
        tag: 'ui-library',
        website: 'https://www.heroui.com/',
    },
]
