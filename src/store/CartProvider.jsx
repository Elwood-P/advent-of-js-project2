import { useReducer } from 'react';
import menuItems from '../data/menuItems';
import CartContext from './CartContext';

function cartReducer(cart, action) {
  if (action.type === 'addItem') {
    const existingCartItem = cart.find((cartItem) => cartItem.name === action.item.name);
    if (!existingCartItem) {
      return [...cart, { ...action.item, count: 1 }];
    } else {
      return cart.map((cartItem) => (cartItem.name === action.item.name ? { ...cartItem, count: cartItem.count + 1 } : cartItem));
    }
  }
  if (action.type === 'removeItem') {
    if (action.item.count > 1) {
      return cart.map((cartItem) => (cartItem.name === action.item.name ? { ...cartItem, count: cartItem.count - 1 } : cartItem));
    } else {
      return cart.filter((cartItem) => cartItem.name !== action.item.name);
    }
  }
}

function CartProvider({ children }) {
  const [cart, cartDispatch] = useReducer(cartReducer, []);

  const cartContextValue = {
    cart,
    cartDispatch,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}

export default CartProvider;
