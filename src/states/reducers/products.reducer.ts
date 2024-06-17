'use client'
import { ActionsEnum } from '@/enums/actions.enum'
import { ProductItem } from '@interfaces/product'
import { IActions } from '@interfaces/actions'

export interface IProductsReducer {
	products: ProductItem[]
}

export const productsInitialState: IProductsReducer = {
	products: {} as ProductItem[],
}

export function productsReducer(
	state: IProductsReducer = productsInitialState,
	action: IActions,
): IProductsReducer {
	const { type, response } = action
	switch (type) {
		case ActionsEnum.SET_APP_STATE:
			return {
				...state,
				...response.products,
			}
		case ActionsEnum.GET_PRODUCTS:
			return {
				...state,
				products: response,
			}
		default:
			return state
	}
}
