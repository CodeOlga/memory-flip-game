import { data } from "./data";
import { useApp } from "./useApp.jsx";
import Card from "./component/Card.jsx";

function App() {
  const {
    cards,
    score,
    shuffleCards,
    handleSelect,
    firstCard,
    secondCard,
    waiting,
  } = useApp({
    initialCards: data,
  });
  return (
    <section className="container px-4 sm:px-6">
      <button
        onClick={shuffleCards}
        className="mx-auto flex items-center justify-center rounded-2xl bg-[#00ADB5] px-10 py-2 text-2xl font-bold text-white sm:mt-6"
      >
        Start
      </button>

      <div className="mx-auto my-8 grid max-w-xl grid-cols-5 gap-4">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              disabled={waiting}
              opened={card.matched || firstCard === card || secondCard === card}
              selectionHandler={handleSelect}
            />
          );
        })}
      </div>

      <h1 className="text-center text-4xl font-bold text-[#FF2E63]">
        Score: {score}
      </h1>
    </section>
  );
}

export default App;
