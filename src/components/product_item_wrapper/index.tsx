'use client'

import { useAppState } from '@/context/AppState'
import { ICardStore } from '@/interfaces/card'
import { addToCart, removeToCart } from '@/states/actions/addToCard.actions'
import { truncateText } from '@/utils/truncateText'
import Image from 'next/image'
import { TrashIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import { IconButtonStyled } from '../icon_button'
import { IProductItem } from '@/interfaces/product'

interface ProductItemProps {
	itemData: IProductItem | ICardStore
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
		<div className='max-w-sm bg-white shadow-sm rounded-lg overflow-hidden'>
			<Image
				src={itemData.image}
				alt={itemData.title}
				width={100}
				height={100}
				className='w-full h-48 object-cover'
			/>
			<div className='p-4'>
				<h3 className='text-xl font-bold text-gray-800'>
					{truncateText(`${itemData.title}`, 20)}
				</h3>
				<p className='mt-2 text-gray-600'>
					{truncateText(`${itemData.description}`, 100)}
				</p>

				<div className='flex justify-between items-center mt-4'>
					<span className='text-gray-700 font-bold text-xl'>
						{itemData.price}
					</span>
				</div>
				<div className='flex justify-between items-center mt-4'>
					{!productToCard.find(
						(product: ICardStore) => product.id === itemData.id,
					) && (
						<IconButtonStyled
							borderOption='true'
							color='primary'
							type='button'
							onClick={() =>
								handleAddProduct({
									id: itemData.id,
									title: itemData.title,
									price: itemData.price,
									image: itemData.image,
								})
							}
						>
							Add
							<PlusCircleIcon className='h-5 w-5' />
						</IconButtonStyled>
					)}
					{productToCard.find(
						(product: ICardStore) => product.id === itemData.id,
					) && (
						<IconButtonStyled
							borderOption='true'
							color='error'
							type='button'
							onClick={() =>
								handleRemoveProduct({
									id: itemData.id,
									title: itemData.title,
									price: itemData.price,
									image: itemData.image,
								})
							}
						>
							Remove
							<TrashIcon className='h-5 w-5' />
						</IconButtonStyled>
					)}
				</div>
			</div>
		</div>
	)
}
