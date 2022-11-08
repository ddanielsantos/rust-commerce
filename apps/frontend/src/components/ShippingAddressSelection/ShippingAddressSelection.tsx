import { useSelectState } from 'ariakit/select'

import { AddAddressModal } from '../AddAddressModal/AddAddressModal'
import { Flex, Select } from '../../ui'

export const ShippingAddressSelection = () => {
	const address_id = useSelectState({
		gutter: 10,
		animated: true,
	})
	return (
		<Flex direction='column' align='start' css={{ gap: '$3' }}>
			<Select.Wrapper state={address_id} />
			<Select.Popover state={address_id}>
				<AddAddressModal />

				<Select.Item value='address 1' />
				<Select.Item value='address 2' />
			</Select.Popover>
		</Flex>
	)
}
