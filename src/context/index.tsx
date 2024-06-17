import { AppStateProvider } from './AppState'

interface ProviderProps {
	children: React.ReactNode[] | React.ReactNode
}

export function Providers({ children }: ProviderProps) {
	return <AppStateProvider>{children}</AppStateProvider>
}
