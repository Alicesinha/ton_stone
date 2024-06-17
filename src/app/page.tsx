'use client'

import HeaderCart from '@/components/cart_wrapper'
import ShoppingCard from '../components/shopping_cart'

export default function Home() {
	return (
		<main className=' min-h-screen'>
			<HeaderCart />
			<ShoppingCard />
		</main>
	)
}
