import type { NextPage } from 'next'
import { Header } from '../../src/components/Header/Header'

const ProductPage: NextPage = () => {
	return (
		<div
			style={{
				minHeight: '100vh'
			}}
		>
			<Header />
			<div
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<div
					style={{
						border: '3px solid red',
						maxWidth: '60rem',
						display: 'flex'
					}}
				>
					<main
						style={{
							border: '2px solid green',
							flex: 1
						}}
					>
						<h1>product name</h1>
						<span>40 ratings</span>
						<span>5 &#9733;</span>
						<span>R$ 420,00</span>
						<p>
							rich text content here Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Modi porro veniam distinctio velit debitis
							voluptate? Tenetur excepturi ipsum harum ullam, voluptate
							dignissimos doloribus maxime, ratione cupiditate nobis expedita
							voluptatum saepe?
						</p>
					</main>

					<aside
						style={{
							border: '2px solid green',
							flex: 0.5
						}}
					>
						<button>add to chart</button>
					</aside>
				</div>
			</div>
		</div>
	)
}

export default ProductPage
