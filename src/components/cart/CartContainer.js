import React from 'react';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const CartContainer = () => {
  const {cart,total,shipping, subtotal, clearCart, openModal} = useGlobalContext();
  if(cart.length === 0){
    return(
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
          <div className='d-flex justify-content-center my-4'>
          <Link to='/products' className='btn btn-lg bg-grey text-white'>Fill It Up</Link>
          </div>
        </header>
      </section>
    )
  }
  return(
  <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your cart</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
        <h4>
            Subtotal <span> ₦{subtotal.toLocaleString()}</span>
          </h4>
        <h4>
            shipping fee<span> ₦{shipping.toLocaleString()}</span>
          </h4>
          <h4>
            total <span> ₦{total.toLocaleString()}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={clearCart}
        >
          CLEAR CART
        </button>
        <button
        className='btn success-btn'
        onClick={openModal}
        >
        BUY ITEMS
        </button>
      </footer>
    </section>
  )
}

export default CartContainer;