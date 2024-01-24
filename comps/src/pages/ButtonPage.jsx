import { GoBell } from 'react-icons/go'
import Button from '../components/Button'

const ButtonPage = () => {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <main>
      <div>
        <h1>ButtonPage</h1>
        <Button primary onClick={handleClick}>
          <GoBell />
          Primary
        </Button>
        <Button secondary onClick={handleClick}>Secondary</Button>
        <Button success onClick={handleClick}>Success</Button>
        <Button warning onClick={handleClick}>Warning</Button>
        <Button danger onClick={handleClick}>Danger</Button>
        <Button primary rounded onClick={handleClick}>Primary rounded</Button>
        <Button secondary rounded onClick={handleClick}>Secondary rounded</Button>
        <Button success rounded onClick={handleClick}>Success rounded</Button>
        <Button warning rounded onClick={handleClick}>Warning rounded</Button>
        <Button danger rounded onClick={handleClick}>Danger rounded</Button>
        <Button primary outline onClick={handleClick}>Primary outline</Button>
        <Button secondary outline onClick={handleClick}>Secondary outline</Button>
        <Button success outline onClick={handleClick}>Success outline</Button>
        <Button warning outline onClick={handleClick}>Warning outline</Button>
        <Button danger outline onClick={handleClick}>Danger outline</Button>
        <Button primary outline rounded onClick={handleClick}>Primary outline rounded</Button>
        <Button secondary outline rounded onClick={handleClick}>Secondary outline rounded</Button>
        <Button success outline rounded onClick={handleClick}>Success outline rounded</Button>
        <Button warning outline rounded onClick={handleClick}>Warning outline rounded</Button>
        <Button danger outline rounded onClick={handleClick}>Danger outline rounded</Button>
      </div>
    </main>
  )
}

export default ButtonPage
