'use client'

import { ActionsEnum } from '@/enums/actions.enum'
import { IActions } from '@/interfaces/actions'
import { ICardStore } from '@/interfaces/card'

export const addToCart = (
	dispatch: (action: IActions) => void,
	product: ICardStore,
	productArray: ICardStore[],
) => {
	const updatedProducts = [...productArray, product]

	dispatch({ type: ActionsEnum.ADD_TO_CART, response: updatedProducts })
}
export const removeToCart = (
	dispatch: (action: IActions) => void,
	product: ICardStore,
	productArray: ICardStore[],
) => {
	const updatedProducts = productArray.filter(item => item.id !== product.id)
	dispatch({ type: ActionsEnum.REMOVE_FROM_CART, response: updatedProducts })
}
