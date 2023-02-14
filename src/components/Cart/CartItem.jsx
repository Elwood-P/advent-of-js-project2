import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import chevron from '../../assets/images/chevron.svg';

function CartItem({ cartItem }) {
  const { name, price, image, alt, count } = cartItem;
  const { cartDispatch } = useContext(CartContext);

  return (
    <li className="">
      <div className="plate">
        <img src={`/assets/product-images/${image}`} alt={alt} className="plate" />
        <div className="quantity">{count}</div>
      </div>
      <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">£{price}</p>
      </div>
      <div className="quantity__wrapper">
        <button
          className="decrease"
          alt="decrease"
          onClick={() => {
            cartDispatch({ type: 'removeItem', item: cartItem });
          }}
        >
          <img src={chevron} />
        </button>
        <div className="quantity">{count}</div>
        <button
          className="increase"
          alt="increase"
          onClick={() => {
            cartDispatch({ type: 'addItem', item: cartItem });
          }}
        >
          <img src={chevron} alt="increase" />
        </button>
      </div>
      <div className="subtotal">£{price * count}</div>
    </li>
  );
}

export default CartItem;
