import { useRadioState } from 'ariakit/radio'
import { useSelectState } from 'ariakit/select'
import { AddCardModal } from '../AddCardModal/AddCardModal'

export const PaymentSelection = () => {
	const paymentMethod = useRadioState()
	const select = useSelectState({
		defaultValue: 'credit/debit card',
		sameWidth: true,
		gutter: 10,
	})

	return (
		<>
			<AddCardModal />
		</>
		// <RadioGroup
		// 	state={paymentMethod}
		// 	style={{
		// 		display: 'flex',
		// 		flexDirection: 'column',
		// 		gap: '0.5rem',
		// 		// width: 'fit-content',
		// 	}}
		// >
		// 	<Text as='label' label>
		// 		<div>
		// 			{/* <SelectLabel state={select}>credit/debit card</SelectLabel> */}
		// 			<Select
		// 				state={select}
		// 				style={{
		// 					width: 'fit-content',
		// 					border: '1px solid var(--colors-rust50)',
		// 					borderRadius: 5,
		// 					backgroundColor: 'white',
		// 				}}
		// 				className='select'
		// 			/>
		// 			<SelectPopover
		// 				state={select}
		// 				className='popover'
		// 				style={{
		// 					border: '1px solid var(--colors-rust50)',
		// 					borderRadius: 5,
		// 					display: 'flex',
		// 					flexDirection: 'column',
		// 					gap: '0.25rem',
		// 					padding: '0.5rem',
		// 					backgroundColor: 'white',
		// 				}}
		// 			>
		// 				<SelectItem
		// 					className='select-item'
		// 					value='card 1 debit'
		// 					style={{
		// 						border: '1px solid var(--colors-rust50)',
		// 						borderRadius: 5,
		// 						padding: '0.5rem',
		// 						backgroundColor: 'white',
		// 					}}
		// 				/>
		// 				<SelectItem
		// 					className='select-item'
		// 					value='card 2 debit'
		// 					style={{
		// 						border: '1px solid var(--colors-rust50)',
		// 						borderRadius: 5,
		// 						padding: '0.5rem',
		// 						backgroundColor: 'white',
		// 					}}
		// 				/>
		// 				<SelectItem
		// 					className='select-item'
		// 					value='card 3 credit'
		// 					style={{
		// 						border: '1px solid var(--colors-rust50)',
		// 						borderRadius: 5,
		// 						padding: '0.5rem',
		// 						backgroundColor: 'white',
		// 					}}
		// 				/>
		// 			</SelectPopover>
		// 		</div>
		// 	</Text>
		// 	<Text as='label' label>
		// 		<RRadio value='zap' />
		// 		<span>boleto</span>
		// 	</Text>
		// </RadioGroup>
	)
}
