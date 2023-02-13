import chevron from '../../assets/images/chevron.svg';

function CartItem() {
  return (
    <li className="">
       <div className="plate">
        <img src="/assets/product-images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" className="plate" />
        <div className="quantity">1</div>
      </div>
      <div className="content">
        <p className="menu-item">Fish Sticks and Fries</p>
        <p className="price">$6.34</p>
      </div>
      <div className="quantity__wrapper">
        <button className="decrease" alt="decrease">
          <img src={chevron} />
        </button>
        <div className="quantity">1</div>
        <button className="increase">
          <img src={chevron} alt="increase" />
        </button>
      </div>
      <div className="subtotal">
        $6.34
      </div>
    </li>
  );
}

export default CartItem;
