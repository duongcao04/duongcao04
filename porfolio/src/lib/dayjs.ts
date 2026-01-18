import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { TIMEZONE } from './utils'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)

/**
 * Common localized date/time formats for the application.
 *
 * Use with Day.js, Moment.js, or any compatible formatter:
 *
 * ```ts
 * dayjs().format(localizedFormats.full)
 * ```
 */
export const localizedFormats = {
    /** Example: 8:02 PM */
    time: 'h:mm A',

    /** Example: 8:02 PM */
    time24h: 'h:mm',

    /** Example: 8:02:18 PM */
    timeWithSecond: 'h:mm:ss A',

    /** Example: 08/16/25 */
    shortDate: 'DD/MM/YY',

    /** Example: 16/08/2018 */
    semiLongDate: 'DD/MM/YYYY',

    /** Example: 08/16/2018 */
    monthSemiLongData: 'MM/DD/YYYY',

    /** Example: 2018-08-16 */
    reverseSemiLongDateDashed: 'YYYY-MM-DD',

    semiDateTime: 'H:mm - DD/MM/YYYY',

    /** Example: August 16, 2018 */
    longDate: 'MMMM D, YYYY',

    /** Example: 19 Jan */
    dateMonth: 'D MMM',

    /** Example: August 16, 2018 8:02 PM */
    longDateTime: 'MMMM D, YYYY h:mm A',

    /** Example: Thursday, August 16, 2018 8:02 PM */
    full: 'dddd, MMMM D, YYYY h:mm A',

    /** Example: 8/16/2018 */
    compactDate: 'M/D/YYYY',

    /** Example: Aug 16, 2018 */
    shortMonthDate: 'MMM D, YYYY',

    /** Example: Aug 16, 2018 8:02 PM */
    shortMonthDateTime: 'MMM D, YYYY h:mm A',

    /** Example: Thu, Aug 16, 2018 8:02 PM */
    fullShort: 'ddd, MMM D, YYYY h:mm A',
} as const

export type DayFormat = keyof typeof localizedFormats
export type DateFormatterOptions = {
    format?: DayFormat | 'relative'
    timezone?: string
    isDistance?: boolean
}

type Options = {
    format?: string
    timezone?: string
}
export const VietnamDateFormat = (
    value: string | Date,
    options: Options = {
        format: localizedFormats.shortDate,
        timezone: 'Asia/Ho_Chi_Minh',
    }
) => {
    return dayjs.utc(value).tz(options.timezone).format(options.format)
}

export const dateFormatter = (
    value: string | Date,
    options: DateFormatterOptions = {
        format: 'semiLongDate',
        timezone: TIMEZONE,
        isDistance: false, // Default to false
    }
) => {
    const dateInstance = dayjs.utc(value).tz(options.timezone)

    // If isDistance is true, return the relative string immediately
    if (options.isDistance) {
        return dateInstance.fromNow()
    }

    // Otherwise, proceed with standard formatting
    const pickFormat =
        localizedFormats[(options?.format as DayFormat) ?? 'shortDate']

    return dateInstance.format(pickFormat)
}

/**
 * Calculates the remaining time in milliseconds until a specified end date.
 *
 * @param endedDate - The target end date (can be a Date object or a string).
 * @returns The difference in milliseconds between the current time and the end date.
 *          If the result is negative, the end date has already passed.
 */
export const calculateRemainingTime = (endedDate: Date | string): number => {
    const now = dayjs()
    const end = dayjs.utc(endedDate).local() // Convert UTC to local time (e.g., Asia/Ho_Chi_Minh)
    return end.diff(now)
}
