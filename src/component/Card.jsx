import PropTypes from "prop-types";

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
      {/*<img*/}
      {/*  className={`${opened ? "" : "[transform:rotateY(-90deg)]"} absolute duration-300`}*/}
      {/*  src={card.imgUrl}*/}
      {/*  alt={card.label}*/}
      {/*  width={60}*/}
      {/*/>*/}

      {/*<img*/}
      {/*  className={`absolute duration-300 ${opened ? "" : "[transform:rotateY(-90deg)]"} max-h-full max-w-full object-contain`}*/}
      {/*  src={card.imgUrl}*/}
      {/*  alt={card.label}*/}
      {/*  width={60}*/}
      {/*/>*/}

      <img
        className={`absolute duration-300 ${opened ? "" : "[transform:rotateY(-90deg)]"} h-10 w-10 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12`}
        src={card.imgUrl}
        alt={card.label}
        width={60}
      />

      {/*<img*/}
      {/*  className={`absolute duration-300 ${opened ? "" : "[transform:rotateY(-90deg)]"} h-10 w-10 sm:h-8 sm:w-8`}*/}
      {/*  src={card.imgUrl}*/}
      {/*  alt={card.label}*/}
      {/*/>*/}
    </div>
  );
};

// Добавление PropTypes
Card.propTypes = {
  card: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    matched: PropTypes.bool.isRequired,
  }).isRequired,
  selectionHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  opened: PropTypes.bool.isRequired,
};

export default Card;
