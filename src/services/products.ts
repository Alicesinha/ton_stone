import { ProductItem } from '@/interfaces/Product'
import { serviceAPI } from '@services/apiService'

const BaseUrl = 'https://fakestoreapi.com/'

export async function getAllProducts() {
	console.log(serviceAPI)
	const response: ProductItem[] = await serviceAPI(`${BaseUrl}products`, {
		method: 'get',
	})
	return response
}
