import type { NextPage } from 'next'
import { Box, Button, Flex, Grid, Heading, Text } from '../../src/ui/'
import { Header } from '../../src/components/Header/Header'
import NextImage from 'next/image'
import { CalculateFreight } from '../../src/components/CalculateFreight/CalculateFreight'

const placeholderLoader = () =>
	'https://via.placeholder.com/150.png/dc7e6f/FFFFFF'

const ProductPage: NextPage = () => {
	return (
		<Box
			css={{
				minHeight: '100vh',
				width: '100%',
			}}
		>
			<Header />
			<Flex
				justify='center'
				css={{
					width: '100%',
				}}
			>
				<Grid
					alignContent='center'
					css={{
						maxWidth: '$5xl',
						g: '$3',
						gridTemplateColumns: '1fr',

						p: '$3',
						'@bp1': {
							p: '$5',
							gridTemplateColumns: '1fr $3xs',
						},
					}}
				>
					<Flex
						as='section'
						wrap={'wrap'}
						css={{
							width: '100%',
							gap: '$3',
						}}
					>
						<Flex
							as={'main'}
							wrap={'wrap'}
							direction={'column'}
							align={'start'}
							css={{
								gap: '$3',
								'@bp2': {
									flexDirection: 'row',
									gap: '$5',
									alignItems: 'start',
									justifyContent: 'flex-end',
								},
							}}
						>
							<Heading
								css={{
									marginRight: 'auto',
								}}
							>
								product name
							</Heading>

							<Text aria-label='product description'>
								rich text content here Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Modi porro veniam distinctio velit debitis
								voluptate? Tenetur excepturi ipsum harum ullam, voluptate
								dignissimos doloribus maxime, ratione cupiditate nobis expedita
								voluptatum saepe?
							</Text>
						</Flex>
					</Flex>
					<Grid
						alignContent={'center'}
						css={{
							// gridTemplateColumns: 'max-content min-content',
							alignItems: 'center',
							g: '$5',
							p: '$4',
							height: 'fit-content',
							backgroundColor: '$rust90',
							borderRadius: '$lg',
						}}
					>
						<Text
							aria-label='current price'
							css={{
								color: 'White',
								fontWeight: 'bold',
								fontSize: '1.5rem',
							}}
						>
							R$ 416,00
						</Text>
						<Text
							aria-label='original price'
							css={{
								color: 'White',
								textDecoration: 'line-through',
								fontWeight: 'thin',
							}}
						>
							R$ 520,00
						</Text>
						<Text
							aria-label='user ratings'
							css={{
								color: 'White',
							}}
						>
							5 &#9733; (40 ratings)
						</Text>
						<Text
							aria-label='quantity in stock'
							css={{
								color: 'White',
							}}
						>
							18 items in stock
						</Text>
					</Grid>
					<Box
						css={{
							position: 'relative',
							width: '100%',
							aspectRatio: '4/3',
						}}
					>
						<NextImage
							alt='image placeholder'
							loader={placeholderLoader}
							src={'https://via.placeholder.com/150.png'}
							fill={true}
							style={{
								borderRadius: '0.5rem',
							}}
						/>
					</Box>
					<Flex
						as={'aside'}
						direction='column'
						css={{
							width: '100%',
							gap: '$2',
						}}
					>
						<Button variant={'primary'}>add to chart</Button>

						<CalculateFreight />
					</Flex>
				</Grid>
			</Flex>
		</Box>
	)
}

export default ProductPage
