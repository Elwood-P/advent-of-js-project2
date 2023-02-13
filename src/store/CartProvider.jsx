import { useState } from 'react';
import menuItems from '../data/menuItems';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const cartContextValue = {
    cart,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}

export default CartProvider;
