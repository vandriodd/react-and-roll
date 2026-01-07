import useAnimalSearch from "../lib/hooks/useAnimalSearch";
import Animal from "../lib/components/animal";

function App() {
  const { animals, search } = useAnimalSearch();

  return (
    <main>
      <h1>Animal Farm</h1>
      <input
        type="text"
        placeholder="Bear"
        onChange={(e) => search(e.target.value)}
      />

      <ul>
        {animals.map((animal) => (
          <Animal
            key={animal.id}
            // type={animal.type}
            // name={animal.name}
            // age={animal.age}
            {...animal}
          />
        ))}

        {animals.length === 0 && <h2>No animals found</h2>}
      </ul>
    </main>
  );
}

export default App;
