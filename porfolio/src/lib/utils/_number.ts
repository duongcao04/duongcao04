interface RegionCurrency {
    locale: string
    currency: string
}
export const regionCurrencyMap: { [key: string]: RegionCurrency } = {
    // 🌎 English-speaking regions
    English: { locale: 'en-US', currency: 'USD' },
    English_Canada: { locale: 'en-CA', currency: 'USD' },
    French_Canada: { locale: 'fr-CA', currency: 'USD' },
    English_UK: { locale: 'en-GB', currency: 'USD' },
    English_Australia: { locale: 'en-AU', currency: 'USD' },
    English_NewZealand: { locale: 'en-NZ', currency: 'USD' },
    English_Ireland: { locale: 'en-IE', currency: 'USD' },
    English_Singapore: { locale: 'en-SG', currency: 'USD' },
    English_HongKong: { locale: 'en-HK', currency: 'USD' },
    English_Philippines: { locale: 'en-PH', currency: 'USD' },
    English_SouthAfrica: { locale: 'en-ZA', currency: 'USD' },
    English_India: { locale: 'en-IN', currency: 'USD' },
    English_Nigeria: { locale: 'en-NG', currency: 'USD' },
    English_Kenya: { locale: 'en-KE', currency: 'USD' },
    English_Pakistan: { locale: 'en-PK', currency: 'USD' },

    // 🇪🇺 European regions
    German_Germany: { locale: 'de-DE', currency: 'USD' },
    French_France: { locale: 'fr-FR', currency: 'USD' },
    Spanish_Spain: { locale: 'es-ES', currency: 'USD' },
    Italian_Italy: { locale: 'it-IT', currency: 'USD' },
    Dutch_Netherlands: { locale: 'nl-NL', currency: 'USD' },
    Portuguese_Portugal: { locale: 'pt-PT', currency: 'USD' },
    Swedish_Sweden: { locale: 'sv-SE', currency: 'USD' },
    Polish_Poland: { locale: 'pl-PL', currency: 'USD' },
    Czech_Czechia: { locale: 'cs-CZ', currency: 'USD' },

    // 🇷🇺 Russian
    Russian: { locale: 'ru-RU', currency: 'USD' },

    // 🇨🇳 Chinese regions
    Chinese_China: { locale: 'zh-CN', currency: 'CNY' },
    Chinese_Taiwan: { locale: 'zh-TW', currency: 'USD' },
    Chinese_HongKong: { locale: 'zh-HK', currency: 'USD' },

    // 🇻🇳 Vietnamese
    Vietnamese: { locale: 'vi-VN', currency: 'VND' },
} as const

export const currencyFormatter = (
    amount: string | number,
    region?: keyof typeof regionCurrencyMap
) => {
    const numberValue = typeof amount === 'string' ? parseFloat(amount) : amount
    const regionMatch: RegionCurrency = region
        ? regionCurrencyMap[region]
        : regionCurrencyMap['English']

    return new Intl.NumberFormat(regionMatch.locale, {
        style: 'currency',
        currency: regionMatch.currency,
    }).format(numberValue)
}
