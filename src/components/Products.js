import React, { useState } from 'react';
import items from '../data';
import {Link} from 'react-router-dom'
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


const Products = () => {
  const [categories, setCategories] = useState(allCategories);
  const [productItems, setProductItems] = useState(items);

  const filterItems = (category) =>{
    if (category === 'all'){
      setProductItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setProductItems(newItems);
  };
  return (
    <main>
    <section className='product product-section'>
    <div className="product-title">
    <h2>our products</h2>
    <div className="product-underline"></div>
    </div>
    <Categories categories={categories} filterItems={filterItems}/>
    <ProductList items={productItems}/>
    </section>
    </main>
  );
}

const Categories = ({ categories, filterItems }) => {
  
  return (
    <div className="button-container">
    {categories.map((category, index) => {
      return(
        <button
        type='button'
        key={index}
        className='filter-btn'
        onClick={() => filterItems(category)}>
        {category}
        </button>
      );
    })}
    </div>
  );
};

const ProductList = ({items}) => {
  return(
    <div className='container'>
    <div className="row">
    {items.map((item) => {
      const {id, img, price, title} = item;
      return(
        <div className="col-md-4" key={id}>
        <article className='cocktail'>
      <div className='img-container'>
        <img src={img} alt={title} />
      </div>
      <div className='cocktail-footer'>
        <h3>{title}</h3>
        <p><strong>₦ {price.toLocaleString()}</strong></p>
        <Link to={`/product/${id}`} className='btn btn-outline-secondary'>
          Details
        </Link>
      </div>
    </article>
    </div>
      )
    })}
    </div>
    </div>
  );
}

export default Products;