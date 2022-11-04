import { Radio, RadioGroup, useRadioState } from 'ariakit/radio'
import {
	Select,
	SelectItem as ASelectItem,
	SelectPopover as ASelectPopover,
	useSelectState,
} from 'ariakit/select'
import { AddCardModal } from '../AddCardModal/AddCardModal'
import { Button, Flex, Label } from '../../ui'
import { styled } from '../../ui/stitches.config'
import { FormEvent } from 'react'

const SelectItem = styled(ASelectItem, {
	backgroundColor: 'White',
	color: '$rust100',
	borderRadius: 5,
	p: '$2',
	'@bp1': {
		p: '$4',
	},
	'&:hover': {
		backgroundColor: '$rust100',
		color: 'White',
	},
})

const SelectPopover = styled(ASelectPopover, {
	backgroundColor: 'White',
	border: '1px solid gainsboro',
	width: 'fit-content',
	color: '$rust100',
	borderRadius: 10,
	display: 'flex',
	flexDirection: 'column',
	gap: '$1',
	p: '$2',
})

export const PaymentSelection = () => {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(payment_method.value)
		payment_method.value === 'card' && console.log(card_id.value)
	}

	const payment_method = useRadioState()
	const card_id = useSelectState({
		defaultValue: '1',
		sameWidth: true,
		gutter: 4,
	})
	return (
		<form onSubmit={onSubmit}>
			<RadioGroup state={payment_method}>
				<Label as='label'>
					boleto
					<Radio value='boleto' name='payment_method' />
				</Label>
				<Label as='label'>
					debit/credit card
					<Flex direction='column' align='start' css={{ gap: '$3' }}>
						<Radio value='card' name='payment_method' />
						{payment_method.value === 'card' && (
							<div>
								<Select state={card_id} className='select' name='card' />
								<SelectPopover state={card_id} className='popover'>
									<AddCardModal />

									<SelectItem className='select-item' value='card 1' />
									<SelectItem className='select-item' value='card 2' />
								</SelectPopover>
							</div>
						)}
					</Flex>
				</Label>
			</RadioGroup>
			<Button variant='primary' type='submit'>
				send
			</Button>
		</form>
	)
}
