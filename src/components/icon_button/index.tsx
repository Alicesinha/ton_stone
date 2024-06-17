'use client'

import { MouseEventHandler, ReactNode } from 'react'

interface IconButtonProps {
	autoFocus?: boolean
	color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
	borderOption: 'true' | 'false'
	disabled?: boolean
	children: ReactNode
	type: 'button' | 'submit'
	onClick: MouseEventHandler<HTMLButtonElement>
}

const colorClasses = {
	primary: 'bg-blue-500 text-white',
	secondary: 'bg-gray-500 text-white',
	success: 'bg-green-500 text-white',
	error: 'bg-red-500 text-white',
	info: 'bg-teal-500 text-white',
	warning: 'bg-yellow-500 text-black',
}

export function IconButtonStyled({
	children,
	color,
	autoFocus = false,
	disabled,
	borderOption,
	type = 'button',
	onClick,
}: IconButtonProps) {
	const baseClasses = 'p-2 rounded inline-flex items-center justify-center'
	const borderClasses = borderOption === 'true' ? 'border' : 'border-none'
	const colorClass = color ? colorClasses[color] : ''

	return (
		<button
			className={`${baseClasses} ${borderClasses} ${colorClass}`}
			onClick={onClick}
			disabled={disabled}
			autoFocus={autoFocus}
			type={type}
		>
			{children}
		</button>
	)
}
