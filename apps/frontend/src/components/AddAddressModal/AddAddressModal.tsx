import { useDialogState } from 'ariakit/dialog'

import { FormEvent } from 'react'
import { Dialog, Select, Button, Flex, Input, Text } from '../../ui'

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

					<Text
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						owner name:
						<Input name={'country'} />
					</Text>

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
