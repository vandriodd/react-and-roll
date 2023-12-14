import { useState } from 'react';
import './SearchBar.css';

// !NOPE This is not the way to do it
// because SearchBar and ImageList are siblings
// in React, sibling components cannot communicate directly
// import searchImages from "../api";

// function SearchBar() {
//   sendToImageList(
//     searchImages('cars')
//   )
//   return <div>SearchBar</div>
// }
// * GOOD SOLUTION
// share info between sibling components using props, involucrate the parent component

// form -> has an event called onSubmit, just press enter to trigger it
// (plain HTML) if we use form, we need name and value in the input, because we need to know which input is changing
// but in react we just prevent the default behaviour of the form, and we can use the input without name and value
function SearchBar({ onSubmit }) {
  // * Handle text inputs
  // 1 - create a state
  const [term, setTerm] = useState('');

  const handleFormSubmit = (e) => {
    // this line prevents the defaults behaviour of the form
    e.preventDefault();
    onSubmit(term);
  };

  // 2 - create a function to handle the change
  // every time we change the input, we update the state
  const handleChange = (e) => {
    // 3 - use the input value to update the state
    setTerm(e.target.value); // -> input value
  };

  // 4 - pass the state to the input as value prop
  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input
          value={term}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
