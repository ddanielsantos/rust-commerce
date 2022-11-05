import { Radio, RadioGroup, useRadioState } from 'ariakit/radio'
import { useSelectState } from 'ariakit/select'
import { AddCardModal } from '../AddCardModal/AddCardModal'
import { Button, Flex, Label, Select } from '../../ui'
import { FormEvent } from 'react'

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
