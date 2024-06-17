'use client'
import { ActionsEnum } from '@/enums/actions.enum'
import { ICardStore } from '@interfaces/card'
import { IActions } from '@interfaces/actions'

export interface IProductToCardReducer {
	productToCard: ICardStore[]
}

export const productToCardInitialState: IProductToCardReducer = {
	productToCard: [] as ICardStore[],
}

export function cartProductsReducer(
	state: IProductToCardReducer = productToCardInitialState,
	action: IActions,
): IProductToCardReducer {
	const { type, response } = action
	switch (type) {
		case ActionsEnum.SET_APP_STATE:
			return {
				...state,
				...response.productToCard,
			}
		case ActionsEnum.ADD_TO_CART:
			return {
				...state,
				productToCard: response,
			}
		case ActionsEnum.REMOVE_FROM_CART:
			return {
				...state,
				productToCard: response,
			}
		default:
			return state
	}
}
