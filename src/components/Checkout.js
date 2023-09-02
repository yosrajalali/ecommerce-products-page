import React, { useContext } from 'react';
import cartIcon from '../images/icon-cart.svg';
import plusIcon from '../images/icon-plus.svg';
import minusIcon from '../images/icon-minus.svg';
import { CartContext } from '../CartContext';

function Checkout() {
  const { inputValue, setInputValue, setIsAddBtn } = useContext(CartContext);

  const handleIncrement = () => {
    setInputValue(inputValue + 1);
  };

  const handleDecrement = () => {
    if (inputValue > 0) {
      setInputValue(inputValue - 1);
    }
  };

  const handleAddBtn = () => {
    if (inputValue > 0) {
      setIsAddBtn(true);
    }
  };
  return (
    <div className="checkout">
      <div className="prices">
        <div className="priceFlex">
          <h2 className="pricesTitle"> $125 .00 </h2>
          <span className="pricesOff"> 50 % </span>
        </div>{' '}
        <span className="pricesDiscount"> $250 .00 </span>
      </div>{' '}
      <div className="inpAndBtnContainer">
        <div className="inputContainer">
          <button
            type="button"
            className="plusIcon"
            onClick={handleIncrement}
            aria-label="Increment Amount"
          >
            <img src={plusIcon} alt="" />
          </button>{' '}
          <label htmlFor="quantityInput" className="visuallyHidden"></label>
          <input
            id="quantityInput"
            value={inputValue}
            type="number"
            readOnly
            className="input"
          />
          <button
            type="button"
            className="minusIcon"
            onClick={handleDecrement}
            aria-label="Decrement Amount"
          >
            <img src={minusIcon} alt="" />
          </button>{' '}
        </div>{' '}
        <button
          onClick={handleAddBtn}
          type="button"
          className="addBtn"
          aria-label="Add to cart"
        >
          <img src={cartIcon} alt="cart icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Checkout;
