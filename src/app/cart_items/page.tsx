'use client'
import { useAppState } from '@/context/AppState'
import React from 'react'
import ProductCard from '@/components/product_item_wrapper'
import { ArrowLeftCircleIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

export default function CartWrapper() {
	const {
		state: {
			productToCard: { productToCard },
		},
	} = useAppState()

	return (
		<div className='max-w-9xl mx-auto '>
			<div className='py-2 px-3 flex justify-between bg-custom-green align-center '>
				<Link href={'/'}>
					<ArrowLeftCircleIcon className='w-10 h-10' />
				</Link>
				<h2 className='mb-0 text-2xl font-bold text text-white'>
					Shopping Cart
				</h2>
			</div>
			<div className='bg-custom-light-gray'>
				<h3 className='mb-0 text-1xl text text-black text-end'>
					{productToCard.length === 0
						? 'No items in the cart'
						: `Total items in the cart: ${productToCard.length}`}
				</h3>
				<p className='mb-0 text-1xl text text-black text-end'>
					Total: {productToCard.reduce((acc, item) => acc + item.price, 0)}
				</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg p-4'>
				{productToCard.map(product => (
					<ProductCard key={product.id} itemData={product} />
				))}
			</div>
		</div>
	)
}
