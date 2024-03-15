import { useState } from 'react'

export const TwitterFollowCard = ({ userName, name, initialIsFollowing }) => {
  // internal state, because is not shared between elements
  //^ What is Virtual DOM?
  // It's a lightweight copy of the DOM. It's a JavaScript object that represents the real DOM
  //^ How it works in React?
  // React takes a photo of the Virtual DOM and compares it with the previous one. Then, it calculates the differences and updates the real DOM
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  // when the user clicks the button, we change the state to the opposite
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt={`${userName} avatar`} />
      <div className='tw-followCard-info'>
        <strong>{name}</strong>
        <span className='tw-followCard-infoUserName'>@{userName}</span>
      </div>
    </header>

    <aside>
      <button className={buttonClassName} onClick={handleClick}>
        <span className='tw-followCard-text'>{text}</span>
        <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
      </button>
    </aside>
  </article>
  )
}
