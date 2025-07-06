export interface DatabaseDocument {
    id: string
    createdAt: number
    updatedAt: number
}

export interface SubscribeOptions<T> {
    transform?: (data: unknown) => T
    enabled?: boolean
    onError?: (error: Error) => void
    onConnected?: () => void
    onDisconnected?: () => void
}

export interface SubscribeListOptions<T> extends SubscribeOptions<T[]> {
    orderBy?: keyof T | string
    orderDirection?: 'asc' | 'desc'
    filter?: (item: T) => boolean
    limit?: number
}

export interface SubscribeValueOptions<T> extends SubscribeOptions<T> {
    defaultValue?: T
}

export interface MutationResult<TData> {
    mutate: (...args: unknown[]) => Promise<TData>
    loading: boolean
    error: Error | null
    data: TData | null
    reset: () => void
}

export interface SubscribeResult<T> {
    data: T | null
    loading: boolean
    error: Error | null
    connected: boolean
    refresh: () => Promise<void>
}

export interface AuthUser {
    uid: string
    email: string | null
    displayName: string | null
}

export interface AuthContextType {
    user: AuthUser | null
    login: (email: string, password: string) => Promise<AuthUser>
    register: (email: string, password: string) => Promise<AuthUser>
    logout: () => Promise<void>
    loading: boolean
}

export type FilterFunction<T> = (item: T) => boolean
