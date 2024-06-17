'use client'
import { useAppState } from '@/context/AppState'
import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function CartWrapper() {
	return (
		<div className='py-2 px-3 flex justify-end bg-custom-green'>
			<Link href={'/cart_items'}>
				<ShoppingBagIcon className='w-10 h-10' />
			</Link>
		</div>
	)
}
