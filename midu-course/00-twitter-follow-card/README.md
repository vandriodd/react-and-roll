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

We pass the elements by props to the component that interests us, and there we evaluate and

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

## Tips

### Style by separations, not by components

The styles applied in the components affect the components wherever you put them. Imagine that there is a moment when you want to use the component alone, for example in the case of this project, where a card appears alone; if the styles are in the component, it will not look good because the styles of the card will not be applied. That is why it is better to separate the styles and apply them where the card is going to be rendered.

That is, for example, a div that contains multiple cards, here we would apply styles related to separations.
