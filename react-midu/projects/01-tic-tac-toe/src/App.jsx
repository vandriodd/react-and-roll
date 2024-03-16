import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { saveGameToStorage, resetGameStorage } from './logic/storage'

const App = () => {
  //! BAD PRACTICE
  //! Hooks NEVER go inside conditionals or loops, because React stores the position of each hook in a internal array that says 'first hook is here, second hook is here, etc'. So, if we put the hook in a conditional or loop, React losts the position of the hook
  // const boardFromLocalStorage = JSON.parse(window.localStorage,getItem('board'))
  // if (boardFromLocalStorage) {
  //   const [board, setBoard] = useState(
  //     Array(9).fill(null)
  //   )
  // }

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    /* ------------------------------ Update board ------------------------------ */
    const newBoard = [...board]
    //! States should be tratated as immutable
    // if we modify the state directly, it will not trigger a re-render
    //^ Always pass the same object or a new one!
    newBoard[index] = turn
    setBoard(newBoard)

    /* ------------------------------- Change turn ------------------------------ */
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    /* ---------------------- Persist game in localStorage ---------------------- */
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    /* --------------------------- Check for a winner --------------------------- */
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      //^ Why alert displays before the state is updated?
      // Because the state is updated asynchronously, it doesn't block the execution of the code after it
      setWinner(newWinner)
      // alert(`Player ${newWinner} wins!`)
    } else if (checkEndGame(newBoard)) setWinner(false) // -> tie
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>
        Reset Game
      </button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
