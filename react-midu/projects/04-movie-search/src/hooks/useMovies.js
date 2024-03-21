import responseMovies from '../mocks/with-results.json'

export const useMovies = () => {
  //! Avoid depending on the contract of the API
  // e.g. movie.imdbID inside the renderings
  // The best way to avoid this is mapping the data to a new object, and avoids use the contract API on a deep component
  //^ Control the contract only once

  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}
