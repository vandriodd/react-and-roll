import { useContext } from 'react';
import BooksContext from '../context/books';

// Custom hook
// This hook is going to return the value from the context
// custom hooks is a way to share logic between components
// and reuse it :)
function useBookContext() {
  return useContext(BooksContext);
}

export default useBookContext;
