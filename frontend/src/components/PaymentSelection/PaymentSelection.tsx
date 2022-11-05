import { Radio, RadioGroup, useRadioState } from 'ariakit/radio'
import { useSelectState } from 'ariakit/select'
import { AddCardModal } from '../AddCardModal/AddCardModal'
import { Button, Flex, Label, Select } from '../../ui'
import { FormEvent } from 'react'

export const PaymentSelection = () => {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const payment_method = useRadioState()
	const card_id = useSelectState({
		gutter: 10,
		animated: true,
	})
	return (
		<form onSubmit={onSubmit}>
			<RadioGroup state={payment_method}>
				<Label as='label'>
					<Radio value='boleto' name='payment_method' />
					boleto
				</Label>
				<Label as='label'>
					<Radio value='card' name='payment_method' />
					debit/credit card
				</Label>

				<Flex direction='column' align='start' css={{ gap: '$3' }}>
					{payment_method.value === 'card' && (
						<div>
							<Select.Wrapper state={card_id} />
							<Select.Popover state={card_id}>
								<AddCardModal />

								<Select.Item value='card 1' />
								<Select.Item value='card 2' />
							</Select.Popover>
						</div>
					)}
				</Flex>
			</RadioGroup>
			<Button variant='primary' type='submit'>
				send
			</Button>
		</form>
	)
}
