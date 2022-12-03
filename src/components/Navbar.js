import React from "react";
import {FaBars, FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useGlobalContext } from "./context/context";


const Navbar = () => {
  const {amount, openSidebar} = useGlobalContext()

  return (
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <h3>BUCKS STORE</h3>
            <button className='nav-toggle' onClick={openSidebar}>
            <FaBars/>
            </button>
          </div>
          <div className="links-container">
          <ul className="links">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link> 
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <Link to='/cart' className="badge" value={amount}>Cart <FaShoppingCart/></Link>
          </li>         
        </ul>
        </div>
      </nav>
  );
};


export default Navbar;