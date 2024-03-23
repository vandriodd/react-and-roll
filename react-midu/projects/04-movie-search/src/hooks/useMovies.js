//^ useMemo -> memoizes a value and recalculates it only when one of the dependencies changes
//^ useCallback -> same as useMemo but for functions
import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const previousSearch = useRef(search)

  // getMovies is a function that memoizes the search value
  // we create the function only once and it will depend on the search value that we inject in the hook
  //* With useMemo
  // const getMovies = useMemo(() => {
  //   return async (search) => {
  //     if (search === previousSearch.current) return

  //     try {
  //       setLoading(true)
  //       setError(null)
  //       previousSearch.current = search
  //       const newMovies = await searchMovies({ search })
  //       setMovies(newMovies)
  //     } catch (e) {
  //       setError(e.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  // }, [])

  //* With useCallback
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // create a shallow copy of the movies array and sort it by title
  //^ localeCompare compares two strings according to local conventions, such as sorting accented characters
  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies

  //* Does with useMemo to avoid the sort in every render
  const sortedMovies = useMemo(() => {
    if (!movies) return
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
