import ImageShow from "./ImageShow";

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
// Should be unique for this list
// Should be consistent across re-renders
function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />
  });

  return <div>{renderedImages}</div>
}

export default ImageList;