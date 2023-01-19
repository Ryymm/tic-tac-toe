import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { Board } from './components/Board'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { checkWinnerFrom } from './logic/board'
import { saveGameToStorage, removeGameFromStorage } from './logic/storage'
import { TURNS, GAME_INITIAL_STATE as INITIAL_STATE } from './constants'
import confetti from 'canvas-confetti'
import './App.css'

export default function App() {
	const [board, setBoard] = useLocalStorage('board', INITIAL_STATE.board)
	const [turn, setTurn] = useLocalStorage('turn', INITIAL_STATE.turn)
	const [winner, setWinner] = useState(INITIAL_STATE.winner)

	const resetGame = () => {
		setBoard(INITIAL_STATE.board)
		setTurn(INITIAL_STATE.turn)
		setWinner(INITIAL_STATE.winner)

		removeGameFromStorage(['board', 'turn'])
	}

	function updateBoard(index) {
		if (board[index] || winner) return

		// Update board
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)

		// Update turn
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)

		// Save game
		saveGameToStorage({ board: newBoard, turn: newTurn })

		// Check winner
		const newWinner = checkWinnerFrom(newBoard)

		if (newWinner) {
			setWinner(() => {
				confetti({
					particleCount: 200,
					spread: 70,
					origin: { y: 0.7 }
				})

				return newWinner
			})
		} else if (!newBoard.includes(null)) {
			// false = draw
			setWinner(false)
		}
	}

	return (
		<main className='board'>
			<h1>3 en Raya</h1>
			<button onClick={resetGame}>Reinicar</button>
			<section className='game'>
				<Board
					board={board}
					updateBoard={updateBoard}
				/>
			</section>

			<section className='turn'>
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</section>

			<WinnerModal
				resetGame={resetGame}
				winner={winner}
			/>
		</main>
	)
}
