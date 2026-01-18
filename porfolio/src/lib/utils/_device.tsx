import React from 'react'
import { Monitor, Smartphone, Globe, Laptop } from 'lucide-react'

// 1. Use a more descriptive Type for the map
type DeviceType = 'MOBILE' | 'DESKTOP' | 'LAPTOP' | 'BROWSER_DEFAULT'

// 2. Return Components (functions) rather than JSX Elements
// This allows you to pass props like 'size' or 'className' dynamically later.
const ICON_COMPONENTS: Record<DeviceType, React.ElementType> = {
    BROWSER_DEFAULT: Globe,
    DESKTOP: Monitor,
    MOBILE: Smartphone,
    LAPTOP: Laptop,
}

/**
 * getDeviceIcon
 * Parses device strings like "Edge on Windows" to return the correct Lucide component.
 */
export const getDeviceIcon = (deviceName: string): React.ElementType => {
    const name = deviceName.toLowerCase()

    // Priority 1: Mobile Logic
    if (
        name.includes('ios') ||
        name.includes('android') ||
        name.includes('iphone') ||
        name.includes('mobile')
    ) {
        return ICON_COMPONENTS.MOBILE
    }

    // Priority 2: Desktop/Laptop Logic
    if (
        name.includes('windows') ||
        name.includes('linux') ||
        name.includes('mac') ||
        name.includes('desktop')
    ) {
        return ICON_COMPONENTS.DESKTOP
    }

    // Fallback: Default Web/Globe icon
    return ICON_COMPONENTS.BROWSER_DEFAULT
}
