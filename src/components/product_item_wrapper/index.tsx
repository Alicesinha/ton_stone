'use client'

import { useAppState } from '@/context/AppState'
import { ICardStore } from '@/interfaces/card'
import { addToCart, removeToCart } from '@/states/actions/addToCard.actions'
import { IProductItem } from '@interfaces/product'
import Image from 'next/image'

interface ProductItemProps {
	itemData: IProductItem
}
export default function ProductCard({ itemData }: ProductItemProps) {
	const {
		state: {
			productToCard: { productToCard },
		},
		dispatch,
	} = useAppState()

	const handleAddProduct = (product: ICardStore) => {
		addToCart(dispatch, product, productToCard)
	}
	const handleRemoveProduct = (product: ICardStore) => {
		removeToCart(dispatch, product, productToCard)
	}

	return (
		<div className='bg-gray-100 p-6'>
			<div className=' max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
				<Image
					src={itemData.image}
					alt={itemData.title}
					width={100}
					height={100}
					className='w-full h-48 object-cover'
				/>
				<div className='p-4'>
					<h3 className='text-xl font-bold text-gray-800'>{itemData.title}</h3>
					<p className='mt-2 text-gray-600'>{itemData.description}</p>

					<div className='flex justify-between items-center mt-4'>
						<span className='text-gray-700 font-bold text-xl'>
							{itemData.price}
						</span>
						<button
							className='px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded'
							onClick={() =>
								handleAddProduct({
									id: itemData.id,
									title: itemData.title,
									price: itemData.price,
									image: itemData.image,
								})
							}
						>
							Add to Cart
						</button>
						<button
							className='px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded'
							onClick={() =>
								handleRemoveProduct({
									id: itemData.id,
									title: itemData.title,
									price: itemData.price,
									image: itemData.image,
								})
							}
						>
							Remove to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
