// 1) Import the React and ReactDOM libraries:
// react -> Defines what a component is and how multiple components work together
// react-dom -> Takes a component and makes it show up on the screen
// Import the App component
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Take the React component and show it on the screen
root.render(<App />);