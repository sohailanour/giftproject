import React, { Component } from 'react'
import styles from './SubShopNow.module.css'
export default class SubShopNow extends Component {
    render() {
        return (
            <> 
           <section id="ShopNow">
           <div className={`${styles['shop-card']} card text-center  `}>

<div className="card-body  d-flex align-items-center justify-content-center ">
   <div>
   <h3 className="card-title">Special Offers</h3>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nostrum..</p>
    <a href="#" className={`${styles['shop-btn']} btn`}>Shop Now </a>
   </div>
  </div>
</div>
           </section>
  
            </>
        )
    }
}
