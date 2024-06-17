'use client'

import HeaderCart from '@/components/cart_wrapper'
import ShoppingWrapper from '@/components/shopping_wrapper'

export default function Home() {
	return (
		<main className=' min-h-screen'>
			<HeaderCart />
			<ShoppingWrapper />
		</main>
	)
}
