'use client'

import { IAppState } from '@/interfaces/appState'
import { IActions } from '../../interfaces/actions'
import { productsReducer, productsInitialState } from './products.reducer'
import { cartProductsReducer, productToCardInitialState } from './card.reducer'

export const appInitialState: IAppState = {
	products: productsInitialState,
	productToCard: productToCardInitialState,
}

export function combineReducer(state: IAppState, action: IActions) {
	return {
		...state,
		products: productsReducer(state.products, action),
		productToCard: cartProductsReducer(state.productToCard, action),
	} satisfies IAppState
}
