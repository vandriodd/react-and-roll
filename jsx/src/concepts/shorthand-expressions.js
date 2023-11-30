// ↓ 13. Shorthand JS expressions ↓
import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
  // const date = new Date();
  // const time = date.toLocaleTimeString();
  // return <h1>{time}</h1>;

  return <h1>{new Date().toLocaleTimeString()}</h1>
}

root.render(<App />);