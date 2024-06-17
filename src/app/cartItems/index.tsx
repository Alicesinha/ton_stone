'use client'
import { useAppState } from '@/context/AppState'
import React from 'react'
import ProductCard from '@/components/product_item_wrapper'

export default function CartWrapper() {
	const {
		state: {
			productToCard: { productToCard },
		},
	} = useAppState()

	return (
		<div className='max-w-9xl mx-auto p-4'>
			<h2 className='text-2xl font-bold mb-4'>Shopping Cart</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 border border-gray-300 rounded-lg p-4'>
				{productToCard.map(product => (
					<ProductCard key={product.id} itemData={product} />
				))}
			</div>
		</div>
	)
}
