import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

import { envConfig } from '@/config'

export function createClient() {
    const cookieStore = cookies()

    return createServerClient(
        envConfig.supabase.url,
        envConfig.supabase.anonKey,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value, ...options })
                    } catch (error) {
                        // Handle middleware set calls
                    }
                },
                remove(name: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value: '', ...options })
                    } catch (error) {
                        // Handle middleware remove calls
                    }
                },
            },
        }
    )
}
