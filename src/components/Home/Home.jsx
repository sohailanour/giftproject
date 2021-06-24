
import React, { Component } from 'react'
import img1 from '../../img/slider-1.jpg' 
import img2 from '../../img/slider-2.jpg' 
import img3 from '../../img/slider-3.jpg' 
import styles from './Home.module.css'
export default class Home extends Component {
    render() {
        return (
            <>
             
      <section id="home">
    <div className="container">
  <div className={`${styles.slider} m-auto`}>
  <div id="carouselExampleIndicators" className="carousel slide h-75 " data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <a href="/perfumes">  <img src={img1} className={styles.item} alt="..." /></a>
          </div>
          
          <div className="carousel-item">
           <a href="/"> <img src={img2} className={styles.item} alt="..." /></a>
          </div>
          <div className="carousel-item">
           <a href=""> <img src={img3} className={styles.item} alt="..." /></a>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
       
  </div>
    </div>
      </section>
    
             
            </>
        )
    }
}
