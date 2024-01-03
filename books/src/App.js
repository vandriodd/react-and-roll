import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  const { fetchBooks } = useContext(BooksContext);
  // when we should fetch the books?

  // ! DONT DO THIS
  // Because it will be called every time the component is rendered
  // so, we end up with an infinite loop
  // fetchBooks();

  // ! DO THIS
  // useEffect is a hook that allows us to run some code when the component is
  // initially rendered or (sometimes) when the component is updated
  // useEffect(() => {effect function}, [dependency array])
  useEffect(() => {
    fetchBooks();
  }, []);

  // examples of dependency array
  // useEffect(() => {}, []); // run only once when the component is initially rendered
  // useEffect(() => {}); // run every time the component is rendered
  // useEffect(() => {}, [books]); // run only when the books array changes
  // useEffect(() => {}, [books.length]); // run only when the length of books array changes
  // useEffect(() => {}, [books, books.length]); // run only when the books array or its length changes
  // and so on...

  return (
    <div className='app'>
      {/* And it's for it that this snippet doesn't show the new book */}
      {/* {books.length} */}
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
