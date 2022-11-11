import { useDialogState } from 'ariakit/dialog'
import { FormEvent } from 'react'
import {
	Dialog,
	Select,
	Button,
	Flex,
	Input,
	MaskedInput,
	Label,
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

					<Label
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						Owner name
						<Input name={'owner_name'} />
					</Label>
					<Label
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						Card number
						<MaskedInput
							mask='9999 9999 9999 9999'
							maskPlaceholder={null}
							name={'card_number'}
						/>
					</Label>
					<Label
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						CVV
						<MaskedInput mask='999' maskPlaceholder={null} name={'cvv'} />
					</Label>
					<Label
						as='label'
						css={{ display: 'flex', flexDirection: 'column', gap: '$3' }}
					>
						Expiry date
						<MaskedInput
							mask='99/99'
							maskPlaceholder={null}
							name={'expiry_date'}
						/>
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
