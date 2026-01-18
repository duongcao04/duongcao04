import { envConfig } from '@/config'

/**
 * Removes Vietnamese diacritical marks (tones) from a string
 * and normalizes it for easier comparison or search.
 *
 * @param input - The Vietnamese text to process.
 * @returns A normalized string without diacritics and extra spaces.
 *
 * Example:
 * ```ts
 * removeVietnameseAccents("Tôi yêu Việt Nam") // "Toi yeu Viet Nam"
 * ```
 */
export function removeVietnameseAccents(input: string): string {
    return input
        .normalize('NFD') // Split letters and diacritics
        .replace(/[\u0300-\u036f]/g, '') // Remove all diacritic marks
        .replace(/đ/g, 'd') // Replace 'đ' with 'd'
        .replace(/Đ/g, 'D') // Replace 'Đ' with 'D'
        .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
        .trim() // Remove leading/trailing whitespace
}

export function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function padToFourDigits(num: number | string): string {
    return num.toString().padStart(4, '0')
}

type PadDigitsOptions = {
    numberDigits?: number
    redirect?: 'start' | 'end'
    charToPad?: string
}
export function padDigits(
    value: number | string,
    options: PadDigitsOptions
): string {
    const { numberDigits = 2, redirect = 'start', charToPad = '0' } = options
    if (redirect === 'start') {
        return value.toString().padStart(numberDigits, charToPad)
    } else {
        return value.toString().padEnd(numberDigits, charToPad)
    }
}

export const removeTrailingSlash = (
    url: string | undefined
): string | undefined => {
    if (!url) return undefined
    return url.replace(/\/$/, '')
}

export const handleCopy = (content: string, onSuccess?: () => void) => {
    if (content) {
        navigator.clipboard
            .writeText(content)
            .then(() => {
                onSuccess?.()
            })
            .catch((error) => {
                console.error('Error copying command', error)
            })
    }
}

export const getPageTitle = (title: string) => {
    return title + ' | ' + envConfig.appTitle
}

export const linkify = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g

    return text.replace(urlRegex, (url) => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #0070f3; text-decoration: underline;">${url}</a>`
    })
}

/**
 * Tạo mật khẩu ngẫu nhiên an toàn (Cryptographically secure)
 * Đáp ứng: Tối thiểu 8 ký tự, có Chữ hoa, Chữ thường, Số, Ký tự đặc biệt
 */
export const generatePassword = (length: number = 12): string => {
    const charset = {
        upper: 'ABCDEFGHJKLMNPQRSTUVWXYZ', // Loại bỏ I, O để tránh nhầm lẫn
        lower: 'abcdefghijkmnopqrstuvwxyz', // Loại bỏ l để tránh nhầm lẫn
        number: '23456789', // Loại bỏ 0, 1
        special: '!@#$%^&*',
    }

    const allChars = Object.values(charset).join('')
    let password = ''

    // Đảm bảo mật khẩu luôn có ít nhất 1 ký tự từ mỗi nhóm (tăng độ mạnh)
    password +=
        charset.upper[
            crypto.getRandomValues(new Uint32Array(1))[0] % charset.upper.length
        ]
    password +=
        charset.lower[
            crypto.getRandomValues(new Uint32Array(1))[0] % charset.lower.length
        ]
    password +=
        charset.number[
            crypto.getRandomValues(new Uint32Array(1))[0] %
                charset.number.length
        ]
    password +=
        charset.special[
            crypto.getRandomValues(new Uint32Array(1))[0] %
                charset.special.length
        ]

    // Các ký tự còn lại lấy ngẫu nhiên
    const array = new Uint32Array(length - 4)
    crypto.getRandomValues(array)

    for (let i = 0; i < array.length; i++) {
        password += allChars[array[i] % allChars.length]
    }

    // Trộn ngẫu nhiên chuỗi thu được để tránh vị trí cố định của 4 ký tự đầu
    return password
        .split('')
        .sort(() => 0.5 - Math.random())
        .join('')
}
