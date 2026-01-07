import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Easy way to create data
import Chance from "chance";
const chance = new Chance();

const animals = [...Array(250).keys()].map((id) => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  };
});

// Make data accesible
// .get method receibes 2 parameters: endpoint and callback fn
app.get("", (req, res) => {
  // Filter results by quert
  const q = req.query.q?.toLowerCase() || "";
  const results = animals.filter((animal) =>
    animal.type.toLowerCase().includes(q)
  );

  res.send(results);
});

app.listen(8080, () =>
  console.log("Server is running on http://localhost:8080")
);
