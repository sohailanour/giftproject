import React, { Component } from 'react'
import styles from './Home.module.css'
export default class SpecialOfferSection extends Component {
    render() {
        return (
            <> 
                <section id="ShopNow">
                    <div className={`card ${styles['shop-card']}  text-center `}>

                        <div className="card-body d-flex align-items-center justify-content-center">
                            <div>
                                <h3 className="card-title mb-3">Trending MAkeup</h3>
                                {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nostrum..</p> */}
                                <a href="/trending" className={`${styles['shop-btn']} btn`}>Shop Now </a>
                            </div>
                        </div>
                    </div>
                </section>  
            </>
        )
    }
}
