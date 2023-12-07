// !NOPE This is not the way to do it
// because SearchBar and ImageList are siblings
// in React, sibling components cannot communicate directly
// import searchImages from "../api";

// function SearchBar() {
//   sendToImageList(
//     searchImages('cars')
//   )
//   return <div>SearchBar</div>
// }
// * GOOD SOLUTION
// share info between sibling components using props, involucrate the parent component

// form -> has an event called onSubmit, just press enter to trigger it
// (plain HTML) if we use form, we need name and value in the input, because we need to know which input is changing
// but in react we just prevent the default behaviour of the form, and we can use the input without name and value
function SearchBar({ onSubmit }) {
  const handleFormSubmit = (e) => {
    // this line prevents the default behaviour of the form
    e.preventDefault();
    onSubmit("cars");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  );
}

export default SearchBar;
