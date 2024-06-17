import { ActionsEnum } from '@/enums/actions.enum'
import { ProductItem } from './product'

// export interface IActions<T> {
// 	type: ActionsEnum
// 	response: T
// }
interface SetAppStateAction {
	type: ActionsEnum.SET_APP_STATE
	response: { products: ProductItem[] } // ajuste conforme necessário
}

interface GetProductsAction {
	type: ActionsEnum.GET_PRODUCTS
	response: ProductItem[]
}
export type IActions = SetAppStateAction | GetProductsAction
