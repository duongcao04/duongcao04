import {
    DataSnapshot,
    DatabaseReference,
    equalTo,
    get,
    limitToLast,
    off,
    onValue,
    orderByChild,
    push,
    query,
    ref,
    remove,
    set,
    update,
} from 'firebase/database'

import { database } from './config'

export interface IFirebaseService {
    // Lấy tất cả dữ liệu từ một node
    getAll: <T = unknown>(path: string) => Promise<T[]>
    // Lấy dữ liệu theo ID cụ thể
    getById: <T = unknown>(path: string, id: string) => Promise<T | null>
    // Lấy dữ liệu theo điều kiện (filter)
    getByQuery: <T = unknown>(
        path: string,
        childPath: string,
        value: unknown,
        limitCount?: number
    ) => Promise<T[]>
    // Thêm dữ liệu mới với key tự động
    push: <T = unknown>(path: string, data: T) => Promise<string>
    // Tạo/cập nhật dữ liệu tại path cụ thể
    set: <T = unknown>(path: string, data: T) => Promise<void>
    // Cập nhật một phần của dữ liệu
    update: <T = unknown>(path: string, data: Partial<T>) => Promise<void>
    // Xóa dữ liệu
    remove: (path: string) => Promise<void>
    // Cập nhật dữ liệu theo ID
    updateById: <T = unknown>(
        path: string,
        id: string,
        data: Partial<T>
    ) => Promise<void>
    // Xóa dữ liệu theo ID
    removeById: (path: string, id: string) => Promise<void>
}

// Interface mở rộng chỉ cho client-side (chứa phương thức subscribe)
export interface IClientFirebaseService extends IFirebaseService {
    // Theo dõi thay đổi dữ liệu (realtime)
    subscribe: <T = unknown>(
        path: string,
        callback: (data: T[]) => void
    ) => () => void
}

// Typings cho các kết quả trả về
export interface FirebaseEntity {
    id: string
    [key: string]: unknown
}

// Chuyển đổi DataSnapshot thành mảng có key
const snapshotToArray = (snapshot: DataSnapshot): FirebaseEntity[] => {
    const result: FirebaseEntity[] = []
    if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
            result.push({
                id: childSnapshot.key as string,
                ...childSnapshot.val(),
            })
        })
    }
    return result
}

// Chuyển đổi DataSnapshot thành object có key
const snapshotToObject = (snapshot: DataSnapshot): FirebaseEntity | null => {
    if (snapshot.exists()) {
        return {
            id: snapshot.key as string,
            ...snapshot.val(),
        }
    }
    return null
}

// Service cơ bản dùng cho cả server và client
export const firebaseService: IFirebaseService = {
    // Lấy tất cả dữ liệu từ một node
    getAll: async <T = unknown>(path: string): Promise<T[]> => {
        try {
            const dataRef = ref(database, path)
            const snapshot = await get(dataRef)
            return snapshotToArray(snapshot) as T[]
        } catch (error) {
            console.error(`Error getting data from ${path}:`, error)
            throw error
        }
    },
    // Lấy dữ liệu theo ID cụ thể
    getById: async <T = unknown>(
        path: string,
        id: string
    ): Promise<T | null> => {
        try {
            const dataRef = ref(database, `${path}/${id}`)
            const snapshot = await get(dataRef)
            return snapshotToObject(snapshot) as T | null
        } catch (error) {
            console.error(`Error getting data at ${path}/${id}:`, error)
            throw error
        }
    },
    // Lấy dữ liệu theo điều kiện (filter)
    getByQuery: async <T = unknown>(
        path: string,
        childPath: string,
        value: unknown,
        limitCount = 10
    ): Promise<T[]> => {
        try {
            const dataRef = ref(database, path)
            const dataQuery = query(
                dataRef,
                orderByChild(childPath),
                equalTo(value as number | string | boolean | null),
                limitToLast(limitCount)
            )
            const snapshot = await get(dataQuery)
            return snapshotToArray(snapshot) as T[]
        } catch (error) {
            console.error(`Error querying data from ${path}:`, error)
            throw error
        }
    },
    // Thêm dữ liệu mới với key tự động
    push: async <T = unknown>(path: string, data: T): Promise<string> => {
        try {
            const dataRef = ref(database, path)
            const newRef = push(dataRef)
            // Thêm timestamps
            const dataWithTimestamp = {
                ...(data as object),
                createdAt: new Date().toISOString(),
            }
            await set(newRef, dataWithTimestamp)
            return newRef.key as string
        } catch (error) {
            console.error(`Error pushing data to ${path}:`, error)
            throw error
        }
    },
    // Tạo/cập nhật dữ liệu tại path cụ thể
    set: async <T = unknown>(path: string, data: T): Promise<void> => {
        try {
            const dataRef = ref(database, path)
            await set(dataRef, data)
        } catch (error) {
            console.error(`Error setting data at ${path}:`, error)
            throw error
        }
    },
    // Cập nhật một phần của dữ liệu
    update: async <T = unknown>(
        path: string,
        data: Partial<T>
    ): Promise<void> => {
        try {
            const dataRef = ref(database, path)
            // Thêm timestamp
            const dataWithTimestamp = {
                ...(data as object),
                updatedAt: new Date().toISOString(),
            }
            await update(dataRef, dataWithTimestamp)
        } catch (error) {
            console.error(`Error updating data at ${path}:`, error)
            throw error
        }
    },
    // Cập nhật dữ liệu theo ID
    updateById: async <T = unknown>(
        path: string,
        id: string,
        data: Partial<T>
    ): Promise<void> => {
        try {
            const dataRef = ref(database, `${path}/${id}`)
            // Thêm timestamp
            const dataWithTimestamp = {
                ...(data as object),
                updatedAt: new Date().toISOString(),
            }
            await update(dataRef, dataWithTimestamp)
        } catch (error) {
            console.error(`Error updating data at ${path}/${id}:`, error)
            throw error
        }
    },
    // Xóa dữ liệu
    remove: async (path: string): Promise<void> => {
        try {
            const dataRef = ref(database, path)
            await remove(dataRef)
        } catch (error) {
            console.error(`Error removing data at ${path}:`, error)
            throw error
        }
    },
    // Xóa dữ liệu theo ID
    removeById: async (path: string, id: string): Promise<void> => {
        try {
            const dataRef = ref(database, `${path}/${id}`)
            await remove(dataRef)
        } catch (error) {
            console.error(`Error removing data at ${path}/${id}:`, error)
            throw error
        }
    },
}

// Hàm subscribe riêng cho client-side trong một file riêng
export const clientFirebaseService: IClientFirebaseService = {
    ...firebaseService,
    // Theo dõi thay đổi dữ liệu (realtime) - chỉ có ở phía client
    subscribe: <T = unknown>(
        path: string,
        callback: (data: T[]) => void
    ): (() => void) => {
        const dataRef: DatabaseReference = ref(database, path)
        // Bắt đầu lắng nghe sự kiện
        onValue(dataRef, (snapshot: DataSnapshot) => {
            const data = snapshotToArray(snapshot) as T[]
            callback(data)
        })
        // Trả về hàm hủy subscription
        return () => off(dataRef)
    },
}
