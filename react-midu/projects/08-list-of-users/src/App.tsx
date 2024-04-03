import { useEffect, useState } from 'react'
import { type User } from '../types.d'
import UsersList from './components/UsersList'
import './App.css'

const API_URL = 'https://randomuser.me/api/?results=20'

const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)

  // // 2. Hacer un fetching de datos
  useEffect(() => {
  //   const fetchUsers = async () => {
  //     // Primero preciso almacenar la respuesta del fetch
  //     const response = await fetch(API_URL)

    //     // Después extraigo la info
    //     const data = await response.json()

    //     // Ahora preciso agarrar esa info y meterla en un estado:)
    //     // El estado se actualiza asincrónicamente
    //     setUsers(data.results)
    //     console.log(data.results);

    //   }
    //   fetchUsers()
    fetch(API_URL)
      .then(async response => await response.json())
      .then(data => { setUsers(data.results) })
      .catch(error => { console.error(error) })
  }, [])

  const toggleColor = () => {
    setShowColors(!showColors)
  }

  return (
    <>
      <header>
        <h1>List of users</h1>
        <div className='buttons'>
          <button onClick={toggleColor}>
            Colored Rows
          </button>
        </div>
      </header>
      <main>
        {/* {JSON.stringify(users, null, 2)} */}
        <UsersList showColors={showColors} users={users} />
      </main>
    </>
  )
}

export default App
