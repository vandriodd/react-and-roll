import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// now I only need to import the Provider component
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

// Wrap the App component with the BooksContext.Provider
// This will provide the context value to all the components
root.render(
  // The value prop is the context value (super important)
  // <BooksContext.Provider value={5}>
  //   <App />
  // </BooksContext.Provider>

  // Now, I can pass any component as a child
  <Provider>
    <App />
  </Provider>
);
