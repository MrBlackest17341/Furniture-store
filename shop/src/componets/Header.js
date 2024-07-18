import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  const showOrders = () => {
    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price));
    return (
      <div>
        <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
      </div>
    );
  }

  return (
    <header>
      <div>
        <span className='logo'>Housr Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders && props.orders.length > 0 ? (
              <>
                {props.orders.map(el => (
                  <Order onDelete={props.onDelete} key={el.id} item={el} />
                ))}
                {showOrders()} 
              </>
            ) : (
              <p>Корзина пуста</p>
            )}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}
