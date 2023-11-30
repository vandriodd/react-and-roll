// ↓ 13. Shorthand JS expressions ↓

function App() {
  // const date = new Date();
  // const time = date.toLocaleTimeString();
  // return <h1>{time}</h1>;

  return <h1>{new Date().toLocaleTimeString()}</h1>
}

export default App;