import { Meta, StoryObj } from '@storybook/react'
import { ModalWindow } from './ModalWindow'

const meta: Meta<typeof ModalWindow> = {
	title: 'Examples/Modal',
	component: ModalWindow,
	parameters: {
		layout: 'centered',
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Modal: Story = {}
