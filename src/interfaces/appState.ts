import { IProductsReducer } from '@/states/reducers/eventos.reducer'

export interface IStates<S, D> {
	state: S
	dispatch(arg: D): void
}
export interface IAppState {
	products: IProductsReducer
}
