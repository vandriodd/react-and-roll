import { useState, useEffect } from "react";
import shuffle from "./utils/shuffle";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [cards, setCards] = useState(shuffle);
  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);
  const [disabled, setDisabled] = useState(false); // Delay Handler
  const [wins, setWins] = useState(0);

  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };

  const handleNewGame = () => {
    setWins(0);
    handleTurn();
    setCards(shuffle);
  };

  useEffect(() => {
    let pickTimer;

    if (pickOne && pickTwo) {
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.image === pickOne.image ? { ...card, matched: true } : card
          )
        );
        handleTurn();
      } else {
        setDisabled(true);
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      if (pickTimer) clearTimeout(pickTimer);
    };
  }, [pickOne, pickTwo]);

  // Player has found all matches
  useEffect(() => {
    if (cards.length === 0) return;

    const remaining = cards.filter((card) => !card.matched);
    if (remaining.length === 0) {
      setWins((prev) => prev + 1);
      // setCards(shuffle);
    }
  }, [cards]);

  return (
    <>
      <Header handleNewGame={handleNewGame} wins={wins} />

      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;

          return (
            <Card
              key={id}
              image={image}
              selected={card === pickOne || card === pickTwo || matched}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
