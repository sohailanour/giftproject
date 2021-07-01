
import React, { Component } from 'react'
import img1 from '../../img/slider-1.jpg' 
import img2 from '../../img/slider-2.jpg' 
import img3 from '../../img/slider-3.jpg' 
import ShowCat from '../ShowCat/ShowCat'
import Category from '../MainShopNow/Category'
import { NavLink } from "react-router-dom";
import SpecialOfferSection from './SpecialOfferSection'
import styles from './Home.module.css'
import Search from '../Search/Search'
import searchFunc from '../Search/searchFunc'
import store from '../../store'

export default class Home extends Component {
  
  state = { searchData: [] }

  
  componentDidMount() {
    
    console.log(this.state.searchData)
  }
  
  search = () =>{
    let searchResult = searchFunc()
    console.log("home search")
    console.log(searchResult)
    this.setState({searchData: searchResult})
  }
  
    render() {
        return (
            <>
            
            <div className="mt-5">
              <Search search={this.search} />
              <Category catName="All" searchData={this.state.searchData} addItem={this.props.addItem}/>
            </div>

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
              
              <ShowCat/>
            <SpecialOfferSection />
                
            </>
        )
    }
}
