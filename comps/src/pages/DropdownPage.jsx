import { useState } from 'react';
import Dropdown from '../components/Dropdown';

const DropdownPage = () => {
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
    <main className='flex'>
      <h1>Dropdown page</h1>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </main>
  )
}

export default DropdownPage;
