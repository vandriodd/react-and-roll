import { useEffect, useState } from 'react'
import { type User } from '../types.d'
import UsersList from './components/UsersList'
import './App.css'

const API_URL = 'https://randomuser.me/api/?results=20'

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  useEffect(() => {
    fetch(API_URL)
      .then(async response => await response.json())
      .then(data => { setUsers(data.results) })
      .catch(error => { console.error(error) })
  }, [])

  const toggleColor = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  //! THIS ISN'T CORRECT
  // ^ sort mutates the original array!
  // ^ so, in case we need the original array (don't want to order it), we should create a copy of it
  // const sortedUsers = sortByCountry
  //   ? users.sort((a, b) => {
  //   return a.location.country.localeCompare(b.location.country)
  // }) : users

  //* ANOTHER WAY
  //* still not the best option
  // const sortedUsers = sortByCountry
  //   ? [...users].sort((a, b) => {
  //     return a.location.country.localeCompare(b.location.country)
  //   })
  //   : users
  // }

  //* THE BEST WAY
  // ^ toSorted() -> returns a NEW array with the elements sorted
  const sortedUsers = sortByCountry
    ? users.toSorted((a, b) => {
      return a.location.country.localeCompare(b.location.country)
    })
    : users

  return (
    <>
      <header>
        <h1>List of users</h1>
        <div className='buttons'>
          <button onClick={toggleColor}>
            Colored Rows
          </button>
          <button onClick={toggleSortByCountry}>
            {sortByCountry ? 'Don\'t sort by Country' : 'Sort by Country' }
          </button>
        </div>
      </header>
      <main>
        {/* {JSON.stringify(users, null, 2)} */}
        <UsersList showColors={showColors} users={sortedUsers} />
      </main>
    </>
  )
}

export default App
