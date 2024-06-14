'use client'

import ShoppingCard from './shoppingCart/page'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<ShoppingCard />
		</main>
	)
}
