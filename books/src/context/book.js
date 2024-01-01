// Context is used to pass data through the component tree without having to
// pass props down manually at every level
// The components not necessary should have a direct link between them

// ! Isn't a reemplacement for Redux / Props

// * For use Context, we need...
// * 1. Create a context
// * 2. Provide a context value
// * 3. Consume a context value

// Two types of context:
// - Context.Provider -> Provides the context value
// - Context.Consumer -> Consumes the context value

import { createContext, useState } from 'react';

const BooksContext = createContext();

// The Provider component is the one that provides the context value
// I wrap the Provider in this component because I want to change the context value
// so, I need to have a state
function Provider({ children }) {
  const [count, setCount] = useState(5);

  // Object that I want to share with the rest of the components via props
  const valueToShare = {
    count,
    incrementCount: () => setCount(count + 1),
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children} {/* This means that I can pass any component as a child */}
    </BooksContext.Provider>
  );
}

// named export
export { Provider };
export default BooksContext;

// now, if I want to import both, I can do it like this:
// import BooksContext, { Provider } from './context/book';
