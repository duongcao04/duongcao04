import axios from 'axios'

export const BASE_URL = String(process.env.NEXT_PUBLIC_API_ENDPOINT)

export type ApiResponse<T = unknown, D = Record<string, unknown>> = {
	success: boolean
	message: string
	error?: string
	result?: T
	meta?: D
	timestamp?: string
}

export type ApiError = {
	success: boolean
	message: string
	error?: string
	timestamp?: string
}

export const axiosClient = axios.create({
	baseURL: BASE_URL, // API endpoint url
	timeout: 5000, // Request timeout
	withCredentials: true, // Allow sending cookies
})

axiosClient.interceptors.request.use(
	(config) => {
		config.headers['Content-Type'] = 'application/json'
		return config
	},
	(error) => {
		if (error?.response) return Promise.reject(error.response)
		return Promise.reject(error)
	}
)


axiosClient.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		// Any status code outside 2xx triggers this
		if (error.response) {
			// Server responded with a status code outside 2xx
			console.error('Response error:', error.response.status, error.response.data)
			return Promise.reject(error.response.data) // or full error.response
		} else if (error.request) {
			// Request was made but no response received
			console.error('No response received:', error.request)
			return Promise.reject({ message: 'No response from server' })
		} else {
			// Something else happened while setting up the request
			console.error('Axios error:', error.message)
			return Promise.reject({ message: error.message })
		}
	}
)