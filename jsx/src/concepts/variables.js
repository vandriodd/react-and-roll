// ↓ 12. Printing JS variables in JSX ↓

import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
  let message = 'Bye there!';
  if (Math.random() > 0.5) {
    message = 'Hi there!';
  }

  return <h1>{message}</h1>;
}

root.render(<App />);