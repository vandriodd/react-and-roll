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
