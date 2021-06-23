import React, { Component } from "react";

import shop1 from '../../img/shop-1.jpg'
import shop2 from '../../img/shop-2.jpg'
import shop3 from '../../img/shop-3.jpg'
import shop4 from '../../img/shop-4.jpg'
import shop5 from '../../img/shop-5.jpg'
import shop6 from '../../img/shop-6.jpg'
import styles from "./ShowCat.module.css";
export default class ShowCat extends Component {
  render() {
    return (
      <>
       
       <section id="ShowCat" className="vh-100 m-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12 mb-1">
        <div className={`${styles['card-item']}`}>
          <div className={`${styles['card-img']}`}>
            <img src={shop1} alt="" />
          </div>
          <div className={styles.middle} />
          <div className={`${styles['card-desc']} text-center pt-3`}>
            <h3>Gifts For Women</h3>
            <a href="/" className="btn btn-md" role="button">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-1">
        <div className={`${styles['card-item']}`}>
          <div className={`${styles['card-img']}`}>
            <img src={shop5} alt="" />
          </div>
          <div className={styles.middle} />
          <div className={`${styles['card-desc']} text-center pt-3`}>
            <h3>Gifts For Men</h3>
            <a href="/" className="btn btn-md" role="button">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-1">
        <div className={`${styles['card-item']}`}>
          <div className={`${styles['card-img']}`}>
            <img src={shop3} alt="" />
          </div>
          <div className={styles.middle} />
          <div className={`${styles['card-desc']} text-center pt-3`}>
            <h3>Gifts For Kids</h3>
            <a href="/" className="btn btn-md" role="button">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 ">
        <div className={`${styles['card-item']}`}>
          <div className={`${styles['card-img']}`}>
            <img src={shop4} alt="" />
          </div>
          <div className={styles.middle} />
          <div className={`${styles['card-desc']} text-center pt-3`}>
            <h3>Electronic Gifts</h3>
            <a href="/" className="btn btn-md" role="button">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-1">
        <div className={`${styles['card-item']}`}>
          <div className={`${styles['card-img']}`}>
            <img src={shop6} alt="" />
          </div>
          <div className={styles.middle} />
          <div className={`${styles['card-desc']} text-center pt-3`}>
            <h3>Personalized Gifts</h3>
            <a href="/" className="btn btn-md" role="button">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-1">
        <div className={`${styles['card-item']}`}>
          <div className={`${styles['card-img']}`}>
            <img src={shop2} alt="" />
          </div>
          <div className={styles.middle} />
          <div className={`${styles['card-desc']} text-center pt-3`}>
            <h3>Fashion Gifts </h3>
            <a href="/" className="btn btn-md" role="button">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    );
  }
}
