# Animals Project

This basic React project, "animals", showcases fundamental concepts such as event handling, state management, and list rendering. The main functionality involves generating a random animal, adding it to a list, and allowing users to express their liking for the animal by clicking on a heart icon to increase its size.

## Concepts practiced/learned

### Event System

React employs a synthetic event system to handle browser events consistently. In this project, I utilize event handling to capture user interactions, such as clicking the heart icon.

```javascript
const handleClick = () => {
  // Code to handle click event
};
```

### State System

React components have a built-in state system to manage dynamic data. The project uses state to keep track of the generated animals and their respective likes.

```javascript
const [animals, setAnimals] = useState([]);
```

### Event Handlers

Event handlers are functions that respond to specific events. In this project, the handleHeartClick function is an event handler triggered by a click on the heart icon.

```javascript
const handleHeartClick = () => {
  // Code to handle click event
};
```

### State

The state represents the current condition of a component. The project utilizes state to manage the list of animals dynamically.

```javascript
const [animals, setAnimals] = useState([]);
```

### Re-rendering process

React components re-render when there is a change in their state or props. The addition of a new animal triggers a re-render to update the displayed list.

```javascript
const addAnimalToList = () => {
  setAnimals([...animals, newAnimal]);
};
```

### Array destructuring

Array destructuring allows extracting values from arrays. Here, it is used to update the state with a new animal added to the existing list.

```javascript
const addAnimalToList = () => {
  setAnimals([...animals, newAnimal]);
};
```

### List building

List building involves dynamically rendering components based on an array of data. In this project, the list of animals is built using the map function.

```javascript
{
  animals.map((animal, index) => (
    <Animal key={index} animal={animal} onHeartClick={handleHeartClick} />
  ));
}
```
