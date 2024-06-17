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

const tonStoneStateContext = createContext<IAppStateContext>(
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
		<tonStoneStateContext.Provider value={{ dispatch, state }}>
			{children}
		</tonStoneStateContext.Provider>
	)
}

export function useAppState() {
	const { state, dispatch } = useContext(tonStoneStateContext)

	return {
		state,
		dispatch,
	}
}
