import { Providers } from '@/context'
import ShoppingWrapper from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Components/ShoppingWrapper',
	component: ShoppingWrapper,
	decorators: [
		Story => {
			return <Providers>{Story()}</Providers>
		},
	],
} as Meta
export const Primary: StoryObj = {
	args: {},
}
