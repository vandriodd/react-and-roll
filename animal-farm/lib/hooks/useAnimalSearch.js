import { useEffect, useState } from "react";

function useAnimalSearch() {
  const [animals, setAnimals] = useState([]);

  const search = async (q) => {
    const response = await fetch(
      "http://localhost:8080?" + new URLSearchParams({ q })
    );
    const data = await response.json();
    setAnimals(data);

    localStorage.setItem("lastQuery", q);
  };

  // To store data on reload
  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    search(lastQuery);
  }, []);

  return { search, animals };
}

export default useAnimalSearch;
