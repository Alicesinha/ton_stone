import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useAppState } from '@/context/AppState'
import { addToCart, removeToCart } from '@/states/actions/addToCard.actions'
import { IProductItem } from '@/interfaces/product'
import ProductCard from '.'
import { ICardStore } from '@/interfaces/card'

jest.mock('@/context/AppState', () => ({
	useAppState: jest.fn(),
}))

jest.mock('@/states/actions/addToCard.actions', () => ({
	addToCart: jest.fn(),
	removeToCart: jest.fn(),
}))

const mockDispatch = jest.fn()
const productToCard = [] as ICardStore[]

const mockAppState = {
	state: {
		productToCard: { productToCard },
	},
	dispatch: mockDispatch,
}

const product: IProductItem = {
	id: 1,
	title: 'Test Product',
	description: 'This is a test product description',
	price: 10,
	image: '/test-image.jpg',
	category: 'test',
	rating: {
		rate: 4,
		count: 10,
	},
}

describe('ProductCard', () => {
	beforeEach(() => {
		;(useAppState as jest.Mock).mockReturnValue(mockAppState)
	})

	test('renders product details correctly', () => {
		const { getByText, getByAltText } = render(
			<ProductCard itemData={product} />,
		)

		expect(getByText('Test Product')).toBeInTheDocument()
		expect(getByText('This is a test product description')).toBeInTheDocument()
		expect(getByText(10)).toBeInTheDocument()
		expect(getByAltText('Test Product')).toBeInTheDocument()
	})

	test('calls addToCart when add button is clicked', () => {
		const { getByText } = render(<ProductCard itemData={product} />)

		const addButton = getByText('Add')
		fireEvent.click(addButton)

		expect(addToCart).toHaveBeenCalledWith(
			mockDispatch,
			{
				id: 1,
				title: 'Test Product',
				price: 10,
				image: '/test-image.jpg',
			},
			productToCard,
		)
	})

	test('calls removeToCart when remove button is clicked', () => {
		productToCard.push({
			id: 1,
			title: 'Test Product',
			price: 10,
			image: '/test-image.jpg',
		} as ICardStore)

		const { getByText } = render(<ProductCard itemData={product} />)

		const removeButton = getByText('Remove')
		fireEvent.click(removeButton)

		expect(removeToCart).toHaveBeenCalledWith(
			mockDispatch,
			{
				id: 1,
				title: 'Test Product',
				price: 10,
				image: '/test-image.jpg',
			},
			productToCard,
		)
	})
})
