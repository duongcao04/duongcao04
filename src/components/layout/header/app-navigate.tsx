import { useTranslations } from 'next-intl'

import { NAVIGATES } from '@/constants/navigates'

import ButtonLink from '../../common/button-link'

function AppNavigate() {
    const t = useTranslations('layout.header.appNavigate')

    return (
        <nav className="flex items-center justify-between">
            <div className="flex items-center justify-start">
                {NAVIGATES.map((nav) => (
                    <ButtonLink
                        key={nav.id}
                        href={nav.path}
                        classNames={{
                            link: 'block px-6 py-3 font-medium hover:text-primary-600 transition duration-200',
                            bottomLine: 'h-[2px]',
                        }}
                    >
                        {t(nav.label)}
                    </ButtonLink>
                ))}
            </div>
        </nav>
    )
}

export default AppNavigate
