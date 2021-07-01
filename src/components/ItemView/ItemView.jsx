import React, { Component } from 'react'
import store from '../../store'
import { NavLink } from 'react-router-dom'

export default class ItemView extends Component {
    render() {
        let pathid = window.location.pathname.split('/');
        let index = store.findIndex((elm) => elm.id === Number(pathid[pathid.length-1]))
        // console.log(index);
        return (
            <div className="container">
                <div className="row justify-content-between align-items-center py-5">
                    <div className="col-lg-4 col-md-5">
                        <div className="item">
                            <img className="w-100" src={store[index].image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 py-5">
                        <div className="item">
                            <h2 className="text-danger mb-5">{store[index].price}$</h2>
                            <h3 className="mb-5">{store[index].title}</h3>
                            <h5>Description:</h5>
                            <p className="mb-5">{store[index].description}</p>
                            <NavLink className="VILink" to="/MainShopNow">store</NavLink>
                            <span> , </span>
                            <NavLink className="VILink" to={`/category/${store[index].category}`}> {store[index].category} </NavLink>
                            <br></br>
                            <button onClick={()=>(this.props.addItem(store[index]))} className="btn btn-lg bg-red w-75 text-white mt-5">Add To Cart</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
