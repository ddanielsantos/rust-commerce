import {
	useMutation as um,
	UseMutationResult as UMR,
} from '@tanstack/react-query'

/**
 * Wrapper around React Query's ``useMutation``, making it simpler to use
 * @param {string} endpoint The POST endpoint to send the mutation
 * @returns the mutation object
 */
export const useMutationCallback = <T, TResponse = T>(
	endpoint: string,
): UMR<TResponse, MutationError, T, unknown> => {
	return um<TResponse, MutationError, T, unknown>({
		mutationKey: [endpoint],
		mutationFn: async newTodo => {
			const res = await fetch(`http://localhost:8000/${endpoint}`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newTodo),
			})

			if (res.ok === false) {
				throw new Error(res.statusText, { cause: res })
			}

			return res as TResponse
		},
	})
}

type MutationError = {
	message: string
}

export type UseMutationResult<T> = UMR<T, MutationError, T, unknown>
