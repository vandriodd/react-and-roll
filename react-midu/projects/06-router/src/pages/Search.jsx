import { useEffect } from 'react'

const SearchPage = ({ routeParams }) => {
  useEffect(() => {
    document.title = `You searched: ${routeParams.query}`
  }, [])

  return <h1>You searched: {routeParams.query}</h1>
}

export default SearchPage
