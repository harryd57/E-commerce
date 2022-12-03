import React, {useState, useEffect} from 'react';
import data from '../data';
import {Link, useParams} from 'react-router-dom';
import { useGlobalContext } from './context/context';

const Product = () =>{
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const {addToCart} = useGlobalContext();

  useEffect(() =>{
    setLoading(true);
    const newItem = data.find((item) => item.id === parseInt(id));
    setItems(newItem);
    setLoading(false);
    }, [id])

  if (loading){
      return(
        <div className='loader'></div>
      );
  }

  if (!items){
    return (
      <h2 className='section-title'>no cocktail to display</h2>
    )
  } else{
    const { title, price, desc, category, img, brand, author} = items;
    return(
        <section className='item-section cocktail-section'>
        <div>
        <Link to='/' className='btn btn-lg btn-outline-secondary'>
          Back Home
        </Link>
        </div>
        <h2 className='section-title'>{title}</h2>
        <div className='drink'>
          <img src={img} alt={title}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>title :</span> {title}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>price :</span> ₦ {price.toLocaleString()}
            </p>
            { brand?
            <p>
              <span className='drink-data'>brand :</span> {brand}
            </p>
            :
            <p>
              <span className='drink-data'>author :</span> {author}
            </p>
            }
            <p>
              <span className='drink-data'>description :</span> {desc}
            </p>
            </div>
          </div>
          <Link to='/cart'><button className='btn btn-lg bg-grey text-white my-2' onClick={()=>addToCart(id)}>Add To Cart</button></Link>
        </section>  
    );
  }
}

export default Product;