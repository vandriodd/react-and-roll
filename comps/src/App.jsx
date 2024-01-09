import './index.css'
import Button from './components/Button'

function App () {
  return (
    <main>
      <div>
        <h1>App</h1>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success</Button>
        <Button warning>Warning</Button>
        <Button danger>Danger</Button>
        <Button primary rounded>Primary rounded</Button>
        <Button secondary rounded>Secondary rounded</Button>
        <Button success rounded>Success rounded</Button>
        <Button warning rounded>Warning rounded</Button>
        <Button danger rounded>Danger rounded</Button>
        <Button primary outline>Primary outline</Button>
        <Button secondary outline>Secondary outline</Button>
        <Button success outline>Success outline</Button>
        <Button warning outline>Warning outline</Button>
        <Button danger outline>Danger outline</Button>
        <Button primary outline rounded>Primary outline rounded</Button>
        <Button secondary outline rounded>Secondary outline rounded</Button>
        <Button success outline rounded>Success outline rounded</Button>
        <Button warning outline rounded>Warning outline rounded</Button>
        <Button danger outline rounded>Danger outline rounded</Button>
      </div>
    </main>
  )
}

export default App
