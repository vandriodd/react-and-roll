import { useState } from 'react'
import confetti from 'canvas-confetti'

const TURNS = {
  X: 'X',
  O: 'O'
}

//! To change to do in a better way
const WINNER_COMBOS = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal
  [2, 4, 6] // diagonal
]

const Square = ({  children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null // -> no winner
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    // if there are no more nulls in the board, it's a draw
    return newBoard.every((square) => square !== null)
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

    /* --------------------------- Check for a winner --------------------------- */
    const newWinner = checkWinner(newBoard)
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

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                    ? 'It\'s a tie!'
                    : `Player ${winner} wins!`
                }
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>
                  Play again
                </button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
