import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'

const buttonStyles = cva(
	['w-full', 'rounded-md', 'font-semibold', 'focus: outline-none'],
	{
		variants: {
			variant: {
				solid: '',
				outline: 'border-2',
				ghost: 'transition-colors duration-300',
				disabled: 'disabled: cursor-not-allowed',
			},
			size: {
				sm: 'px-2 py-2 text-sm',
				md: 'px-4 py-4 text-base',
				lg: 'px-6 py-6 text-lg',
			},
			colorscheme: {
				primary: 'text-white',
			},
		},
		compoundVariants: [
			{
				variant: 'solid',
				colorscheme: 'primary',
				className: 'bg-primary-500 hover:bg-primary-600',
			},
			{
				variant: 'outline',
				colorscheme: 'primary',
				className:
					'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100',
			},
			{
				variant: 'ghost',
				colorscheme: 'primary',
				className: 'text-primary-600 bg-transparent hover:bg-primary-100',
			},
			{
				variant: 'disabled',
				colorscheme: 'primary',
				className:
					'text-primary-200 bg-transparent disabled:cursor-not-allowed',
			},
		],
		defaultVariants: {
			variant: 'solid',
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
