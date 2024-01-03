import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

// Recieves props from App.js (books)
function BookList({ books, onDelete, onEdit }) {
  // const value = useContext(BooksContext); // value stored in context
  // const { count, incrementCount } = useContext(BooksContext); // destructuring cuz now is an obj

  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });

  return (
    <div className='book-list'>
      <button onClick={{}}>Click</button>
      {renderedBooks}
    </div>
  );
}

export default BookList;
