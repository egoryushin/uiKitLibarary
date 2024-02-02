import { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

const meta: Meta<typeof Text> = {
	title: 'Components/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		align: 'center',
		emphasis: 'low',
		size: 'base',
		weight: 'normal',
		italic: true,
		underline: true,
		linethrough: true,
	},
}
