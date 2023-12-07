import SearchBar from "./components/SearchBar";

// Child to Parent communication is possible
// by using callbacks (from the Parent component)
function App() {
  const handleSubmit = (term) => {
    console.log("Tas buscando ->", term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
