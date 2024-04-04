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
  onDelete: (uuid: string) => void
}

const UsersList = ({ users, showColors, onDelete }: UsersListProps) => {
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
      <tbody className={showColors ? 'table--showColors' : 'table'}>
        {users.map((user) => {
          return (
            <tr key={user.login.uuid}>
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
                <button onClick={() => { onDelete(user.login.uuid) }}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UsersList
