import { IProductsReducer } from '@/states/reducers/products.reducer'

export interface IStates<S, D> {
	state: S
	dispatch(arg: D): void
}
export interface IAppState {
	products: IProductsReducer
}
