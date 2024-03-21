import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

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

function App() {
  const { movies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
