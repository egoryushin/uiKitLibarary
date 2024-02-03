import { Box, Stack } from '@/components/Layout'
import { Text } from '../components'
import { Button } from '../components/Button/index'
import { Input } from '../components/Input/index'

export const LoginForm = () => {
	return (
		<Box className='px-8 py-6 border border-gray-400 rounded-xl'>
			<Stack>
				<Text
					as='h2'
					weight={'bold'}
					align={'center'}
					size={'3xl'}
					className='mb-2'
				>
					Login
				</Text>

				<Text
					as='span'
					emphasis={'low'}
					size={'sm'}
					align={'left'}
					className='mb-6'
				>
					Please enter your credentials to login
				</Text>

				<Text
					as='label'
					htmlFor='username'
					size={'sm'}
					weight={'medium'}
					className='mb-1.5'
				>
					Username
				</Text>
				<Input type='text' placeholder='Username' className='mb-4' />
				<Text
					as='label'
					htmlFor='password'
					size={'sm'}
					weight={'medium'}
					className='mb-1.5'
				>
					Password
				</Text>
				<Input type='password' placeholder='Password' className='mb-4' />
				<Button type='submit' variant={'solid'} className='mb-6'>
					Sign in
				</Button>
			</Stack>
		</Box>
	)
}
