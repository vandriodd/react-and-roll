import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    // basically, set isOpen to the opposite of its current value
    setIsOpen((currentIsOpen) => !currentIsOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    onChange(option)
    // console.log(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div className='hover:bg-sky-100 rounded cursor-pointer p-1' key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    )
  })

  return (
    <div className='w-48 relative'>
      <div className='flex justify-between item-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleClick}>
        {value?.label || 'Select...'}
        <FaAngleDown className='text-lg' />
      </div>
      {isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown
