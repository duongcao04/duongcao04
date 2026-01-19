import * as yup from 'yup'

const configSchema = yup.object({
    apiEndpoint: yup.string().default('https://localhost:3000/api'),
    appUrl: yup.string().default('https://localhost:3000'),
    firebase: yup.object({
        apiKey: yup.string(),
        authDomain: yup.string(),
        projectId: yup.string(),
        storageBucket: yup.string(),
        messageSenderId: yup.string(),
        appId: yup.string(),
        measurementId: yup.string(),
        databaseUrl: yup.string(),
    }),
    supabase: yup.object({
        url: yup.string().optional(),
        anonKey: yup.string().optional(),
    }),
    appVersion: yup.string().optional().default('v1.1.0'),
    appTitle: yup.string().optional().default('Yangisdev'),
    nodeEnv: yup
        .string()
        .oneOf(['development', 'stagging', 'production'])
        .default('development'),
})

function configProject() {
    try {
        const config = configSchema.validateSync({
            apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
            appUrl: process.env.NEXT_PUBLIC_URL,
            firebase: {
                apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
                authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
                messageSenderId:
                    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
                appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
                measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
                databaseUrl: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
            },
            supabase: {
                url: process.env.NEXT_PUBLIC_SUPABASE_URL,
                anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            },
        })
        return config
    } catch (error) {
        console.log(error)
        throw new Error('Các giá trị khai báo trong file .env không hợp lệ')
    }
}

export const envConfig = configProject()
