# Components React App

This React project, named 'comps', is focused on building reusable components for personal practice. Through the implementation of key React concepts such as conditional rendering, inline event handling, and the construction of modular components, I aim to build a library of reusable components that can be used in future projects.

> [!IMPORTANT]
> This project is a work in progress. The components are not yet ready for production use & there will be temporary notes throughout the code (and this README).

## Notes (temporary)

- [x] || gives back the 1st value that is truthy, && gives back the 1st value that is falsy or the last truthy value
- [ ] Study more about delayed state update
- [x] Every component that shows a 'form control' will follow the same pattern:
  - [x] Call the 'current value' prop 'value'
  - [x] Call the 'value changed' prop 'onChange'
- [ ] Reusable 'presentation' components:
  - [ ] Should show a handful of JSX elements
  - [ ] Accepts + uses the 'children' prop
  - [ ] Allow extra classNames to be passed in + merge them
  - [ ] Take extra props, pass them through to root element
- [x] Event capture & bubbling
  - [x] 1 - Capture phase: Go to most parent of clicked element, see if it has handler
  - [x] 2 - Target phase: See if clicked element has handler
  - [x] 3 - Bubble phase: Go to parent of clicked element, see if it has handler. Then go to parent's parent, etc.
- [x] useRef hook
  - [x] Gives access to a DOM element
  - [x] Can be used to store a mutable value
  - [x] DOES NOT cause component to re-render
