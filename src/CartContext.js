import { createContext, useState } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [isAddBtn, setIsAddBtn] = useState(false);
  const [activeSlider, setActiveSlider] = useState(false);
  const [productIdx, setProductIdx] = useState(0);
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        inputValue,
        setInputValue,
        isAddBtn,
        setIsAddBtn,
        activeSlider,
        setActiveSlider,
        productIdx,
        setProductIdx,
        activeThumbnail,
        setActiveThumbnail,
      }}
    >
      {children}{' '}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
