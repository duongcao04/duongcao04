type TransformEmailOptions = {
    suffix?: string
    forceSuffix?: boolean
}

export const transformEmail = (
    value: string,
    options: TransformEmailOptions = {}
) => {
    // Destructure with default values
    const { suffix = '@cadsquad.vn', forceSuffix = false } = options

    if (!value) return ''

    const email = value.trim().toLowerCase()

    // 1. If it already ends with the correct suffix, return it
    if (email.endsWith(suffix)) {
        return email
    }

    // 2. If the email contains an '@'
    if (email.includes('@')) {
        if (forceSuffix) {
            // Take everything before the FIRST '@' and add suffix
            const prefix = email.split('@')[0]
            return prefix + suffix
        }
        // If not forcing, return the user's input as-is
        return email
    }

    // 3. If there is no '@' at all, append the suffix
    return email + suffix
}
