import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {ImBin2} from 'react-icons/im';
import { useGlobalContext } from '../context/context';
const CartItem = ({ id, img, title, price, amount }) => {
  const {remove, toggleAmount} = useGlobalContext()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'> ₦{price.toLocaleString()}</h4>
        {/* remove button */}
        <button
          className='remove-btn text-danger'
          onClick={()=> remove(id)}
        >
          <ImBin2/>
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={()=> toggleAmount(id, 'inc')}>
          <AiOutlinePlus/>
        </button>
        {/* amount */}
        <p className='amount my-3'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={()=> toggleAmount(id, 'dec')}>
          <AiOutlineMinus/>
        </button>
      </div>
    </article>
  )
}

export default CartItem
