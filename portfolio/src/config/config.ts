import * as yup from 'yup'

const configSchema = yup.object({
    NEXT_PUBLIC_API_ENDPOINT: yup.string(),
    NEXT_PUBLIC_URL: yup.string(),
    FIREBASE: yup.object({
        NEXT_FIREBASE_API_KEY: yup.string(),
        NEXT_FIREBASE_AUTH_DOMAIN: yup.string(),
        NEXT_FIREBASE_PROJECT_ID: yup.string(),
        NEXT_FIREBASE_STORAGE_BUCKET: yup.string(),
        NEXT_FIREBASE_MESSAGING_SENDER_ID: yup.string(),
        NEXT_FIREBASE_APP_ID: yup.string(),
        NEXT_FIREBASE_MEASUREMENT_ID: yup.string(),
        NEXT_FIREBASE_DATABASE_URL: yup.string(),
    }),
})

function configProject() {
    try {
        const config = configSchema.validateSync({
            NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
            NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
            FIREBASE: {
                NEXT_FIREBASE_API_KEY: process.env.NEXT_FIREBASE_API_KEY,
                NEXT_FIREBASE_AUTH_DOMAIN:
                    process.env.NEXT_FIREBASE_AUTH_DOMAIN,
                NEXT_FIREBASE_PROJECT_ID: process.env.NEXT_FIREBASE_PROJECT_ID,
                NEXT_FIREBASE_STORAGE_BUCKET:
                    process.env.NEXT_FIREBASE_STORAGE_BUCKET,
                NEXT_FIREBASE_MESSAGING_SENDER_ID:
                    process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,
                NEXT_FIREBASE_APP_ID: process.env.NEXT_FIREBASE_APP_ID,
                NEXT_FIREBASE_MEASUREMENT_ID:
                    process.env.NEXT_FIREBASE_MEASUREMENT_ID,
                NEXT_FIREBASE_DATABASE_URL:
                    process.env.NEXT_FIREBASE_DATABASE_URL,
            },
        })
        return config
    } catch (error) {
        console.log(error)
        throw new Error('Các giá trị khai báo trong file .env không hợp lệ')
    }
}

const envConfig = configProject()
export default envConfig
