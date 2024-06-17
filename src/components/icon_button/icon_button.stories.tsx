import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { IconButtonStyled } from '.'

const meta: Meta<typeof IconButtonStyled> = {
	title: 'Components/IconButtonStyled',
	component: IconButtonStyled,
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: [
					'primary',
					'secondary',
					'success',
					'error',
					'info',
					'warning',
				],
			},
		},
		borderOption: {
			control: {
				type: 'select',
				options: ['true', 'false'],
			},
		},
	},
}

export default meta

type Story = StoryObj<typeof IconButtonStyled>

export const Primary: Story = {
	args: {
		children: 'Primary Button',
		color: 'primary',
		borderOption: 'true',
		disabled: false,
		type: 'button',
		onClick: () => alert('Primary Button Clicked'),
	},
}

export const Secondary: Story = {
	args: {
		children: 'Secondary Button',
		color: 'secondary',
		borderOption: 'true',
		disabled: false,
		type: 'button',
		onClick: () => alert('Secondary Button Clicked'),
	},
}

export const Success: Story = {
	args: {
		children: 'Success Button',
		color: 'success',
		borderOption: 'true',
		disabled: false,
		type: 'button',
		onClick: () => alert('Success Button Clicked'),
	},
}

export const Error: Story = {
	args: {
		children: 'Error Button',
		color: 'error',
		borderOption: 'true',
		disabled: false,
		type: 'button',
		onClick: () => alert('Error Button Clicked'),
	},
}
