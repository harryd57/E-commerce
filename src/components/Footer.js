import React from 'react';
import {FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa';

const Footer = () => {

  return (
    <footer id='footer' className='bg-dark mt-5 pt-2'>
        <div className="container">
          <div className="row">
            <div className="col text-center text-white">
            <h3>
              <strong>Contact Us</strong>
            </h3>
            </div>
          </div>
          <div className="row">
          <div className="col text-center">
          <a href="https://twitter.com/AwobajoS" target='_blank' className='btn text-primary m-1 footer-icons'> <FaTwitter/></a>
          <a href="https://instagram.com/iammadiba_" target="_blank" className='btn text-danger m-1 footer-icons'> <FaInstagram/></a>
          <a href="https://wa.me/+2348180472102?text=Hello" target='_blank' className='btn text-success m-1 footer-icons'> <FaWhatsapp/></a>
          </div>
          </div>
          <div className="row">
                <div className="col text-center text-white pt-3">
                    <p className='text-white'><small>&copy; 2022, Bucks Store All rights reserved</small></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;