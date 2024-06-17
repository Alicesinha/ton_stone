'use client'
import ProductCard from '@/components/product_item_wrapper'
import { useEffect, useState } from 'react'
import { useAppState } from '@/context/AppState'
import { getProducts } from '@/states/actions/products.actions'
import LoadingSpinner from '@/components/loading'
import { ErrorToast } from '@/utils/toast'

export default function ShoppingWrapper() {
	const {
		state: {
			products: { products },
		},
		dispatch,
	} = useAppState()
	const [loading, setLoading] = useState<boolean>(false)

	const getProductsToShow = async () => {
		try {
			setLoading(true)
			await getProducts(dispatch)
		} catch (error) {
			ErrorToast('Failed to fetch products')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getProductsToShow()
	}, [])

	return (
		<>
			<span className='text-1xl text text-black text-end'>Product Items</span>

			<div className='grid grid-cols-2 sm:grid-cols-4 gap-4 border rounded-lg p-4'>
				{loading && <LoadingSpinner />}
				{products &&
					products.length > 0 &&
					products.map(product => (
						<ProductCard key={product.id} itemData={product} />
					))}
			</div>
		</>
	)
}
