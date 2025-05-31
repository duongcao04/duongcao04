import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

import envConfig from '@/config/config'

export const firebaseConfig: FirebaseOptions = {
    apiKey: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_APP_ID,
    databaseURL: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const database = getDatabase(app)
