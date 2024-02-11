import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'

const buttonStyles = cva(
	['w-full', 'rounded-lg', 'font-semibold', 'focus: outline-none'],
	{
		variants: {
			variant: {
				primary: '',
				secondary: '',
				secondaryGrey: 'border',
				primaryError: 'bg-red-600',
				// outline: 'rounded-lg ',
				// ghost: 'rounded-lg transition-colors duration-300',
				disabled: 'disabled: cursor-not-allowed',
			},
			size: {
				sm: 'px-4 py-2 text-sm',
				md: 'px-6 py-2 text-base',
				lg: 'px-8 py-4 text-xl',
			},
			colorscheme: {
				primary: 'text-white',
			},
		},
		compoundVariants: [
			{
				variant: 'primary',
				// colorscheme: 'primary',
				className:
					'bg-purple-500 hover:bg-purple-600 active:bg-purple-800 focus:ring focus:ring-purple-400',
			},
			{
				variant: 'secondary',
				// colorscheme: 'primary',
				className:
					'text-purple-800 bg-purple-50 hover:bg-purple-100 active:bg-purple-200 focus:ring focus:ring-purple-300 ',
			},
			{
				variant: 'secondaryGrey',
				// colorscheme: 'primary',
				className:
					'text-black bg-transparent hover:bg-gray-100 active:bg-gray-200 focus:ring focus:ring-gray-200',
			},
			{
				variant: 'primaryError',
				// colorscheme: 'primary',
				className:
					'hover:bg-red-700 active:bg-red-600 focus:ring focus:ring-red-300',
			},
			{
				variant: 'disabled',
				// colorscheme: 'primary',
				className: 'border bg-purple-200 disabled:cursor-not-allowed',
			},
		],
		defaultVariants: {
			variant: 'primary',
			size: 'sm',
			colorscheme: 'primary',
		},
	}
)

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant, size, colorscheme, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(buttonStyles({ variant, size, colorscheme, className }))}
				{...props}
			/>
		)
	}
)
