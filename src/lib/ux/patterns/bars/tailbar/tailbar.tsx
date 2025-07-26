type TailbarProps = {
	copyright?: string
}

const TailBar = ({ copyright }: TailbarProps) => {
	return (
		<div>
			<p>{copyright}</p>
		</div>
	)
}

export default TailBar
