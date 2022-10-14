import NextLink from 'next/link'

export const Header = () => {
	return (
		<div
			style={{
				outline: '1px solid black',
				padding: '1.5rem',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}
		>
			<NextLink href={'/product/1'}>buyrust</NextLink>
			<div
				style={{
					display: 'flex',
					gap: '10px'
				}}
			>
				<button>login</button>
				<span>0</span>
			</div>
		</div>
	)
}
