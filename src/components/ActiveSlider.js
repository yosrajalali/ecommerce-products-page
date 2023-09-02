import React, { useContext } from 'react';

import closeBtn from '../images/icon-close.svg';
import nextIcon from '../images/icon-next.svg';
import prevIcon from '../images/icon-previous.svg';

import { CartContext } from '../CartContext';
import thumbnails from '../data';

function ActiveSlider() {
  const {
    productIdx,
    setProductIdx,
    setActiveSlider,
    activeThumbnail,
    setActiveThumbnail,
  } = useContext(CartContext);

  const handleThumbnailClick = (index, id) => {
    setProductIdx(index);
    setActiveThumbnail(id);
  };

  const handleNextClick = () => {
    const nextProductIdx = productIdx >= 3 ? 0 : productIdx + 1;
    setActiveThumbnail(thumbnails[nextProductIdx].id);
    setProductIdx(nextProductIdx);
  };

  const handlePrevClick = () => {
    const prevProductIdx = productIdx <= 0 ? 3 : productIdx - 1;
    setActiveThumbnail(thumbnails[prevProductIdx].id);
    setProductIdx(prevProductIdx);
  };

  return (
    <div className="activeSlider">
      <div className="activeSliderContainer">
        <img
          src={closeBtn}
          alt="close button"
          className="closeBtn"
          onClick={() => {
            setActiveSlider(false);
          }}
        />
        <img src="" alt="" />
        <div className="productSlider">
          <button
            type="button"
            className="nextIconActive"
            aria-label="Previous Slide"
          >
            <img
              src={prevIcon}
              alt=""
              className="nextIcon"
              onClick={handlePrevClick}
            />
          </button>
          <img
            src={thumbnails[productIdx].productUrl}
            alt="product"
            className="productActive"
          />
          <button
            type="button"
            className="prevIconActive"
            aria-label="Next Slide"
          >
            <img
              src={nextIcon}
              alt="Next Slide"
              className="prevIcon"
              onClick={handleNextClick}
            />
          </button>
        </div>
        <div className="thumbnaiActivelSlider">
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
    </div>
  );
}

export default ActiveSlider;
