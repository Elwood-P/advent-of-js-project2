import chevron from '../../assets/images/chevron.svg';

function CartItem() {
  return (
    <li className="">
       <div class="plate">
        <img src="/assets/product-images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" class="plate" />
        <div class="quantity">1</div>
      </div>
      <div class="content">
        <p class="menu-item">Fish Sticks and Fries</p>
        <p class="price">$6.34</p>
      </div>
      <div class="quantity__wrapper">
        <button class="decrease" alt="decrease">
          <img src={chevron} />
        </button>
        <div class="quantity">1</div>
        <button class="increase">
          <img src={chevron} alt="increase" />
        </button>
      </div>
      <div class="subtotal">
        $6.34
      </div>
    </li>
  );
}

export default CartItem;
