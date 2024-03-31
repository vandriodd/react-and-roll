# Google Translate Clone

## Notes

- Avoid exposing the `dispatch` function directly in components, as this creates a specific dependency on the React useReducer contract. It's crucial to keep components decoupled. The best practice is to encapsulate and export an interface through a custom hook.
- Components should be designed such that the closer they are to the logic layer, the less extensible they need to be, allowing a greater degree of control to be exerted from within the component itself.
