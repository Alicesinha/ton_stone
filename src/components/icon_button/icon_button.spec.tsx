import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { IconButtonStyled } from '.'

describe('IconButtonStyled', () => {
	it('renders with the correct text and color', () => {
		render(
			<IconButtonStyled
				color='primary'
				borderOption='true'
				type='button'
				onClick={() => console.log('clicked')}
			>
				Primary Button
			</IconButtonStyled>,
		)

		const button = screen.getByText('Primary Button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveClass('bg-blue-500 text-white border')
	})

	it('calls the onClick handler when clicked', () => {
		const handleClick = jest.fn()
		render(
			<IconButtonStyled
				color='secondary'
				type='button'
				borderOption='false'
				onClick={handleClick}
			>
				Click Me
			</IconButtonStyled>,
		)

		const button = screen.getByText('Click Me')
		fireEvent.click(button)

		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it('is disabled when the disabled prop is true', () => {
		render(
			<IconButtonStyled
				color='success'
				borderOption='true'
				disabled
				type='button'
				onClick={() => console.log('clicked')}
			>
				Disabled Button
			</IconButtonStyled>,
		)

		const button = screen.getByText('Disabled Button')
		expect(button).toBeDisabled()
	})

	it('applies the autofocus attribute correctly', () => {
		render(
			<IconButtonStyled
				color='error'
				borderOption='true'
				autoFocus
				type='button'
				onClick={() => console.log('clicked')}
			>
				Autofocus Button
			</IconButtonStyled>,
		)

		const button = screen.getByText('Autofocus Button')
		expect(button).toHaveFocus()
	})
})
