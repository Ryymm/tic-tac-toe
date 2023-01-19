import { WIN_COMBOS } from '../constants'

const checkWinnerFrom = (boardToCheck) => {
	for (const [a, b, c] of WIN_COMBOS) {
		if (
			boardToCheck[a] &&
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c]
		) {
			return boardToCheck[a]
		}
	}

	// if no winner
	return null
}

export { checkWinnerFrom }
