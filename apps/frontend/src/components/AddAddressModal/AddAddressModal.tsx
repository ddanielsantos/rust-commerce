import { useDialogState } from 'ariakit/dialog'

import { FormEvent } from 'react'
import { Dialog, Select, Button, Flex, Input, Label } from '../../ui'

export const AddAddressModal = () => {
	const dialog = useDialogState({ animated: true })

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<>
			<Select.Item onClick={dialog.toggle}>add a address</Select.Item>

			<Dialog.Wrapper state={dialog}>
				<form onSubmit={onSubmit}>
					<Dialog.Heading>add address</Dialog.Heading>

					<Label>
						Country
						<Input name={'country'} />
					</Label>
					<Label>
						State/province
						<Input name={'state_or_province'} />
					</Label>
					<Label>
						City
						<Input name={'city'} />
					</Label>
					<Label>
						Location
						<Input name={'Location'} />
					</Label>

					<Flex css={{ gap: '$3', mt: 'auto', alignSelf: 'end' }}>
						<Dialog.Dismiss>cancel</Dialog.Dismiss>
						<Button variant='primary' type='submit'>
							save
						</Button>
					</Flex>
				</form>
			</Dialog.Wrapper>
		</>
	)
}
