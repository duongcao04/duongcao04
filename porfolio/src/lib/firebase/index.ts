import { initializeApp, getApps, FirebaseOptions } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

import envConfig from '@/config/config'

export const firebaseConfig: FirebaseOptions = {
	apiKey: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId:
		envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_APP_ID,
	databaseURL: envConfig.FIREBASE.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
}

// Prevent reinitialization during hot reloads
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(app);

export const projectsCollection = ref(db, "projects")
export const postsCollection = ref(db, "posts")
export const tagsCollection = ref(db, "tags")
export const technologiesCollection = ref(db, "technologies")
export const toolsCollection = ref(db, "tools")