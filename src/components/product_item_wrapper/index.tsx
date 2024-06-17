'use client'

import { ProductItem } from '@interfaces/product'
import Image from 'next/image'

interface ProductItemProps {
	itemData: ProductItem
}
export default function ProductCard({ itemData }: ProductItemProps) {
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
						<button className='px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded'>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
