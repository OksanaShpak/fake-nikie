function Card() {
  return (
    <div className="c-card">
      <img className="c-card__image" src="img/nikies/5.jpg" alt="Nikies" />
      <h5 className="c-card__title">Nike Air Max Flyknit Racer</h5>
      <div className="c-card__wrapper">
        <div className="c-card__price-container">
          <span className="c-card__price-label">Price:</span>
          <b className="c-card__price">200 ASD</b>
        </div>
        <button className="c-card__btn">
          <img className="c-card__btn-icon" src="img/plus.svg" alt="Add to cart"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;

