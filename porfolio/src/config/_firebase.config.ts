import { FirebaseOptions } from 'firebase/app'

import { envConfig } from './_env.config'

export const firebaseConfig: FirebaseOptions = {
    apiKey: envConfig.firebase.apiKey,
    authDomain: envConfig.firebase.authDomain,
    projectId: envConfig.firebase.projectId,
    storageBucket: envConfig.firebase.storageBucket,
    messagingSenderId: envConfig.firebase.messageSenderId,
    appId: envConfig.firebase.appId,
    databaseURL: envConfig.firebase.databaseUrl,
}
