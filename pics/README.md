# Pics React App

This React application, named "pics," utilizes the [Unsplash API](https://unsplash.com/developers) to fetch and display images based on user queries. The project focuses on implementing key React concepts for handling text inputs, communication between parent and child components, and handling list updates.

## Concepts Implemented

### 1. Handling Text Inputs / Form Control

In the SearchBar component, the user's input is managed using the `useState` hook to maintain the input state. The `handleFormSubmit` function prevents the default form submission behavior and calls the `onSubmit` prop function with the current search term.

> [!NOTE]
> This approach ensures that the input value is under the control of the React state system rather than being solely managed by the browser.

```jsx
// Example from SearchBar.js
const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  // ...
};
```

### 2. Communication Between Parent & Child Components

The App component serves as the parent, and the SearchBar component as the child. The parent passes a callback function (handleSubmit) to the child via props, enabling communication from child to parent when a search term is submitted.

```jsx
// Example from App.js
const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {/* ... */}
    </div>
  );
};
```

### 3. Handling List Updates with Keys

In the ImageList component, each rendered image is assigned a unique key using the `image.id` property. This ensures efficient updates and rendering of the list when new images are fetched.

```jsx
// Example from ImageList.js
const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return (
      <ImageShow
        key={image.id}
        image={image}
      />
    );
  });

  // ...
};
```
