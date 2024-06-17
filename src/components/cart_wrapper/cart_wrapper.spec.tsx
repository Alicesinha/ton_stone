/* eslint-disable react/display-name */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import HeaderCart from '.'

jest.mock('next/link', () => {
	return ({ children, href }: { children: React.ReactNode; href: string }) => (
		<a href={href}>{children}</a>
	)
})

jest.mock('@heroicons/react/20/solid', () => {
	return {
		ShoppingBagIcon: () => <div data-testid='shopping-bag-icon' />,
	}
})

test('renders HeaderCart component', () => {
	const { getByTestId } = render(<HeaderCart />)

	const iconElement = getByTestId('shopping-bag-icon')
	expect(iconElement).toBeInTheDocument()
})

test('renders link with correct href', () => {
	const { getByRole } = render(<HeaderCart />)

	const linkElement = getByRole('link')
	expect(linkElement).toHaveAttribute('href', '/cart_items')
})

test('renders with correct class', () => {
	const { container } = render(<HeaderCart />)

	expect(container.firstChild).toHaveClass(
		'py-2 px-3 flex justify-end bg-custom-green',
	)
})
