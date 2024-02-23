# Redux Toolkit (RTK)

> [!IMPORTANT]
> The list with concept notes may be temporary.

- React.StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
- Provider is a component that makes the Redux store available to any nested components in the application.
- Action objects are plain JavaScript objects that have a type field. The type field should be a string that gives this action a descriptive name, and payload field that contains some data that the action needs to do its work.
- The word 'state' means different things in different contexts. Inside a Redux reducer, it refers to the state value that the reducer is managing, everywhere putside of these reducers, it refers to the whole state objext in the store.
