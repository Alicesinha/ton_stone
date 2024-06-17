import { IProductItem } from './product'

export interface ICardStore {
	id: number
	title: string
	price: number
	image: string
	description?: string
}
