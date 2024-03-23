import './App.css'
import { useMovies } from './hooks/useMovies'
//* useRef -> hook that allows to create a mutable reference that persists for the entire lifecycle of the component. And everytime it changes, it doesn't trigger a re-render
import { Movies } from './components/Movies'
import { useState, useEffect, useRef } from 'react'

// Practices to render

//^ 1st, it considers a bad practice to use a ternary operator to render a list of elements
//^ Less readable

// {
//   hasMovies ? (
//     <ul>
//       {
//         movies.map(movie => (
//           <li key={movie.imdbID}>
//             <h3>{movie.Title}</h3>
//             <p>{movie.Year}</p>
//             <img src={movie.Poster} alt={movie.Title} />
//           </li>
//         ))
//       }
//     </ul>
//   )
//   : (
//     <p>No movies found</p>
//   )
// }

//^ 2nd, bad practice too
//^ This should be a component, because it's a reusable piece of code
//^ These functions everytime that app renders, it's going to be created again

// const renderMovies = () => {
//   return (
//     <ul>
//       {
//         movies.map(movie => (
//           <li key={movie.imdbID}>
//             <h3>{movie.Title}</h3>
//             <p>{movie.Year}</p>
//             <img src={movie.Poster} alt={movie.Title} />
//           </li>
//         ))
//       }
//     </ul>
//   )
// }

// const renderNoMovies = () => {
//   return (
//     <p>No movies found</p>
//   )
// }

// Inside the component

// {
//   hasMovies ? renderMovies() : renderNoMovies()
// }

const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Please enter a movie name')
      return
    }

    if (search.match(/^\s+$/)) {
      setError('Please enter a valid movie name')
      return
    }

    if (search.length < 2) {
      setError('Search term must be at least 2 characters long')
      return
    }

    if (search.startsWith(' ')) return

    setError(null)
  }, [search])

  return { search, setSearch, error }
}

function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    //^ Here creates an object, from the current we can change the value that comes after
    // while inputRef.current is the input element, .value is the value of the input (vanilla JS)
    const value = inputRef.current.value
    console.log(value)
    getMovies()

    // Without useRef hook its like
    // const fields = new window.FormData(e.target)
    // const query = fields.get('query')
    // console.log(query)

    // retrieve many inputs elements
    // const fields = Object.fromEntries(new window FormData(e.target))
  }

  const handleChange = () => {
    setSearch(inputRef.current.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
            onChange={handleChange}
            value={search}
            name='query'
            ref={inputRef}
            placeholder='Avengers, Star Wars, The Matrix...'
          />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
