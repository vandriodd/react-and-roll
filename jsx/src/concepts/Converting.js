// ↓ 18. Converting HTML to JSX ↓
// ! Remember, HTML attributes ≠ JSX props
// Names/values of attributes are camelCased in JSX

// In JSX:
function App() {
  // 1) Prop names are camelCased
  // 2) Number attributes use curly braces
  // HTML → <input maxlength="5" />
  // JSX → <input maxLength={5} />

  // 3) Boolean true can be written as just the prop name
  // HTML → <input spellcheck="true" />
  // JSX → <input spellCheck />
  //... false should use curly braces
  // HTML → <input spellcheck="false" />
  // JSX → <input spellCheck={false} />

  // 4) class -> className
  // HTML → <div class="my-class" />
  // JSX → <div className="my-class" />

  // 5) In-line styles are provided as objects
  // HTML → <div style="background-color: red;" />
  // JSX → <div style={{ backgroundColor: 'red' }} />
}

export default App;