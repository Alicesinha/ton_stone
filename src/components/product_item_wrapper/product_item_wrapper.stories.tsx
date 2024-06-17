import { Providers } from '@/context'
import ProductCard from '.'
import { Meta, StoryObj } from '@storybook/react'
import * as NextImage from 'next/image'
import { ImageProps } from 'next/image'

const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props: ImageProps) => <OriginalNextImage {...props} unoptimized />,
})

export default {
	title: 'Components/ProductCard',
	component: ProductCard,
	decorators: [
		Story => {
			return <Providers>{Story()}</Providers>
		},
	],
} as Meta

export const Primary: StoryObj = {
	args: {},
}
