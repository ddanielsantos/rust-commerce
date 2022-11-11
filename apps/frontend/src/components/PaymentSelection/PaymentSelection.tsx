import { Radio, RadioGroup, useRadioState } from 'ariakit/radio'
import { SelectArrow, useSelectState } from 'ariakit/select'
import { AddCardModal } from '../AddCardModal/AddCardModal'
import { Flex, Label, Select, Text } from '../../ui'

type Card = {
	id: string
	card_number: string
	expiryDate: string
}

const cards = [
	{
		id: '1',
		card_number: 'xxxx xxxx xxxx 9999',
		expiryDate: '08/29',
	},
	{
		id: '2',
		card_number: 'xxxx xxxx xxxx 9997',
		expiryDate: '11/25',
	},
]

const CardItem = ({ card }: { card: Card }) => {
	return (
		<Flex direction='column' align='start' css={{ gap: '$2' }}>
			<Text css={{ fontWeight: 700 }}>{card.card_number}</Text>
			<Text css={{ fontWeight: 500 }}>{card.expiryDate}</Text>
		</Flex>
	)
}

export const PaymentSelection = () => {
	const payment_method = useRadioState()
	const card_id = useSelectState({
		gutter: 10,
		animated: true,
		focusLoop: true,
		setValueOnMove: true,
	})

	const selectedCard = cards.find(c => c.id === card_id.value)

	return (
		<RadioGroup state={payment_method}>
			<Label as='label' css={{ flexDirection: 'row' }}>
				<Radio value='boleto' name='payment_method' />
				boleto
			</Label>
			<Label
				as='label'
				css={{ flexDirection: 'row', '&>input': { appearence: 'none' } }}
			>
				<Radio value='card' name='payment_method' />
				debit/credit card
			</Label>
			<Flex direction='column' align='start' css={{ gap: '$3' }}>
				{payment_method.value === 'card' && (
					<div>
						<Select.Wrapper state={card_id}>
							{selectedCard ? (
								CardItem({ card: selectedCard })
							) : (
								<Text>no registered cards</Text>
							)}
							<SelectArrow />
						</Select.Wrapper>
						<Select.Popover state={card_id}>
							<AddCardModal />

							{cards.map(c => {
								return (
									<Select.Item key={c.id} value={c.id}>
										<CardItem card={c} />
									</Select.Item>
								)
							})}
						</Select.Popover>
					</div>
				)}
			</Flex>
		</RadioGroup>
	)
}
