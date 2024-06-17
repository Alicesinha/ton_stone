'use client'
import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useReducer,
} from 'react'
import { IStates } from '@/interfaces/appState'
import { IActions } from '@/interfaces/actions'
import {
	appInitialState,
	combineReducer,
} from '../../states/reducers/app.reducer'
import { IAppState } from '@/interfaces/appState'

interface IAppStateContext extends IStates<IAppState, IActions> {}

interface Props {
	children: ReactNode
}

const CadastroStateContext = createContext<IAppStateContext>(
	{} as IAppStateContext,
)

export function AppStateProvider({ children }: Props) {
	const [state, reducerDispatch] = useReducer(combineReducer, appInitialState)

	function dispatch(
		action: IActions | ((dispatch: (action: IActions) => void) => void),
	) {
		if (typeof action === 'function') {
			return action(reducerDispatch)
		}

		reducerDispatch(action)
	}

	return (
		<CadastroStateContext.Provider value={{ dispatch, state }}>
			{children}
		</CadastroStateContext.Provider>
	)
}

export function useAppState() {
	const { state, dispatch } = useContext(CadastroStateContext)

	return {
		state,
		dispatch,
	}
}
