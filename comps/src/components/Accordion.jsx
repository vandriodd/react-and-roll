import { useState } from 'react';
import { FaAngleDown, FaAngleLeft } from 'react-icons/fa'

function Accordion ({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0)

  // * Longhand or Shortand version for event handlers?
  // Longhand -> use if hanles has >1 lines of code
  // Shorthand -> use if handler has 1 line of code (because more lines can make JSX look messy)

  // ! I move this function outside of map function because it will be re-created every time the component re-renders
  // ! And it looks like a waste of resources
  // To avoid this, we can declare the arrow function outside, and pass it to the onClick handler
  // with the index as an argument
  // ! This is a common pattern in React if we are using map or otherwise building up a list
  // ! and we want to define the event handler outside

  const handleClick = (nextIndex) => {
    // * Functional State Update
    // Use if new value depends on old
    // We can pass a function to the setter function
    // This function will receive the current state as an argument
    // And will return the new state
    // This snippet will make sure that the state is always up to date
    setExpandedIndex((current) => {
      if (current === nextIndex) {
        return -1
      }
      return nextIndex
    })

    // * Simple State Update
    // Use if new value doesn't depend on old
    // if (expandedIndex === nextIndex) {
    //   setExpandedIndex(-1)
    // } else {
    //   setExpandedIndex(nextIndex)
    // }
  }

  // Also we can recieve at first argument an object with the event info
  // const handleClick = (event) => {
  //   console.log(event)
  //   setExpandedItem(index)
  // }

  // And in the JSX:
  // <div onClick={handleClick}>{item.label}</div>

  // Quick reminder of how the map function works
  // It takes an array and iterates over it
  // Executes a function for each item in the array
  // Returns a new array with the results of the function
  const renderedItems = items.map((item, index) => {
    // This variable will be true if the current item is expanded
    const isExpanded = index === expandedIndex

    const icon = (
      <span className='text-xl'>
        {isExpanded ? <FaAngleDown /> : <FaAngleLeft />}
      </span>
    )

    return (
      <article key={item.id}>
        {/* <div onClick={() => setExpandedItem(index)}>{item.label}</div> */}
        <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
      </article>
    )
  })

  return (
    <div className='border-x border-t rounded'>{renderedItems}</div>
  );
}

export default Accordion;
