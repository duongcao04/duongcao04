import { useLocale } from 'next-intl'

import ButtonLink from '@/components/common/ButtonLink'

import { NAVIGATES } from '@/constants/appConstants'
import { SupportLanguages } from '@/i18n/routing'

function AppNavigate() {
    const locale = useLocale()

    return (
        <nav className="flex items-center justify-between">
            <div className="flex items-center justify-start">
                {NAVIGATES.map((nav) => {
                    const label = nav[`${locale as SupportLanguages}Label`]

                    return (
                        <ButtonLink
                            key={nav.id}
                            href={nav.path}
                            classNames={{
                                link: 'block px-6 py-3 font-medium hover:text-primary-600 transition duration-200',
                                bottomLine: 'h-[2px]',
                            }}
                        >
                            {label}
                        </ButtonLink>
                    )
                })}
            </div>
        </nav>
    )
}

export default AppNavigate
