import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import ShoppingWrapper from '.'
import { useAppState } from '@/context/AppState'
import { getProducts } from '@/states/actions/products.actions'
import { IProductItem } from '@/interfaces/product'

jest.mock('@/context/AppState', () => ({
	useAppState: jest.fn(),
}))

jest.mock('@/states/actions/products.actions', () => ({
	getProducts: jest.fn(),
}))

jest.mock('@/components/product_item_wrapper', () => ({
	__esModule: true,
	default: jest.fn(() => <div>Product Card</div>),
}))

jest.mock('@/components/loading', () => ({
	__esModule: true,
	default: jest.fn(() => <div>Loading...</div>),
}))

const mockDispatch = jest.fn()
const mockAppState = {
	state: {
		products: {} as IProductItem[],
	},
	dispatch: mockDispatch,
}

describe('ShoppingWrapper', () => {
	beforeEach(() => {
		;(useAppState as jest.Mock).mockReturnValue(mockAppState)
	})

	test('renders loading spinner initially', async () => {
		;(getProducts as jest.Mock).mockImplementation(() => {
			return new Promise(resolve => setTimeout(() => resolve([]), 100))
		})

		render(<ShoppingWrapper />)

		expect(screen.getByText('Loading...')).toBeInTheDocument()
		await waitFor(() =>
			expect(screen.queryByText('Loading...')).not.toBeInTheDocument(),
		)
	})

	test('renders product cards after loading', async () => {
		const products = [
			{
				id: 1,
				title: 'Product 1',
				description: 'Description 1',
				price: 10,
				image: '/image1.jpg',
				category: 'test',
				rating: {
					rate: 4,
					count: 10,
				},
			},
			{
				id: 2,
				title: 'Product 2',
				description: 'Description 2',
				price: 20,
				image: '/image2.jpg',
				category: 'test',
				rating: {
					rate: 4,
					count: 10,
				},
			},
		]
		mockAppState.state.products = products
		;(getProducts as jest.Mock).mockImplementation(() => {
			return Promise.resolve(products)
		})

		render(<ShoppingWrapper />)

		await waitFor(() => {
			expect(screen.getAllByText('Product Items')).toHaveLength(1)
		})
	})

	test('handles errors in getProducts', async () => {
		const errorMessage = 'Error fetching products'
		;(getProducts as jest.Mock).mockImplementation(() => {
			return Promise.reject(new Error(errorMessage))
		})

		render(<ShoppingWrapper />)

		await waitFor(() => {
			expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
		})

		expect(screen.queryByText('Product Card')).not.toBeInTheDocument()
	})
})
