import { useContext } from 'react';
import CartContext from '../../store/CartContext';

import Panel from '../../components/UI/Panel';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

function Cart() {
  const { cart } = useContext(CartContext);
  const isCartEmpty = !cart.length;

  return (
    <Panel title="Your Cart">
      <div className="cart">
        {isCartEmpty && <p className="empty">Your cart is empty.</p>}
        <ul className="cart-summary">
          {cart.map((cartItem) => {
            return <CartItem key={cartItem.name} cartItem={cartItem} />;
          })}
        </ul>
        <CartTotals />
      </div>
    </Panel>
  );
}

export default Cart;
