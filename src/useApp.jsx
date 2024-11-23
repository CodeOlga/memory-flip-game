import { useEffect, useState } from "react";

export const useApp = ({ initialCards }) => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [score, setScore] = useState(0);
  const [waiting, setWaiting] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...initialCards, ...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    resetSelection();
    setScore(0);
  };

  const handleSelect = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  const resetSelection = () => {
    setFirstCard(null);
    setSecondCard(null);
    setScore((score) => score + 1);
    setWaiting(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (firstCard && secondCard) {
      setWaiting(true);

      if (firstCard.label === secondCard.label) {
        setCards((prevCards) => {
          return prevCards.map((card) =>
            card.label === firstCard.label ? { ...card, matched: true } : card,
          );
        });

        resetSelection();
      } else {
        setTimeout(() => resetSelection(), 1000);
      }
    }
  }, [firstCard, secondCard]);

  return {
    cards,
    score,
    shuffleCards,
    handleSelect,
    firstCard,
    secondCard,
    waiting,
  };
};
