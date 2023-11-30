// ↓ 16. Typical Component Layouts ↓

import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
  // Code to compute values we want to show in our JSX
  const name = 'Luz';
  const age = 20;

  // Content we want this component to show
  return (
    <h1>
      Hi, my name is {name} and my age is {age}
    </h1>
  );
}

root.render(<App />);