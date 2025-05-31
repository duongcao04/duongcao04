'use client'

import { useEffect, useState } from 'react'

import {
    User,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'

import { AuthContext } from '@/hooks/useAuth'

import { auth } from '@/lib/firebase/config'
import { AuthContextType, AuthUser } from '@/types/firebase'

interface AuthProviderProps {
    children: React.ReactNode
}

const mapFirebaseUser = (user: User): AuthUser => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
})

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser ? mapFirebaseUser(firebaseUser) : null)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const login = async (
        email: string,
        password: string
    ): Promise<AuthUser> => {
        try {
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            return mapFirebaseUser(result.user)
        } catch (error) {
            throw error instanceof Error ? error : new Error('Login failed')
        }
    }

    const register = async (
        email: string,
        password: string
    ): Promise<AuthUser> => {
        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            return mapFirebaseUser(result.user)
        } catch (error) {
            throw error instanceof Error
                ? error
                : new Error('Registration failed')
        }
    }

    const logout = async (): Promise<void> => {
        try {
            await signOut(auth)
        } catch (error) {
            throw error instanceof Error ? error : new Error('Logout failed')
        }
    }

    const value: AuthContextType = {
        user,
        login,
        register,
        logout,
        loading,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
