const TURNS = {
	X: 'X',
	O: 'O'
}

const WIN_COMBOS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

const GAME_INITIAL_STATE = {
	board: Array(9).fill(null),
	turn: TURNS.X,
	// null = no winner
	winner: null
}

export { TURNS, WIN_COMBOS, GAME_INITIAL_STATE }
