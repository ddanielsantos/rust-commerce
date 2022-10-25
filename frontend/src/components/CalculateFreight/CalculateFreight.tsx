import { Flex, Input, Button, Text } from '../../ui'

export const CalculateFreight = () => {
	return (
		<Flex
			direction='column'
			css={{
				gap: '1rem',
			}}
		>
			<Text>calculate freight cost</Text>
			<Text htmlFor='tax' as={'label'}>
				your location
			</Text>
			<Input type='text' name='tax' id='tax' maxLength={10} />
			<Button variant={'secondary'}>calculate</Button>
		</Flex>
	)
}
