import './App.css'
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // modifies a piece of state, so, we need to use the setter function
    // animals.push(getRandomAnimal());
    setAnimals([...animals, getRandomAnimal()]);
  }

  // List building
  // map -> takes whatever is in the array, and one by one for every element, it will run a function
  // the function will receive the element as an argument
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  });

  // is something like:
  // const renderedAnimals = [
  //   <AnimalShow type={animals[0]} />,
  //   <AnimalShow type={animals[1]} />,
  //   <AnimalShow type={animals[2]} />,
  // ]

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;