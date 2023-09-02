import React from 'react';
import thumbnail1 from '../images/image-product-1-thumbnail.jpg';
import deleteIcon from '../images/icon-delete.svg';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function Cart() {
  const { inputValue } = useContext(CartContext);
  return (
    <div className="cartSection">
      <h3 className="cartTitle"> Cart </h3>
      <div className="line"> </div>
      {inputValue > 0 ? (
        <div className="cartContent">
          <div className="descContainer">
            <img src={thumbnail1} alt="product1" className="cartImg" />
            <div className="cartTexts">
              <p className="cartDesc"> Fall Limited Edition Sneakers </p>
              <span> {`$125.00 x ${inputValue}`} </span>
              <span>
                $ {125 * inputValue}
                .00
              </span>
            </div>
            <img src={deleteIcon} alt="deleteIcon" className="deleteIcon" />
          </div>
          <button type="button" className="checkoutBtn" aria-label="checkout">
            Checkout
          </button>
        </div>
      ) : (
        <div className="empty">
          <p> Your cart is empty. </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
// /div>
// ): ( <
//     div className = "empty" >
//     <
//     p > Your cart is empty. < /p>{' '} < /
//     div >
// )
// } { ' ' } <
// /div>
// );
// }

// export default Cart;
// /div>
// ): ( <
//     div className = "empty" >
//     <
//     p > Your cart is empty. < /p>{' '} < /
//     div >
// )
// } { ' ' } <
// /div>
// );
// }

// export default Cart;
// /div>
// ): ( <
//     div className = "empty" >
//     <
//     p > Your cart is empty. < /p>{' '} < /
//     div >
// )
// } { ' ' } <
// /div>
// );
// }

// export default Cart;
