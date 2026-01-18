type CropMode = 'fill' | 'scale' | 'limit' | 'fit' | 'thumb' | 'pad'
type Gravity = 'auto' | 'face' | 'center' | 'north' | 'south'

interface CloudinaryOptions {
    width?: number // Chiều rộng mong muốn
    height?: number // Chiều cao mong muốn
    quality?: number | 'auto' | 'best' | 'good' | 'eco' | 'low' // Mặc định là 'auto'
    format?: 'auto' | 'webp' | 'jpg' | 'png' // Mặc định là 'auto' (trình duyệt tự chọn WebP/AVIF)
    crop?: CropMode // Cách cắt ảnh
    gravity?: Gravity // Trọng tâm cắt (quan trọng cho Avatar)
}

/**
 * Hàm tối ưu URL ảnh Cloudinary
 * @param url URL gốc từ Cloudinary
 * @param options Các tùy chọn config (width, height,...)
 */
export function optimizeCloudinary(
    url: string,
    options: CloudinaryOptions = {}
): string {
    if (!url || !url.includes('res.cloudinary.com')) return url || ''

    const {
        width = 256,
        height = 256,
        quality = 'auto',
        format = 'auto',
        crop = 'fill', // Mặc định là fill để lấp đầy khung
        gravity = 'auto', // Mặc định auto để AI tự tìm chủ thể
    } = options

    // Tạo mảng params
    const params: string[] = []

    // 1. Tự động định dạng (WebP/AVIF) và Chất lượng
    params.push(`f_${format}`)
    params.push(`q_${quality}`)

    // 2. Kích thước và Crop
    if (width) params.push(`w_${width}`)
    if (height) params.push(`h_${height}`)

    // Chỉ thêm crop/gravity khi có kích thước
    if (width || height) {
        params.push(`c_${crop}`)
        params.push(`g_${gravity}`)
    }

    const paramsString = params.join(',')

    // Chèn params vào sau /upload/
    // Regex này đảm bảo chỉ thay thế /upload/ đầu tiên tìm thấy
    return url.replace(/\/upload\//, `/upload/${paramsString}/`)
}
