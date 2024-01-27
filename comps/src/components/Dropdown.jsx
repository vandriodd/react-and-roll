import { useState, useEffect, useRef } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import Panel from './Panel'

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownElement = useRef()

  // This is for figuring out what element was clicked
  useEffect(() => {
    const handler = (e) => {
      // if the dropdown element is not set, then return
      if (!dropdownElement.current) {
        return
      }

      // if the element that was clicked is not inside the dropdown, then close the dropdown
      if (!dropdownElement.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handler, true)

    // clean up function to remove the event listener
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

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
    <div ref={dropdownElement} className='dropdown w-48 relative'>
      <Panel className='flex justify-between item-center cursor-pointer' onClick={handleClick}>
        {value?.label || 'Select...'}
        <FaAngleDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown
