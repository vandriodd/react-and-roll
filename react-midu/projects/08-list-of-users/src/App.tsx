import { useEffect, useMemo, useRef, useState } from 'react'
import { type User } from '../types.d'
import UsersList from './components/UsersList'
import './App.css'

const API_URL = 'https://randomuser.me/api/?results=20'

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  // ^ useRef -> stores a mutable value that shares between renders but doesn't trigger a re-render
  // ^ useRef not only works with elements
  const initialUsers = useRef<User[]>([])
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  useEffect(() => {
    fetch(API_URL)
      .then(async response => await response.json())
      .then(data => {
        setUsers(data.results)
        initialUsers.current = data.results
      })
      .catch(error => { console.error(error) })
  }, [])

  const toggleColor = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  //* 1st we filter the users by country
  //* 2nd we sort them
  const filteredUsers = useMemo(() => {
    return typeof filterCountry === 'string' && filterCountry.length > 0
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

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
  const sortedUsers = useMemo(() => {
    return sortByCountry
      ? filteredUsers.toSorted((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
      : filteredUsers
  }, [filteredUsers, sortByCountry])

  const handleDelete = (uuid: string) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== uuid)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(initialUsers.current)
  }

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
          <button onClick={handleReset}>
            Reset State
          </button>
          <input placeholder='Germany' onChange={(e) => {
            setFilterCountry(e.target.value)
          }} />
        </div>
      </header>
      <main>
        <UsersList showColors={showColors} onDelete={handleDelete} users={sortedUsers} />
      </main>
    </>
  )
}

export default App
