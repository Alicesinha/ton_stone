import { ActionsEnum } from '@/enums/actions.enum'
import { IProductItem } from './product'
import { ICardStore } from './card'

interface SetAppStateAction {
	type: ActionsEnum.SET_APP_STATE
	response: any
}

interface GetProductsAction {
	type: ActionsEnum.GET_PRODUCTS
	response: IProductItem[]
}
interface AddToCartAction {
	type: ActionsEnum.ADD_TO_CART
	response: ICardStore[]
}
interface RemoveFromCartAction {
	type: ActionsEnum.REMOVE_FROM_CART
	response: ICardStore[]
}

export type IActions =
	| SetAppStateAction
	| GetProductsAction
	| AddToCartAction
	| RemoveFromCartAction
