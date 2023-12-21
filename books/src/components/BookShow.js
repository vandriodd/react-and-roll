import { useState } from 'react';
import BookEdit from './BookEdit';

// Recieve props from BookList.js (book)
function BookShow({ book, onDelete, onEdit }) {
  // the default value is 'false' because we want to show the book's title (reasons in BookEdit.js)
  const [showEdit, setShowEdit] = useState(false);
  // const [editInput, setEditInput] = useState("");

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    // Toggle the value of showEdit
    setShowEdit(!showEdit);
  };

  // One way to handle showEdit state
  // (single prop, sinle callback function, single eventHandler)
  // const handleSubmit = (id, newTitle) => {
  //   setShowEdit(false);
  //   onEdit(id, newTitle);
  // };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit
        book={book}
        // So, if we use the handleSubmit function, we don't need to pass the onEdit function
        // onSubmit={handleSubmit}
        onEdit={onEdit}
        hideEdit={() => setShowEdit(false)} // another way to handle showEdit state
      />
    );
  }

  return (
    <div className='book-show'>
      <img
        alt='Book photo'
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      <div className='content'>{content}</div>
      {/* {!showEdit ? book.title : <input value={book.title} />} */}
      <div className='actions'>
        <button
          className='edit'
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          className='delete'
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
