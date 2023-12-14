import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

// Child to Parent communication is possible
// by using callbacks (from the Parent component)
function App() {
  // When you update state, the component and all of its children will re-render
  // From the perspective of this component (App), 'images' is a piece of state
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    // if we put a console.log here, we can see the result (which is an array of images)
    // if the function isn't async, we can't see the result, because it's a promise!

    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
