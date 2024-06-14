import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL
if (!BASE_URL) {
	throw new Error('NEXT_PUBLIC_API_URL is not defined in environment variables')
}
axios.defaults.baseURL = BASE_URL
export class APIError extends Error {
	constructor(public message: string, public statusCode: number) {
		super(message)
		this.name = this.constructor.name

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor)
		}
	}
}
