import React, { useContext } from 'react';
import nextIcon from '../images/icon-next.svg';
import prevIcon from '../images/icon-previous.svg';
import Cart from './Cart';
import { CartContext } from '../CartContext';
import thumbnails from '../data';

function Slider() {
  const {
    isCartOpen,
    setActiveSlider,
    productIdx,
    setProductIdx,
    activeThumbnail,
    setActiveThumbnail,
  } = useContext(CartContext);

  const handleThumbnailClick = (index, id) => {
    setProductIdx(index);
    setActiveSlider(true);
    setActiveThumbnail(id);
  };

  const handleNextClick = () => {
    if (productIdx >= 3) {
      setProductIdx(0);
    } else {
      setProductIdx(productIdx + 1);
    }
  };

  const handlePrevClick = () => {
    if (productIdx <= 0) {
      setProductIdx(3);
    } else {
      setProductIdx(productIdx - 1);
    }
  };

  return (
    <div className="col1">
      <div className="productSlider">
        {isCartOpen && <Cart />}
        <button type="button" className="nextIconBtn">
          <img
            src={prevIcon}
            alt=""
            className="nextIcon"
            onClick={handlePrevClick}
            aria-label="Next Product"
          />
        </button>
        <img
          src={thumbnails[productIdx].productUrl}
          alt=""
          className="product"
        />
        <button
          type="button"
          className="prevIconBtn"
          aria-label="Previous Product"
        >
          <img
            src={nextIcon}
            alt=""
            className="prevIcon"
            onClick={handleNextClick}
          />
        </button>
      </div>
      <div className="thumbnailSlider">
        {thumbnails.map((thumbnail, index) => {
          const { url, id, name } = thumbnail;
          return (
            <div
              key={id}
              className={`imageContainer ${
                activeThumbnail === id ? 'activeThumb' : ''
              }`}
            >
              <img
                onClick={() => {
                  handleThumbnailClick(index, id);
                }}
                src={url}
                alt={name}
                className="thumbnail"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
