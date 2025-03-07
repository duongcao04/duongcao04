const formatFullDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return date.toLocaleDateString('en-US', options)
}

const formatSemiFullDate: (date: Date, locale?: string) => string = (
    date,
    locale = 'en'
) => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    if (locale === 'vi') {
        return date.toLocaleDateString('vi-VN', options)
    }

    if (locale === 'en') {
        const formattedDate = date.toLocaleDateString('en-GB', options)
        const [day, month, year] = formattedDate.split(' ')
        return `${day} ${month}, ${year}`
    }

    // Default fallback for unsupported locales
    return date.toLocaleDateString(locale, options)
}

export { formatFullDate, formatSemiFullDate }
