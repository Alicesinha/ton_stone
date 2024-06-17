'use client'

import { IAppState } from '@/interfaces/appState'
import { IActions } from '../../interfaces/actions'
import { productsReducer, productsInitialState } from './products.reducer'

export const appInitialState: IAppState = {
	products: productsInitialState,
}

export function combineReducer(state: IAppState, action: IActions) {
	return {
		...state,
		products: productsReducer(state.products, action),
	} satisfies IAppState
}
