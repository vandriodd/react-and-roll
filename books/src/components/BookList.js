import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

// Recieves props from App.js (books)
function BookList() {
  const { books } = useContext(BooksContext);
  // const value = useContext(BooksContext); // value stored in context
  // const { count, incrementCount } = useContext(BooksContext); // destructuring cuz now is an obj

  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        // we still need to pass the key prop to the component
        // so React can keep track of the elements in the list
        // ! Context system works together with the Props system
        key={book.id}
        book={book}
      />
    );
  });

  return <div className='book-list'>{renderedBooks}</div>;
}

export default BookList;
