import './App.css';
import { TwitterFollowCard } from './components/TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'dcediel',
    name: 'David Cediel',
    isFollowing: false
  },
  {
    userName: 'dan_abramov',
    name: 'Dan Abramov',
    isFollowing: true
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false
  }
]

// If the parent component re-render, the child component will re-render too independently of the props
// but if the props doesn't change, the DOM will not be updated
//! so, re-render != DOM update
const App = () => {
  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user

          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  );
};
export default App;
