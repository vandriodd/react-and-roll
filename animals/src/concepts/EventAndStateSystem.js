import { useState } from 'react';

// State system -> what is visible on screen
// Event system -> what happens when the user interacts with the app

function App() {
  // State system
  // Is how we keep track of data inside of our app -> React will re-render the component when the state changes
  // State -> data that changes as the user interacts with our app
  // This is the one-and-only way we can change what content React shows
  // Steps:
  // 1) Define a piece of state with useState function
  // 2) Give a default value to this piece of state (useState(0))
  // 3) Use the piece of state (count) in some way in our component ({count})
  // 4) Update the piece of state (setCount) -> setCount(count + 1)

  // syntax: const [nameOfState, setNameOfState] = useState(initialValue);
  // useState returns an array with 2 elements
  // 1) The value of the state
  // 2) A function (setter) to update the state
  const [count, setCount] = useState(0);
  // ! NEVER GOING TO DO THIS:
  // const count = 0;

  // Event system
  // Is how we detect a user doing something inside of our app
  // Steps:
  // 1) Detect the event
  // 2) Handle the event by creating a function (convention for function: handle + name of event)
  // 3) Pass the function to the element that will be triggering the event (reference, not call it)

  // e.g.
  // const doGreeting = () => {
  //   return 'hi there'
  // };

  // console.log(doGreeting); Logs the 'doGreeting' function. Does not call it
  // console.log(doGreeting()); Inmmediately calls 'doGreeting' function and logs the return value

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Add animal</button>
      <div>
        Number of animals: {count}
      </div>
    </div>
  );

  // other way, onClick={() => console.log('Button was clicked!')}
}

export default App;