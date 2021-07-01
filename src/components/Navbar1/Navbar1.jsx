import React, { Component } from 'react'
import Signin from '../Signin/Signin'
import Styles from './Navbar1.module.css'
import {Link} from "react-router-dom"
import Categories from '../../Categories'

export default class Navbar1 extends Component {
    render() {
      
        return (
            <>               
              <nav className="navbar py-4 navbar-expand-lg navbar-light bg-light sticky-top ">
                <div className="container-fluid">
                  <a className="navbar-brand ml-5" href="/">TheGiftShop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">                
                      <ul className="navbar-nav ml-auto ">
                          <li className="nav-item ">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/category">Shop Now</Link>
                          </li>
                          
                    
                          <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    categories
                                  </a>
                                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {Categories.map((value, index) => {
                                      return (
                                          <a key={index} className="dropdown-item" href={`/category/${value}`}>{value} </a>                            
                                      )
                                    })}
                                    
                                  </div>
                          </li>
                    
                           <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="far fa-user fa-fw"></i>
                              </a>
                              <div className="dropdown-menu cust-drop" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/login">login</a>
                                <a className="dropdown-item" href="/signup">signup</a>
                              </div>
                          </li>
                    
                          
                          
                          
                    
                          {/* <li className="nav-item">
                              <a href="/login" className="nav-link "><i className="far fa-user fa-fw"></i></a>
                          </li> */}
                    
                          <li className="nav-item ">
                            <a className="nav-link text-center" href="/cart">
                              <div className="position-relative cust-pos">
                                <i className="fas fa-shopping-cart "></i>
                                <span className="badge-info bg-red badge position-absolute navBage">{this.props.totalQty}</span>
                              </div>                              
                            </a>
                          </li>
                                                              
                        </ul>
                    </div>
                </div>
              </nav>
            </>
        )
    }
}
