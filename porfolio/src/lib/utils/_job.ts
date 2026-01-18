import dayjs from 'dayjs'

export const getDueDateRange = (key: string | undefined | null) => {
    if (!key) return { dueAtFrom: undefined, dueAtTo: undefined }

    const now = dayjs()

    switch (key) {
        case 'lt_1_week':
            return {
                dueAtFrom: now.toISOString(),
                dueAtTo: now.add(1, 'week').toISOString(),
            }
        case 'lt_2_weeks':
            return {
                dueAtFrom: now.toISOString(),
                dueAtTo: now.add(2, 'weeks').toISOString(),
            }
        case 'lt_3_weeks':
            return {
                dueAtFrom: now.toISOString(),
                dueAtTo: now.add(3, 'weeks').toISOString(),
            }
        case 'lt_1_month':
            return {
                dueAtFrom: now.toISOString(),
                dueAtTo: now.add(1, 'month').toISOString(),
            }
        case 'gt_1_month':
            return {
                dueAtFrom: now.add(1, 'month').toISOString(),
                dueAtTo: undefined, // "Greater than" implies no upper limit
            }
        default:
            return { dueAtFrom: undefined, dueAtTo: undefined }
    }
}
