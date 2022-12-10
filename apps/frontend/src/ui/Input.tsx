import { ReactNode } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Label, Text } from './index'
import { styled } from './stitches.config'

export const Input = styled('input', {
	fontFamily: 'Inter',
	color: '$rust100',
	padding: '0.7rem 1rem',
	border: '1px solid Gainsboro',
	borderRadius: 10,

	'&:focus': {
		outline: '3px solid #4299E1',
	},
})

type ControlledInputProps<T extends FieldValues> = {
	control: Control<T, unknown>
	name: Path<T>
}

export const ControlledInput = <T extends FieldValues>(
	props: ControlledInputProps<T>,
) => {
	return (
		<Controller
			control={props.control}
			name={props.name}
			render={({ field, formState: { errors } }) => {
				const label = props.name.replaceAll('_', ' ')
				return (
					<div>
						<Label>
							{label}:
							<Input {...field} />
						</Label>
						{errors[props.name] && (
							<Text css={{ color: 'black', fontSize: 'small' }}>
								{/* was needed thrust me */}
								{errors[props.name]?.message as ReactNode}
							</Text>
						)}
					</div>
				)
			}}
		/>
	)
}
