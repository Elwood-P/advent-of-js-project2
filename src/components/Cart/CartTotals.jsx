import { useContext } from 'react';
import CartContext from '../../store/CartContext';

function CartTotals() {
  const { cart } = useContext(CartContext);

  const subTotal = cart.length ? cart.reduce((runningTotal, cartItem) => runningTotal + cartItem.price * cartItem.count, 0) : 0;
  const tax = Math.round(subTotal * 0.2);
  const total = subTotal + tax;

  return (
    <div className="totals">
      <div className="line-item">
        <div className="label">Subtotal:</div>
        <div className="amount price subtotal">£{subTotal / 100}</div>
      </div>
      <div className="line-item">
        <div className="label">Tax:</div>
        <div className="amount price tax">£{tax / 100}</div>
      </div>
      <div className="line-item total">
        <div className="label">Total:</div>
        <div className="amount price total">£{total / 100}</div>
      </div>
    </div>
  );
}

export default CartTotals;
