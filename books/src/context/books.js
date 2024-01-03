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
import axios from 'axios';

const BooksContext = createContext();

// The Provider component is the one that provides the context value
// I wrap the Provider in this component because I want to change the context value
// so, I need to have a state
function Provider({ children }) {
  // const [count, setCount] = useState(5);
  const [books, setBooks] = useState([]);

  // Fetching books from the server
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  const createBook = async (title) => {
    // ! BAD CODE
    // React remembers the books array state (useState([]))
    // Push modifies the existing array, JS finds the array and modifies it
    // books.push({ id: 123, title: title });
    // React gets a reference to the "new" state
    // Before re-render, React applies a small but very critical optimization
    // React compares the new state to the old state
    // If the reference to state is the same, React assumes that no rerender is required!
    // setBooks(books);

    // ! GOOD CODE
    // - Create a new array
    // - Copy all the elements from old array (...books)
    // - Add a new element to end
    // Now, React sees that the reference to state has changed, so it re-renders successfully!

    // * Solution implementing data persistence

    // Syntax: axios.method(url[, data[, config]])
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [
      ...books,
      // now, we don't need to create the obj manually
      // { id: Math.round(Math.random() * 9999), title: title },
      response.data,
    ];

    setBooks(updatedBooks);
    console.log(response);
  };

  // Removing a book from the list
  const deleteBookById = async (idToRemove) => {
    axios.delete(`http://localhost:3001/books/${idToRemove}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== idToRemove;
    });

    setBooks(updatedBooks);
  };

  // Editing a book title from the list
  const editBookById = async (idToEdit, newTitle) => {
    const response = await axios.put(
      `http://localhost:3001/books/${idToEdit}`,
      {
        title: newTitle,
      }
    );

    // Using the response from server to update the state
    // ...response.data -> copy all properties from the response.data obj
    const updatedBookTitle = books.map((book) => {
      return book.id === idToEdit ? { ...book, ...response.data } : book;
    });
    setBooks(updatedBookTitle);
  };

  // // Object that I want to share with the rest of the components via props
  // const valueToShare = {
  //   count,
  //   incrementCount: () => setCount(count + 1),
  // };

  return (
    <BooksContext.Provider value={{}}>
      {children} {/* This means that I can pass any component as a child */}
    </BooksContext.Provider>
  );
}

// named export
export { Provider };
export default BooksContext;

// now, if I want to import both, I can do it like this:
// import BooksContext, { Provider } from './context/book';
