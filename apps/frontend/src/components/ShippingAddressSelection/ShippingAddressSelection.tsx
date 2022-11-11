import { SelectArrow, useSelectState } from 'ariakit/select'

import { AddAddressModal } from '../AddAddressModal/AddAddressModal'
import { Flex, Select, Text } from '../../ui'

type Address = {
	id: string
	city: string
	state_or_province: string
	country: string
	location: string
}

const addresses = [
	{
		id: '1',
		city: 'Paris',
		state_or_province: 'NO',
		country: 'France',
		location: 'Rue Lepougain 424',
	},
	{
		id: '2',
		city: 'Saffron',
		state_or_province: 'PK',
		country: 'Kanto',
		location: 'Misty Avenue 103',
	},
]

const AddressItem = ({ addr }: { addr: Address }) => {
	return (
		<Flex direction='column' align='start' css={{ gap: '$2' }}>
			<Text css={{ fontWeight: 700 }}>{addr.location}</Text>
			<Text css={{ fontWeight: 500 }}>
				{addr.country}, {addr.state_or_province}
			</Text>
		</Flex>
	)
}

export const ShippingAddressSelection = () => {
	const address_id = useSelectState({
		gutter: 10,
		animated: true,
		focusLoop: true,
		setValueOnMove: true,
	})

	const selectedAddr = addresses.find(a => a.id === address_id.value)

	return (
		<Flex direction='column' align='start' css={{ gap: '$3' }}>
			<Select.Wrapper state={address_id} css={{ gap: '$5' }}>
				{selectedAddr ? (
					AddressItem({ addr: selectedAddr })
				) : (
					<Text>no registered addresses</Text>
				)}
				<SelectArrow />
			</Select.Wrapper>
			<Select.Popover state={address_id}>
				<AddAddressModal />

				{addresses.map(a => {
					return (
						<Select.Item key={a.id} value={a.id}>
							<AddressItem addr={a} />
						</Select.Item>
					)
				})}
			</Select.Popover>
		</Flex>
	)
}
