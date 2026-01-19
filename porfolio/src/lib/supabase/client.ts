import { createBrowserClient } from '@supabase/ssr'

import { envConfig } from '@/config'

export function createClient() {
    return createBrowserClient(
        envConfig.supabase.url,
        envConfig.supabase.anonKey
    )
}
