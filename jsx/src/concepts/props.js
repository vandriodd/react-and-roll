// ↓ 17. Customizing elements with Props ↓
// ! HTML attributes ≠ JSX props

import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

// JSX props features:
function App() {
  // - Can refer to a variable using curly braces
  // const inputType = 'number';
  // const minValue = 5;

  // return (
  //   <input
  //     type={inputType}
  //     min={minValue}
  //   />
  // );

  // - Don't have to be defined as variables (can provide "str", {num} as props)
  // return (
  //   <input
  //     type='number'
  //     min={5}
  //   />
  // );

  // Also can be provide other values as props:
  return (
    <input
      type='number'
      min={5}
      // - Functions
      onChange={(event) => console.log(event.target.value)}
      // - Objects (1st {} is for JSX, 2nd {} is for JS obj)
      // ! We can provide an object as a prop but we can't provide obj as something that we want to display
      style={{ color: 'red' }}
      // - Arrays
      className={['a', 'b', 'c']}
      // - Booleans
      disabled={false}
      // - Can be null
      hidden={null}
    />
  )
}

root.render(<App />);