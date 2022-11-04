import { useDialogState } from 'ariakit/dialog'
import { Dialog, Button, Flex, Input, MaskedInput, Text } from '../../ui'

const onSubmit = e => {
	e.preventDefault()
}

export const AddCardModal = () => {
	const dialog = useDialogState({ animated: true })

	return (
		<>
			<Button onClick={dialog.toggle} variant='primary'>
				add a card
			</Button>
			<Dialog.Wrapper state={dialog}>
				<form onSubmit={onSubmit}>
					<Dialog.Heading>add a card</Dialog.Heading>

					<Text
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						owner name:
						<Input />
					</Text>
					<Text
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						card number:
						<MaskedInput mask='9999 9999 9999 9999' maskPlaceholder={null} />
					</Text>
					<Text
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						cvv
						<MaskedInput mask='999' maskPlaceholder={null} />
					</Text>
					<Text
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						expiry date
						<MaskedInput mask='99/99' maskPlaceholder={null} />
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
