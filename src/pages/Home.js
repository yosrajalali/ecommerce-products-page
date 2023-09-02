import Slider from '../components/Slider';
import Checkout from '../components/Checkout';
import ActiveSlider from '../components/ActiveSlider';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

function Home() {
  const { activeSlider } = useContext(CartContext);
  return (
    <div className="home">
      {' '}
      {activeSlider && <ActiveSlider />} <Slider />
      <div className="col2">
        <div className="content">
          <p className="sneakerCompany"> sneaker company </p>{' '}
          <h1 className="contentTitle"> Fall limited edition sneakers </h1>{' '}
          <p className="contentText">
            These low - profile sneakers are your perfect casual wear
            companion.Featuring a durable rubber outer sole, they 'll withstand
            everything the weather can offer.{' '}
          </p>{' '}
        </div>{' '}
        <Checkout />
      </div>{' '}
    </div>
  );
}

export default Home;
