import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//Pages
import Home from './Homepage';
import Products from './Products';
import About from './About';
import Cart from './cart/Cart';
import Product from './Product'
//Navbar
import Navbar from './Navbar';
//Sidebar
import Sidebar from './Sidebar';
//Modal
import Modal from './Modal';
//Footer
import Footer from './Footer';

const Setup = () => {
    return (
        <Router>
        <Navbar/>
        <Sidebar/>
        <Modal/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>
        <Footer/>
        </Router>
    );
};

export default Setup;