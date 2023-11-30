// ↓ 22. Module Systems overview ↓

// * Export statements
// - Two kinds - 'default' and 'named'
// - A file can only have a single 'default' export
// - A file can have multiple 'named' exports

// * Default export
// Exporting file ↓
// function App() {
//   return <h1>Hi</h1>
// }
// export default App;

// or

// export default function App() {
//   return <h1>Hi</h1>;
// }

// Importing file ↓
// import App from './App';
// ! Confusing thing: The name of the variable we assign to the import statement
// ! does not need to match the name of the file we are importing from.
// ! We can name it whatever we want. The only thing that matters is
// ! the path to the file we are importing from. E.g.
// import MyApp from './App';
// This is because the name of the variable we assign to the import statement (default export)

// * Named export
// - Using when exporting multiple variables
// - Two ways to import named exports:
// 1) import { name } from './file';
// 2) import { name as newName } from './file';