import React, { Component } from 'react'
import Signin from '../Signin/Signin'
import {Link} from "react-router-dom"
export default class Nav2 extends Component {
    render() {
        return (
            <>
                <nav className="navbar py-4 pt-5 navbar-expand-lg navbar-white bg-white sticky-top ">
                <div className="container-fluid">
                  

                    <div className=" d-block w-100" id="navbarSupportedContent">                
                      <ul className="navbar-nav  m-auto ">
                             
                          <li className="nav-item position-relative flex-row m-auto">
                                <span className="nav-link cartPrise d-inline">${this.props.totalPrice.toFixed(2)}</span> 
                                <a href="/cart">
                                    <i className="fas fa-shopping-cart cust-size  mt-3"></i>
                                    <span className="badge-info bg-red badge cartNum">{this.props.totalQty}</span>
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
