const API_KEY = '30fb4aa2'

export const searchMovies = async (search) => {
  if (search === '') return null

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    )
    const json = await res.json()

    // Do the mapping logic here
    //! Avoid depending on the contract of the API
    // e.g. movie.imdbID inside the renderings
    // The best way to avoid this is mapping the data to a new object, and avoids use the contract API on a deep component
    //^ Control the contract only once
    const movies = json

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }))
  } catch (e) {
    throw new Error('Error fetching movies')
  }
}
