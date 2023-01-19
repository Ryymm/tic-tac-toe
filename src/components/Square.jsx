export function Square({ children, updateBoard, isSelected, index }) {
	// Conditional ClassName
	const className = `square ${isSelected ? 'selected' : ''}`

	const handleClick = () => updateBoard(index)

	return (
		<div
			className={className}
			onClick={handleClick}
		>
			{children}
		</div>
	)
}
