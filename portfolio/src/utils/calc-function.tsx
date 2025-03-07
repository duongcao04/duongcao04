export function calculateFromDateToNow(dateString: string) {
    const fromDate = new Date(dateString)
    const now = new Date()

    let years = now.getFullYear() - fromDate.getFullYear()
    let months = now.getMonth() - fromDate.getMonth()
    let days = now.getDate() - fromDate.getDate()

    if (days < 0) {
        months -= 1
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0)
        days += lastMonth.getDate()
    }

    if (months < 0) {
        years -= 1
        months += 12
    }

    if (years > 0) return `${years} years ago`
    if (months > 0) return `${months} months ago`
    return `${days} days ago`
}
