import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/icon-menu.svg';
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import cart from '../images/icon-cart.svg';
import closeBtn from '../images/icon-close.svg';
import { CartContext } from '../CartContext';

function Navbar() {
  const { setIsCartOpen, isCartOpen, inputValue, isAddBtn } =
    useContext(CartContext);
  const [navOpen, setNavOpen] = useState(false);

  const handleCartBtnClick = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <nav className="navbar">
      <div className="icons">
        <button
          onClick={() => {
            setNavOpen(!navOpen);
          }}
          type="button"
          className="menuBtn"
          aria-label="Menu"
        >
          {navOpen ? (
            <img className="menu" src={closeBtn} alt="close icon" />
          ) : (
            <img className="menu" src={icon} alt="menu icon" />
          )}
        </button>
        <Link to="/ecommerce-products-page/">
          <img src={logo} alt="Company Logo" className="logo" />
        </Link>
      </div>
      <ul className={`list ${navOpen ? 'open' : ''}`}>
        <li className="item">
          <Link to="/" className="link">
            Collections
          </Link>
        </li>
        <li className="item">
          <Link to="/" className="link">
            Men
          </Link>
        </li>
        <li className="item">
          <Link to="/" className="link">
            Women
          </Link>
        </li>
        <li className="item">
          <Link to="/" className="link">
            About
          </Link>
        </li>
        <li className="item">
          <Link to="/" className="link">
            Contact
          </Link>
        </li>
      </ul>
      <div className="avatarContainer">
        <button
          type="button"
          className="cartBtn"
          onClick={handleCartBtnClick}
          aria-label="Open Cart"
        >
          {isAddBtn && <div className="quantity"> {inputValue} </div>}
          <img src={cart} alt="" className="cart" />
        </button>

        <img className="avatar" src={avatar} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
