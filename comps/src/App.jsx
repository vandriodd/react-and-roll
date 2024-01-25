import './index.css'
import { useState } from 'react'
import Dropdown from './components/Dropdown'

const App = () => {
  // option | null
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option)
  }

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ]

  return (
    <main>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </main>
  )
}

export default App
