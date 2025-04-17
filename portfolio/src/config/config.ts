import * as yup from 'yup'

const configSchema = yup.object({
    NEXT_PUBLIC_API_ENDPOINT: yup.string(),
    NEXT_PUBLIC_URL: yup.string(),
    MONGODB_URI: yup.string(),
})

function configProject() {
    try {
        const config = configSchema.validateSync({
            NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
            NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
            MONGODB_URI: process.env.MONGODB_URI,
        })
        return config
    } catch (error) {
        console.log(error)
        throw new Error('Các giá trị khai báo trong file .env không hợp lệ')
    }
}

const envConfig = configProject()
export default envConfig
