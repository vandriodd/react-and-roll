import { useState } from 'react';
import { FaAngleDown, FaAngleLeft } from 'react-icons/fa'

function Accordion ({ items }) {
  const [expandedItem, setExpandedItem] = useState(0)

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
    setExpandedItem(nextIndex)
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
    const isExpanded = index === expandedItem

    const icon = (
      <span>
        {isExpanded ? <FaAngleDown /> : <FaAngleLeft />}
      </span>
    )

    return (
      <article key={item.id}>
        {/* <div onClick={() => setExpandedItem(index)}>{item.label}</div> */}
        <div onClick={() => handleClick(index)}>
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </article>
    )
  })

  return (
    <div>{renderedItems}</div>
  );
}

export default Accordion;
