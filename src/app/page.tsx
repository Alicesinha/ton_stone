'use client'

import CartWrapper from '@/components/cart_wrapper'
import ShoppingCard from '../components/shopping_cart/page'

export default function Home() {
	return (
		<main className=' min-h-screen'>
			<CartWrapper />
			<ShoppingCard />
		</main>
	)
}
