import { IProductItem } from '@/interfaces/product'
import { serviceAPI } from './apiService'

const BaseUrl = 'https://fakestoreapi.com/'

export async function getAllProducts() {
	const response: IProductItem[] = await serviceAPI(`${BaseUrl}products`, {
		method: 'get',
	})

	return response
}
