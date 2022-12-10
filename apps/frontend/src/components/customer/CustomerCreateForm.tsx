import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, ControlledInput } from '../../../src/ui'
import * as zod from 'zod'
import { UseMutationResult } from '../../utils/useMutation'

const schema = zod
	.object({
		first_name: zod.string().min(1, { message: 'required' }),
		last_name: zod.string().min(1, { message: 'required' }),
		email: zod
			.string()
			.min(1, { message: 'required' })
			.email('must be a valid email'),
		password: zod.string().min(6, { message: 'at least 6 characters' }),
	})
	.required()

export type CustomerCreatePayload = zod.infer<typeof schema>

type CustomerCreateFormProps = {
	mutation: UseMutationResult<CustomerCreatePayload>
}

export const CustomerCreateForm = ({ mutation }: CustomerCreateFormProps) => {
	const { control, handleSubmit, reset } = useForm<CustomerCreatePayload>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
			first_name: '',
			last_name: '',
			password: '',
		},
	})

	const onSubmit = ({
		email,
		first_name,
		last_name,
		password,
	}: CustomerCreatePayload) => {
		mutation.mutate(
			{
				email,
				first_name,
				last_name,
				password,
			},
			{
				onSuccess: () =>
					reset(
						{},
						{
							keepDefaultValues: true,
						},
					),
			},
		)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				maxWidth: '40rem',
			}}
		>
			<ControlledInput control={control} name='first_name' />
			<ControlledInput control={control} name='last_name' />
			<ControlledInput control={control} name='email' />
			<ControlledInput control={control} name='password' />
			<Button type={'submit'} variant='primary'>
				create
			</Button>
		</form>
	)
}
