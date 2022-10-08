function Header() {
  return (
    <header className="c-header">
      <div className="c-header__left">
        <img className="c-header__left-logo" src="img/logo.png" alt="Logotype" />
        <div>
          <h3 className="c-header__left-title">
            Almost Nikie
          </h3>
          <p className="c-header__left-subtitle">
            Best shoes shop
          </p>
        </div>
      </div>
      <ul className="c-header__right">
        <li className="c-header__right-item">
          <img className="c-header__right-cart-logo" src="img/cart.svg" alt="Cart" />
          <span>300 AUS</span>
        </li>
        <li className="c-header__right-item">
          <img className="c-header__right-user-logo" src="img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;