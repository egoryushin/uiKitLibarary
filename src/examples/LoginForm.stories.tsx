import { Meta } from '@storybook/react'
import { LoginForm } from './LoginForm'

const meta: Meta<typeof LoginForm> = {
	title: 'Examples/Form',
	component: LoginForm,
	parameters: {
		layout: 'centered',
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Login: Story = {}