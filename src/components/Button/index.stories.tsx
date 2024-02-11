import { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
	},
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Button',
	},
}

export const SecondaryGrey: Story = {
	args: {
		variant: 'secondaryGrey',
		children: 'Button',
	},
}

export const PrimaryError: Story = {
	args: {
		variant: 'primaryError',
		children: 'Button',
	},
}

export const Disabled: Story = {
	args: {
		variant: 'disabled',
		children: 'Button',
	},
}
