const Card = ({ image, selected, onClick }) => {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img src={image} className="card-face" />

        <img
          src={"/assets/card-back.png"}
          className="card-back"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
