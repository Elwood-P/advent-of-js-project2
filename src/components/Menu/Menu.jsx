import Panel from '../UI/Panel';
import menuItems from '../../data/menuItems';
import MenuItem from './MenuItem';

function Menu() {
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
