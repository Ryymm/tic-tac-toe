const saveGameToStorage = ({ board, turn }) => {
	window.localStorage.setItem('board', JSON.stringify(board))
	window.localStorage.setItem('turn', turn)
}

const removeGameFromStorage = (keys) => keys.map((key) => window.localStorage.removeItem(key))

export { saveGameToStorage, removeGameFromStorage }
