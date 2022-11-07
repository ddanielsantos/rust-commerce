import { Flex, Input, Button, Text } from '../../ui'

export const CalculateFreight = () => {
	return (
		<Flex
			type='unspaced'
			direction='column'
			css={{
				gap: '$5',
			}}
		>
			<Text
				css={{
					fontWeight: 700,
				}}
			>
				calculate freight cost
			</Text>
			<Text htmlFor='tax' as={'label'}>
				your location:
			</Text>
			<Input
				type='text'
				name='tax'
				id='tax'
				maxLength={10}
				placeholder={'insert your zip code here'}
			/>
			<Button variant={'secondary'}>calculate</Button>
		</Flex>
	)
}
