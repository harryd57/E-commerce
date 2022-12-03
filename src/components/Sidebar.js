import React from "react";
import { useGlobalContext } from "./context/context";
import {Link} from 'react-router-dom';
import { FaTimes, FaShoppingCart } from "react-icons/fa";

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar, amount} = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen? 'sidebar show-sidebar': 'sidebar'}`}>
    <div className='sidebar-header'>
        <h3>BUCKS STORE</h3>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="link">
        <li>
          <Link to='/' onClick={closeSidebar}>Home</Link>
        </li>
        <li>
          <Link to='/about' onClick={closeSidebar}>About</Link> 
        </li>
        <li>
          <Link to='/products' onClick={closeSidebar}>Products</Link>
        </li>
      </ul>
      <ul className="social-icon">
        <li>
          <Link to='/cart' className="badge" value={amount} onClick={closeSidebar}>Cart <FaShoppingCart/></Link>
        </li>         
      </ul>
    </aside>
  );
};

export default Sidebar;