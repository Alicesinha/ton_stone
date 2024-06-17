'use client'
import ProductCard from '@/components/product_item_wrapper'
import { ProductItem } from '@interfaces/product'
import { getAllProducts } from '@/services/products'
import { useEffect, useState } from 'react'

export default function ShoppingCard() {
	const [itemData, setItemData] = useState<ProductItem[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	const getProducts = async () => {
		try {
			setLoading(true)
			const response = await getAllProducts()
			if (response) {
				setItemData(response)
			}
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getProducts()
	}, [])

	return (
		<>
			{itemData.map(product => (
				<ProductCard key={product.id} itemData={product} />
			))}
		</>
	)
}
