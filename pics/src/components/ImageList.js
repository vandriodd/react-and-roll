import ImageShow from "./ImageShow";
import "./ImageList.css";

// From the perspective of this component (ImageList), 'images' is a props
// * Handling List Updates
// OPTION A: Remove all existing HTML tied to this list, and replace it with a new list
// Works, but it's not the best option
// OPTION B: Use a 'key' prop
// That way, React will only re-render the elements that have changed
// So...
// 0 - Apply a "Key" to each element during the mapping step (We do this)
// 1 - After re-rendering, compare the keys on each ImageShow to the keys from the previous render
// 2 - Apply minimal set of changes to existing DOM elements (React does this two last steps)

// * Requirements for Keys
// Use whenever we have a list of elements
// Add the key to the top-most JSX element in the list
// Must be a string or number
// Should be unique for this list (if we have two lists, we can use the same key in both)
// Should be consistent across re-renders

// * What should you use for a key?
// Almost all lists we ever create will be built by mapping over an array of objects fetched from a db
// So, we can use the id of each object as the key

// * And if we don't have an id?
// We can use the index of each element in the array
// (But this is not recommended, because it's not consistent across re-renders)
// or we can generate a unique id by ourselves
function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />
  });

  return <div className="image-list">{renderedImages}</div>
}

export default ImageList;