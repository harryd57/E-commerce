import React from "react";
import cover from '../img/back2school.jpg'
import bag from '../img/bags.jpg'
import shoe from '../img/shoes.jpg'
import book from '../img/books.jpg'
import {Link} from 'react-router-dom';

const Homepage = () => {

  return (
    <React.Fragment>
      <section className="bg-white">
        <div className='container article-1'>
          <div className="row">
            <div className="col-sm-12 col-lg-6 d-flex justify-content-start align-items-start article-1-1">
              <article>
                <h2 className="font-weight-bold"><strong>Get Your School Items</strong></h2>
                <p className="my-3 about-text">Welcome to Bucks Store. <br/> Purchase quality books, bags, and shoes for students.<br/>
                Available at affordable prices.
                </p>
                <Link to='/products' className="btn btn-lg bg-grey text-white my-4">Shop Now</Link>
              </article>
            </div>
            <div className="col-sm-0 col-lg-6 c-div">
              <article id='fade'>
                <img src={cover} alt="back to school" className="cover-pic" />
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 featured">
      <div className="container">
        <div className="row">
          <div className="col text-center">
          <h2 style={{"paddingTop": "35px"}}> <strong>Featured Categories</strong></h2>
          <div className="title-underline bg-grey"></div>
          </div>
        </div>

        <div className="row pt-4" style={{"marginTop": "40px"}}>
        <div className="col-sm-6 col-md-4 mt-3">
          <img src={bag} alt="bag" className="img-fluid rounded"/>
          <footer className="text-center my-3">
            <h5>Bags</h5>
          </footer>
        </div>
        <div className="col-sm-6 col-md-4 mt-3">
          <img src={shoe} alt="bag" className="img-fluid rounded"/>
          <footer className="text-center my-3">
            <h5>Shoes</h5>
          </footer>
        </div>
        <div className="col-sm-6 col-md-4 mt-3">
          <img src={book} alt="bag" className="img-fluid rounded"/>
          <footer className="text-center my-3">
            <h5>Books</h5>
          </footer>
        </div>
        </div>
      </div>
      </section>
    </React.Fragment>
  );
};

export default Homepage;