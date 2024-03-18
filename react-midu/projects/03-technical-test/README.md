# React Technical Test

## APIs used

- [Random facts](https://catfact.ninja/fact)
- [Random Image](https://cataas.com/cat/says/hello)
  - Endpoint `https://cataas.com/cat/says/${text}`

## Instructions

1. Utilize the first API to retrieve a random fact about cats.
2. Use the second API to display an image of a cat.
3. The first word of the retrieved fact should be the key to search for the cat image.

## Notes

Different ways to handle asynchronous results in JavaScript:

```javascript
  const f = function (newFact) {
    setFact(newFact)
  }

  getRandomFact().then((newFact) => { return setFact(newFact)})
  getRandomFact().then((newFact) => setFact(newFact))
  getRandomFact().then(f)
  getRandomFact().then(setFact)
```

**1. Defining a named function and passing it to `.then()`**

- Here, we first define a named function f that takes newFact as an argument and calls setFact(newFact) inside its body. Then, we pass this function f as a callback to the .then() method. When getRandomFact() resolves, it calls f with the resolved value.

**2. Passing an anonymous function with a `return` statement to `.then()`**

- In this case, an anonymous arrow function is passed directly to .then(). This function takes newFact as an argument and explicitly returns the result of setFact(newFact). The return is actually unnecessary here since setFact(newFact) is the only statement, and its return value (if it has any) isn't being used for anything further in this chain.

**3. Passing and anonymous function without a block body to `.then()`**

- This is a more concise version of the above. When an arrow function has a single expression, we can omit the curly braces and the return keyword; the result of the expression is automatically returned. This version does exactly the same thing as the previous one but in a more succinct manner.

**4. Passing the `setFact` function directly to `.then()`**

- This is the most concise version. Since setFact is expected to take a single argument and getRandomFact().then() provides that argument (the resolved value), we can pass setFact directly as the callback. This tells JavaScript to call setFact with whatever value is resolved by getRandomFact(). This works well when the callback function's signature matches the .then() expectation (a single parameter in this case).
