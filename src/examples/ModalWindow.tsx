import { Box, Stack } from '@/components/Layout'
import { Button } from '../components/Button/index'
import { Text } from '../components/Text/index'

export const ModalWindow = () => {
	return (
		<>
			<Box className='px-6 py-4 bg-blue-100 border border-blue-400 rounded-md'>
				<Stack>
					<Text
						as='h2'
						align='center'
						size='base'
						weight='medium'
						className='mb-3'
					>
						Your title
					</Text>
					<Text
						as='span'
						align='left'
						size='sm'
						weight='normal'
						className='mb-3'
					>
						Description of modalwindow
					</Text>
					<Button>Close</Button>
				</Stack>
			</Box>
		</>
	)
}
