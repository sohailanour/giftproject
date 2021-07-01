import React, { Component } from 'react'
import styles from './Trending.module.css'
import axios from "axios"
import "@fortawesome/fontawesome-free/css/all.min.css"
export default class Trending extends Component {
    butonclick=(e)=>{
        console.log("doneeeeee");
    }
   state={ gifts:[]}
  getgifts=async()=>{
      let {data}=await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
     this.setState({
          gifts:data
        })
    }
    componentDidMount(){
        this.getgifts();
    }
   render() {
        return (
            <>
            <section id="TrendingCat">
                <h1 className="text-center my-5">Trending Gifts</h1>
                <div className="container my-5">
                    <div className="row text-center">
                        {this.state.gifts.map((value,index)=>{
                            return(
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3 ">

                                    <div className={`${styles['card-item']}`}>
                                        <div  className={`${styles['card-img']}`}>
                                            <img  src={value.image_link} alt="" /> 
                                        </div>
                                        <div className={`${styles['gift-desc']}`}>
                                            <h4 >{value.name}</h4>
                                            <h4 className="text-danger">{value.price } EGP</h4>
                                        </div>
                                        <div className={`${styles['gift-d']}`}>
                                            <a  className="btn btn-md mb-2 mt-2" role="button">ADD TO CART  <i className="fas fa-cart-plus"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
            </section>
            </>
        )
    }
}