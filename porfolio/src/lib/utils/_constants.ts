import { envConfig } from '@/config'

export const LS_OIDC_REDIRECT_URI_KEY = 'oidc:redirect_uri' as const

export const COOKIES = {
    authentication: 'csd-authTk',
    sessionId: 'csd-sseIds',
}

export const EXTERNAL_URLS = {}
export const INTERNAL_URLS = (() => {
    const urls = {
        // Use ['', ''] if you want home to be '/' explicitly,
        // otherwise [''] joins to an empty string.
        home: [''],
        posts: ['', 'posts'],
        work: ['', 'work'],
        contact: ['', 'contact'],
    } as const

    return Object.fromEntries(
        Object.entries(urls).map(([key, segments]) => {
            // Join segments with '/'
            // If the result is empty string (for home), default to '/'
            const path = segments.join('/')
            return [key, path === '' ? '/' : path]
        })
    )
})()

export const baseUrl = envConfig.appUrl
export const apiBaseUrl = envConfig.apiEndpoint
export const contactMail = 'hey@yangis.dev'

export const STORAGE_KEYS = {
    theme: 'theme',
    themeColor: 'csd_theme-clr',
    themeText: 'csd_theme-textScaling',
    themeMotion: 'csd_theme-motion',
    dateFormat: 'app-runtime:date-format',
    timeFormat: 'app-runtime:time-format',
    dismissedMessages: 'app-runtime:dismissed-messages',
    tableRowCount: 'app-runtime:table-row-count',
    currency: 'app-runtime:currency',
    currencyDigits: 'app-runtime:currency-digits',
    projectCenterFinishItems: 'project-center-finish-items',
    sidebarStatus: 'csd-side',
    adminRightSidebar: 'csd_admin-right-sidebar',
    adminLeftSidebar: 'csd_admin-left-sidebar',
    communitiesLeftStatus: 'csd_communities-left-sidebar',
    jobColumns: 'csd-project-center_table_cols',
    workbenchColumns: 'csd-workbench_table_cols',
} as const

export const IMAGES = {
    loadingPlaceholder: 'https://placehold.co/400x400?text=Loading',
    emptyCommunityBanner: 'https://placehold.co/1200x400?text=Cadsquad+banner',
    emptyAvatar:
        'https://res.cloudinary.com/dqx1guyc0/image/upload/v1762496668/.temp/empty_avatar_wai3iw.webp',
    cadsquadLogoOrange:
        'https://res.cloudinary.com/dqx1guyc0/image/upload/v1765885688/AVATAR-_Fiverr_kwcsip.png',
} as const

export const USER_CONFIG_KEYS = {
    jobShowColumns: 'job-show-columns',
    hideFinishItems: 'project-center-activeTab-hide-finish-items',
}

export const STORAGE_DEFAULTS = {
    tableRowCount: '10',
    currencyDigits: '2',
    theme: 'system' as const,
}

export const COLORS = {
    white: '#ffffff',
}

export const UI_APPLICATION_NAME = envConfig.appTitle
export const NODE_ENV = envConfig.nodeEnv

export const IS_DEV = NODE_ENV !== 'production'
export const APP_VERSION = envConfig.appVersion ?? '0.0.0-release'

export const SETTINGS_LOCATION_KEYS = {
    application: 'application',
    profile: 'profile',
    runtimeConfiguration: 'runtime-configuration',
    vehiclesAndCategories: 'vehicles-and-categories',
    ratesAndCharges: 'rates-and-charges',
} as const

export const DATE_FORMATS = {
    hyphen: 'DD-MM-YYYY',
    dashed: 'DD/MM/YYYY',
}

export const TIMEZONE = 'Asia/Ho_Chi_Minh'

// TO VND
export const EXCHANGE_RATE = {
    USD: 26000,
}
