'use client'

import { IAppState } from '@/interfaces/appState'
import { IActions } from '../../interfaces/actions'
import { eventoReducer, productsInitialState } from './eventos.reducer'

export const appInitialState: IAppState = {
	products: productsInitialState,
}

export function combineReducer(state: IAppState, action: IActions) {
	return {
		...state,
		products: eventoReducer(state.products, action),
	} satisfies IAppState
}
