import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { NAVIGATES } from '@/constants/navigates'

function AppNavigate() {
    const t = useTranslations('layout.header.appNavigate')

    return (
        <nav className="flex items-center justify-between">
            <ul className="flex items-center justify-start first:-ml-6">
                {NAVIGATES.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={item.path}
                            className="block px-6 py-1 font-medium hover:text-primary-600 transition duration-200"
                        >
                            {t(item.label)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default AppNavigate
