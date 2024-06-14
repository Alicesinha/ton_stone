import { APIError } from '@services/errorService'
import axios, { AxiosRequestConfig } from 'axios'

export async function serviceAPI<T>(
	endpoint: string,
	options: AxiosRequestConfig = {},
): Promise<T> {
	try {
		const response = await axios({ url: endpoint, ...options })
		return response.data
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const response = error.response

			if (response) {
				throw new APIError(
					response.data.messageKey || 'API error',
					response.status,
				)
			} else {
				throw new APIError('Network or server error', 500)
			}
		}

		throw new APIError('Unknown error', 500)
	}
}
