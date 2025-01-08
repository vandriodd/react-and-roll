# Twitter Follow Card

## Concepts

### Component

Is a function that creates an element. Should be pascal case, because is the only way that React can distinguish between a component and a HTML element. The syntax to add a component is:

```jsx
<Component />
```

It can receive props, which are the attributes of the component. For example:

```jsx
<Component title="Hello World" />
```

### Props

Props are the attributes of a component. They are passed as a **named parameter**. For example:

```jsx
const Component = ({ title }) => {
  return <h1>{title}</h1>;
};

<Component title="Hello World" />;
```

They are the base of the component, because they allow you to pass data to the component and make it dynamic/reusable.

#### Booleans as props

The value is passed between braces, if it is a truetly value it can be passed without specifying "true", but if it is a falsey value it must be specified "false".

Also, if we do not pass the prop directly and try to access it, the value we will have available is undefined _(a falsey value, it can be useful for validations)_.

#### Functions as props

They are super important in React, because we will always want to pass functions or callbacks down, that is, we will want the components that we render further down (the children) to be able to update a state, handle or display certain data, etc.

If we want to use the function in another component, we have to pass the function as a parameter, not the function call (which passes the value result).

#### Elements as props

We pass the elements by props to the component that interests us, and there we evaluate and render them.

#### Objects as props

Usually is not a good option, but sometimes is necessary. We can have an object that contains several properties and pass it as a single parameter. The way to pass it is the same as with the other types of data.

```jsx
const object = {
  title: "Hello World",
  description: "This is a description",
};

<Component {...object} />;
```

The rest operator is responsible for destructuring the object and passing each property as an independent parameter.

It can be considered bad practice for the following reasons:

- You may be sending unnecessary information.
- It may cause the component to re-render unnecessarily.
- It can make the code more difficult to read.

It is better to be more declarative.

### Styles in React

There are several ways to add styles to a React component, because React doesn't have a built-in way to add styles. Some of the most common ways are:

- **CSS Modules**: You can create a CSS file with the same name as your component and import it in your component. For example:

```jsx
import styles from "./Component.module.css";
const Component = () => {
  return <h1 className={styles.title}>Hello World</h1>;
};

<Component />;
```

- **Common CSS**: You can create a CSS file and import it in your component. For example:

```jsx
import "./Component.css";
const Component = () => {
  return <h1 className="title">Hello World</h1>;
};

<Component />;
```

- **Inline styles**: You can add styles directly to the component using the `style` attribute. For example:

```jsx
const Component = () => {
  return <h1 style={{ color: "red" }}>Hello World</h1>;
};

<Component />;
```

or using the `className` attribute; remember that the class name is a reserved word in JavaScript, so you have to use `className` instead of `class`, because jsx eventually compiles to JavaScript. For example:

```jsx
const Component = () => {
  return <h1 className="title">Hello World</h1>;
};
<Component />;
```

### React Fragment

A React Fragment is a way to group a list of children without adding extra nodes to the DOM. It is useful when you want to return multiple elements from a component without wrapping them in a div. For example:

```jsx
const Component = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
    </>
  );
};
<Component />;
```

### Difference between elements and components

A component is a function that returns an element, it's like a factory of elements.
An element is what React renders. It is what you see in the browser.

### Props are immutable

The props should be immutable. If we want to modify a prop, we should:

- Modify it in the parent component and pass it again to the child component.
- Create a new constant within the child component, and use the prop there.

If we modify the value of the prop within the child component, we are depriving React of having the security of what it renders.

### Children

What is wrapped by an element, that is, what is between tags, is a children.

At the component level, the children can be other components, a simple string, etc. We always have 1 children, that contains all the elements inside.

If we want to recover a children, we must use the special prop children. For example:

```jsx
const Component = ({ children }) => {
  return <div>{children}</div>;
};

<Component>Hello World</Component>;
```

### State

State is a way to store data in a component. It is mutable, that is, it can be modified. It is used to store data that changes over time, for example, the value of an input, the visibility of a modal, etc.

To use state in a component, we have to use the `useState` hook. For example:

```jsx
const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
```

States are the key to making components interactive and dynamic.

## Tips

### Style by separations, not by components

The styles applied in the components affect the components wherever you put them. Imagine that there is a moment when you want to use the component alone, for example in the case of this project, where a card appears alone; if the styles are in the component, it will not look good because the styles of the card will not be applied. That is why it is better to separate the styles and apply them where the card is going to be rendered.

That is, for example, a div that contains multiple cards, here we would apply styles related to separations.
