import PropTypes from "prop-types";

import "./Header.css";

const Header = ({ openCart }) => {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        {/* <!-- <img src="{logoImg}" alt="" /> --> */}
        Logo
      </a>
      <div className="header__user-info">
        <span className="header__user-name">B</span>
        <span className="header__user-email">user@mail.com</span>
      </div>
      <div className="header__cart-info">
        <button
          type="button"
          className="header__btn-cart"
          onClick={() => openCart()}
        >
          Open Cart
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  openCart: PropTypes.func.isRequired,
};

export default Header;
