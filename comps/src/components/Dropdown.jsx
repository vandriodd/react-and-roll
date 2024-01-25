import { useState } from 'react'

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    // basically, set isOpen to the opposite of its current value
    setIsOpen((currentIsOpen) => !currentIsOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    // console.log(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    )
  })

  return (
    <div className='dropdown'>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown
