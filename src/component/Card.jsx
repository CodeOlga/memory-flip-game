const Card = ({ card, selectionHandler, disabled, opened }) => {
  return (
    <div
      className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-[#EEEEEE] to-[#393E46] p-4 shadow-2xl shadow-[#393E46] duration-300 hover:shadow-xl hover:shadow-[#393E46]"
      onClick={() => {
        if (!disabled && !opened) {
          selectionHandler(card);
        }
      }}
    >
      <img
        className={`${opened ? "" : "[transform:rotateY(-90deg)]"} absolute duration-300`}
        src={card.imgUrl}
        alt={card.label}
        width={60}
      />
    </div>
  );
};

export default Card;