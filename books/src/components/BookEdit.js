import { useState } from 'react';

// Clicking the pencil icon will toggle the edit form
// showEdit === false => display book's title
// showEdit === true => display edit form

function BookEdit({ book, onEdit, hideEdit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If we use handleSubmit in BookShow, we don't need to pass the onEdit function
    // otherwise, we need it
    // onSubmit(book.id, title);
    onEdit(book.id, title);
    hideEdit();
  };

  return (
    <form
      className='book-edit'
      onSubmit={handleSubmit}
      action=''
    >
      <label>Title</label>
      <input
        className='input'
        value={title}
        onChange={handleChange}
      />
      <button className='button is-primary'>Save</button>
    </form>
  );
}

export default BookEdit;
