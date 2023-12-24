import { useState } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

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
  const deleteBookById = (idToRemove) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== idToRemove;
    });

    setBooks(updatedBooks);
  };

  // Editing a book title from the list
  const editBookById = (idToEdit, newTitle) => {
    const updatedBookTitle = books.map((book) => {
      return book.id === idToEdit ? { ...book, title: newTitle } : book;
    });
    setBooks(updatedBookTitle);
  };

  return (
    <div className='app'>
      {/* And it's for it that this snippet doesn't show the new book */}
      {/* {books.length} */}
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDelete={deleteBookById}
        onEdit={editBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
