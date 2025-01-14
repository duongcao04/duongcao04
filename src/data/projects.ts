import { StaticImageData } from 'next/image'

import YangisShopThumbnail from '@/assets/projects/yangis_shop_thumbnail.png'
import YangisPortfolioThumbnail from '@/assets/projects/yangis_portfolio_thumbnail.png'

export type Project = {
    id: string
    feature_project: string
    name: string
    logo?: string
    description: string
    thumbnail: string | StaticImageData
    slug: string
    images: string[]
    web_path?: string
}
export const PROJECTS: Project[] = [
    {
        id: '1',
        feature_project: 'Portfolio Project',
        name: 'Yangis Portfolio',
        description: '',
        thumbnail: YangisPortfolioThumbnail,
        images: ['', ''],
        slug: 'yangis-shop',
        web_path: 'https://shop.yangis.dev',
    },
    {
        id: '2',
        feature_project: 'E-commerce Project',
        name: 'Yangis Shop',
        description: '',
        thumbnail: YangisShopThumbnail,
        images: ['', ''],
        slug: 'yangis-shop',
        web_path: 'https://shop.yangis.dev',
    },
]
