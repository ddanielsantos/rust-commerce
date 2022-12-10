import React from 'react'
import {
	CustomerCreateForm,
	CustomerCreatePayload,
} from '../../../src/components/customer/CustomerCreateForm'

import { useMutationCallback } from '../../../src/utils/useMutation'

const Page = () => {
	const mutation = useMutationCallback<CustomerCreatePayload>('customer/create')

	return mutation.isLoading ? (
		<p>loading</p>
	) : (
		<CustomerCreateForm mutation={mutation} />
	)
}

export default Page
