import { type User } from '../../types.d'

//* Tables in html
// table -> the table itself
// thead -> header of the table
// tbody -> body of the table
// tr -> table row
// th -> table header
// td -> celd

interface UsersListProps {
  users: User[]
  showColors: boolean
}

const UsersList = ({ users, showColors }: UsersListProps) => {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const bgColor = index % 2 === 0 ? '#333' : '#555'
          const color = showColors ? bgColor : 'transparent'

          return (
            <tr key={index} style={{ backgroundColor: color }}>
              <td>
                <img
                  src={user.picture.thumbnail}
                  alt={`${user.name.first} profile`}
                />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UsersList
