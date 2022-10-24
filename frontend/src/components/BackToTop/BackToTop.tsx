import { Button } from '../../ui/Button'

const onClick = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export const BackToTop = () => {
	return <Button onClick={onClick}>back to top</Button>
}
