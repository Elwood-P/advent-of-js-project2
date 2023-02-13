import Panel from '../../components/UI/Panel';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

function Cart() {
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
