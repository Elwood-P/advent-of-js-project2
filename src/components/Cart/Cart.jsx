import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import Panel from '../../components/UI/Panel';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

function Cart() {
  const {cart} = useContext(CartContext);
  console.log(cart);
  
  return (
    <Panel title="Your Cart">
      <div className="cart">
        <ul className="cart-summary">
          <CartItem />
        </ul>
        <CartTotals />
      </div>
    </Panel>
  );
}

export default Cart;
