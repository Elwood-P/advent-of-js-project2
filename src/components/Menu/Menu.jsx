import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import Panel from '../ui/panel';
import menuItems from '../../data/menuItems';
import MenuItem from './MenuItem';

function Menu() {
  const {cart} = useContext(CartContext);
  console.log(cart);

  return (
    <Panel title="To Go Menu">
      <ul className="menu">
        {menuItems.map((menuItem) => {
          return <MenuItem key={menuItem.name} menuItem={menuItem} />;
        })}
      </ul>
    </Panel>
  );
}

export default Menu;
