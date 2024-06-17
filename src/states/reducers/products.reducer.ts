'use client'
import { ActionsEnum } from '@/enums/actions.enum'
import { IActions } from '@/interfaces/actions'
import { IProductItem } from '@/interfaces/product'

export interface IProductsReducer {
	products: IProductItem[]
}

export const productsInitialState: IProductsReducer = {
	products: {} as IProductItem[],
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
