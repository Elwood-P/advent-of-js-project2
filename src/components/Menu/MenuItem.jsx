import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import check from '../../assets/images/check.svg';

function MenuItem({ menuItem }) {
  const { cart, cartDispatch } = useContext(CartContext);
  const isInCart = cart.some((cartItem) => cartItem.name === menuItem.name);

  return (
    <li>
      <div className="plate">
        <img src={`/assets/product-images/${menuItem.image}`} alt={menuItem.alt} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{menuItem.name}</p>
        <p className="price">£{menuItem.price / 100}</p>
        <button
          className={isInCart ? 'in-cart' : 'add'}
          onClick={() => {
            cartDispatch({ type: 'addItem', item: menuItem });
          }}
        >
          {isInCart && <img src={check} alt="Check mark" />}
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    </li>
  );
}

export default MenuItem;
