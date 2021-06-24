import React, { Component } from "react";

import shop1 from '../../img/shop-1.jpg'
import shop2 from '../../img/shop-2.jpg'
import shop3 from '../../img/shop-3.jpg'
import shop4 from '../../img/shop-4.jpg'
import shop5 from '../../img/shop-5.jpg'
import shop6 from '../../img/shop-6.jpg'
import styles from './ShowCat.module.css';
export default class ShowCat extends Component {

  shopData = [ { imgSrc: shop1, caption: "Gifts For Women" },
                { imgSrc: shop5, caption: "Gifts For Men" },
                { imgSrc: shop3, caption: "Gifts For Kids" },
                { imgSrc: shop4, caption: "Electronic Gifts" },
                { imgSrc: shop6, caption: "Personalized Gifts" },
                { imgSrc: shop2, caption: "Fashion Gifts" } ]

  render() {    
    return (
      <>
       
        <section id="ShowCat">
          <div className="container my-5">
            <div className="row">

              {this.shopData.map((value, index) => {
                return (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                          <div className={`${styles['card-item']}`}>
                            <div className={`${styles['card-img']}`}>
                              <img src={value.imgSrc} alt="" />
                            </div>
                            <div className={`${styles['card-desc']} text-center pt-3`}>
                              <h3>{value.caption}</h3>
                              <a href="/" className="btn btn-md" role="button">Shop Now</a>
                            </div>
                          </div>
                        </div>
                    )
                  }
                )
              }
                           
            </div>
          </div>
        </section>

      </>
    );
  }
}
