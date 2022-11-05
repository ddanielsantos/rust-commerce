import { useDialogState } from 'ariakit/dialog'
import { FormEvent } from 'react'
import {
	Dialog,
	Select,
	Button,
	Flex,
	Input,
	MaskedInput,
	Text,
} from '../../ui'

export const AddCardModal = () => {
	const dialog = useDialogState({ animated: true })

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<>
			<Select.Item onClick={dialog.toggle}>add a card</Select.Item>

			<Dialog.Wrapper state={dialog}>
				<form onSubmit={onSubmit}>
					<Dialog.Heading>add a card</Dialog.Heading>

					<Text
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						owner name:
						<Input name={'owner_name'} />
					</Text>
					<Text
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						card number:
						<MaskedInput
							mask='9999 9999 9999 9999'
							maskPlaceholder={null}
							name={'card_number'}
						/>
					</Text>
					<Text
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						cvv:
						<MaskedInput mask='999' maskPlaceholder={null} name={'cvv'} />
					</Text>
					<Text
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						expiry date:
						<MaskedInput
							mask='99/99'
							maskPlaceholder={null}
							name={'expiry_date'}
						/>
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
