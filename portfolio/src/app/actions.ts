'use server'

import dbConnect from '@/lib/mongodb'

export async function testDatabaseConnection() {
    const isConnected = false
    try {
        await dbConnect()
        return !isConnected
    } catch (e) {
        console.error(e)
        return isConnected
    }
}
