// TODO: format the money based on user location
export const moneyFormatter = new Intl.NumberFormat('br', {
	style: 'currency',
	currency: 'BRL',
})
