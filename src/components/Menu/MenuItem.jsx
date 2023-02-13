import { useContext } from 'react';
import CartContext from '../../store/CartContext';

function MenuItem({ menuItem }) {
  const { cart, cartDispatch } = useContext(CartContext);

  return (
    <li>
      <div className="plate">
        <img src={`/assets/product-images/${menuItem.image}`} alt={menuItem.alt} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{menuItem.name}</p>
        <p className="price">£{menuItem.price / 100}</p>
        <button
          className="add"
          onClick={() => {
            cartDispatch({ type: 'addItem', item: menuItem });
          }}
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
}

export default MenuItem;
