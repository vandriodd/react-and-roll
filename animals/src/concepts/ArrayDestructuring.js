import { useState } from "react";

function makeArray() {
  return [1, 10, 32, 40];
}

// One possible way to access the elements of the array
// const myArray = makeArray();
// const firstElement = myArray[0];
// const secondElement = myArray[1];

// Another way to access the elements of the array (array destructuring)
// the [] braces are the destructuring syntax, not an array
// Simultaneously create 2 variables and assign them the values of the array
const [firstElement, secondElement] = makeArray();
console.log(firstElement, secondElement);

// * Now, why is used for in the useState hook?

function App() {
  const [count, setCount] = useState(0);
  // console.log(useState(50)); -> returns an array with 2 elements inside it [50, function]

  const handleClick = () => {
    setCount(count + 1);
  }
}

// Parallel universe lmao
function useState(initialValue) {
  return {
    yourState: defaultValue,
    youtSetter: () => {}
  }
}

// by using object destructuring
function parallelApp() {
  // still significantly longer than the array destructuring style!
  // so, if useState returned an object, we have to write out more code
  // but if useState returns an array, we write less code
  // so, useState returns an array because it's just makes it easier to write code
  // just convenience.
  const { yourState: count, yourSetter: setCount } = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  // return blabla
}

export default makeArray;