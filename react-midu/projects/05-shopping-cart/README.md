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
