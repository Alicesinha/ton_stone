'use client'
import { useAppState } from '@/context/AppState'
import React from 'react'
import ProductCard from '../product_item_wrapper'

export default function CartWrapper() {
	const {
		state: {
			productToCard: { productToCard },
		},
	} = useAppState()

	return <div className='p-4'></div>
}
