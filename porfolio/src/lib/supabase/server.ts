import { type CookieOptions, createServerClient } from '@supabase/ssr'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

import { envConfig } from '@/config'

// 1. Use this for Server Components, Server Actions, & API Routes
// (Where you HAVE a user request and need cookies)
export function createClient() {
    const cookieStore = cookies()

    return createServerClient(
        envConfig.supabase.url,
        envConfig.supabase.anonKey,
        {
            cookies: {
                async get(name: string) {
                    return (await cookieStore).get(name)?.value
                },
                async set(name: string, value: string, options: CookieOptions) {
                    try {
                        ;(await cookieStore).set({ name, value, ...options })
                    } catch (error) {
                        // Handle middleware set calls
                        console.log(error)
                    }
                },
                async remove(name: string, options: CookieOptions) {
                    try {
                        ;(await cookieStore).set({
                            name,
                            value: '',
                            ...options,
                        })
                    } catch (error) {
                        // Handle middleware remove calls
                        console.log(error)
                    }
                },
            },
        }
    )
}

// 2. Use this ONLY for generateStaticParams
// (Where you are at BUILD time and have NO cookies)
export function createStaticClient() {
    // We use the basic supabase-js client which doesn't depend on next/headers
    return createSupabaseClient(
        envConfig.supabase.url,
        envConfig.supabase.anonKey
    )
}
