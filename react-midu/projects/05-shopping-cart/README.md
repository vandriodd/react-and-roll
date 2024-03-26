# Shopping Cart

## Task 1: Ecommerce

- Display a list of products fetched from a JSON
- Add a filter by category
- Add a filter by price

## Task 2: Shopping Cart

- Allow adding products to a cart
- Allow removing products from the cart
- Enable modification of product quantities in the cart
- Synchronize cart changes with the product list
- Save the cart in localStorage to recover it upon page reload

## Notes

- **Prop drilling:** passing props from a parent component to a child component via other components.
- **Children prop:** a prop that allows you to pass components as data to other components.

### Hooks learned

- **useId:** assigns unique identifiers to elements, maintaining a consistent order of invocation. These identifiers are universal across server and client, making them suitable for use as ids. They are more reliable than Math.random, but should not be used on iterated elements to avoid confusion.
- **useContext:** provides a straightforward way to access context in functional components. It can be broken down into three main steps:

  **1. Create the Context.** Define a context using React.createContext(). This context acts as a container for sharing values across components.

  **2. Provide the Context.** Wrap components where you want the context available with a Provider component. The Provider accepts a prop called value containing the context's value.

  **3. Consume the Context.** Access the context's value within components using the useContext hook. This hook takes the context created in step one as an argument and returns its current value.
- **useReducer:** allows us to manage state in a scalable way. It operates by receiving a function that takes the current state and the action to perform. From these two parameters, useReducer returns the new state. This abstraction of state management is entirely separate from the component, state provider, and custom hooks, facilitating state management in larger and more complex applications.

> [!IMPORTANT]
>
> - Context in React serves as a dependency injection mechanism rather than just a tool for global state management. While it can be used for global state, its primary purpose is to inject information into components, bypassing the need for passing props explicitly.
> - Use useContext for minimal, stable global states. For complex scenarios, prefer Redux or Zustand. Aim to minimize global state use, focusing on local state to enhance maintainability and scalability.

## Concepts to learn

- **Singleton.**
