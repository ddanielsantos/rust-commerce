const onClick = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

export const BackToTop = () => {
	return <button onClick={onClick}>back to top</button>
}
