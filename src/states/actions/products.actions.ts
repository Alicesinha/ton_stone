'use client'

import { ActionsEnum } from '@/enums/actions.enum'
import { IActions } from '@/interfaces/actions'
import { getAllProducts } from '@/services/products'

export const getProducts = async (dispatch: (action: IActions) => void) => {
	try {
		const response = await getAllProducts()
		if (response) {
			dispatch({ type: ActionsEnum.GET_PRODUCTS, response })
		}
	} catch (error) {
		console.log(error)
	}
}
