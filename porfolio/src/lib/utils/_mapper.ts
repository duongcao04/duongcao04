export const toDate = (date: string | number | Date): Date => {
    const d = new Date(date)
    return isNaN(d.getTime()) ? new Date() : d
}

export const toNullableDate = (date: string | number | Date): Date | null => {
    if (!date) return null
    const d = new Date(date)
    return isNaN(d.getTime()) ? null : d
}

/**
 * Chuyển đổi sang số nguyên (Integer)
 * Dùng cho: Số lượng items, Order, nấc thang điểm...
 */
export const toInt = (val: string, fallback = 0): number => {
    const parsed = parseInt(val, 10)
    return isNaN(parsed) ? fallback : parsed
}

/**
 * Chuyển đổi sang số thực (Float)
 * Dùng cho: Tiền tệ (incomeCost, staffCost), tỉ lệ phần trăm...
 */
export const toFloat = (val: string, fallback = 0): number => {
    // Nếu là string có dấu phẩy (ví dụ từ input: "1.250,50"), cần clean trước khi parse
    if (typeof val === 'string') {
        val = val.replace(/,/g, '')
    }
    const parsed = parseFloat(val)
    return isNaN(parsed) ? fallback : parsed
}
