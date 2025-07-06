export function formatWorkingTime(startedAt?: string, endedAt?: string) {
    if (startedAt && endedAt) {
        return `${startedAt} - ${endedAt}`
    }
    if (!endedAt) {
        return `Since ${startedAt}`
    }
    if (!startedAt) {
        return `Until ${endedAt}`
    }
    return 'Present'
}
