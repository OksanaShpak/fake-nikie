function Drawer() {
  return (
    <div className="c-cart-drawer__overlay" style={{ display: 'none' }}>
      <div className="c-cart-drawer">
        <h2 className="c-cart-drawer__title">
          Cart
          <img className="o-btn__close" src="img/btn-remove.svg" alt="Close" />
        </h2>
        <div className="c-cart-drawer__items">

          {/* just for his case, because his prod image had a lot of white space on top, maybe you don need this way of image inport and can use just a normal import */}
          <div className="c-cart-drawer__item">
            <div className="c-cart-drawer__item-image" style={{ backgroundImage: 'url(img/nikies/4.jpg)' }}>

            </div>
            {/* old import <img className="c-cart-drawer__item-image" src="img/nikies/4.jpg" alt="Nikie"></img> */}

            <div className="c-cart-drawer__item-info">
              <p className="c-cart-drawer__item-title">
                Nike Air Max Flyknit Racer
              </p>
              <b className="c-cart-drawer__item-price">
                200 ASD
              </b>
            </div>
            <img className="c-cart-drawer__item-remove" src="img/btn-remove.svg" alt="Remove"></img>
          </div>

          {/* Second cart item */}
          <div className="c-cart-drawer__item">
            <div className="c-cart-drawer__item-image" style={{ backgroundImage: 'url(img/nikies/4.jpg)' }}>

            </div>
            {/* old import <img className="c-cart-drawer__item-image" src="img/nikies/4.jpg" alt="Nikie"></img> */}

            <div className="c-cart-drawer__item-info">
              <p className="c-cart-drawer__item-title">
                Nike Air Max Flyknit Racer
              </p>
              <b className="c-cart-drawer__item-price">
                200 ASD
              </b>
            </div>
            <img className="c-cart-drawer__item-remove" src="img/btn-remove.svg" alt="Remove"></img>
          </div>

        </div>

        <div className="c-cart-drawer__bottom-container">
          <ul className="c-cart-drawer__bottom">
            <li className="c-cart-drawer__bottom-item">
              <span className="c-cart-drawer__bottom-item-title">
                Total
              </span>
              <div className="c-cart-drawer__bottom-item-devider"></div>
              <b className="c-cart-drawer__bottom-item-number">$2000</b>
            </li>
            <li className="c-cart-drawer__bottom-item">
              <span className="c-cart-drawer__bottom-item-title">
                Taxes 5%
              </span>
              <div className="c-cart-drawer__bottom-item-devider"></div>
              <b className="c-cart-drawer__bottom-item-number">$30</b>
            </li>
          </ul>
          <button className="o-prime-btn">
            Make Order
            <img className="o-prime-btn__arrow" src="img/arrow.svg" alt="Arrow" />
          </button>

        </div>

      </div>

    </div>
  );
}

export default Drawer;