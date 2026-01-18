'use client'

import { useWindowSize } from 'usehooks-ts'

export const BREAKPOINTS = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
    'max-sm': '(max-width: 639px)',
    'max-md': '(max-width: 767px)',
    'max-lg': '(max-width: 1023px)',
    'max-xl': '(max-width: 1279px)',
    'max-2xl': '(max-width: 1535px)',
}

export const SCREENS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    largeDevice: 1440,
}

export const useDevice = () => {
    const { width } = useWindowSize()

    const isMobile = width < SCREENS.tablet
    const isTablet = width >= SCREENS.tablet && width < SCREENS.desktop
    const isDesktop = width >= SCREENS.desktop && width < SCREENS.largeDevice
    const isLargeDevice = width >= SCREENS.largeDevice

    return {
        isSmallDevice: isMobile || isTablet,
        isMobile,
        isTablet,
        isDesktop,
        isLargeDevice,
    }
}
