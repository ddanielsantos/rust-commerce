import NextLink from 'next/link'
import { Button, Text, Flex } from '../../ui/'

export const Header = () => {
	return (
		<Flex
			justify={'between'}
			align={'center'}
			css={{
				borderBottom: '3px solid $rust100',
				width: '100%',
				p: '$3',
				'@bp1': {
					p: '$5',
				},
			}}
		>
			<NextLink href={'/product/1'}>
				<Text
					style={{
						textDecoration: 'underline',
					}}
				>
					buyrust
				</Text>
			</NextLink>
			<Flex
				justify={'center'}
				align={'center'}
				css={{
					gap: '10px',
				}}
			>
				<Button variant={'secondary'}>login</Button>
				<Text>0</Text>
			</Flex>
		</Flex>
	)
}
