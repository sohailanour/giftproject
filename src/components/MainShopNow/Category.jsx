import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
// import store from '../../store.js'
export default class AllStore extends Component {

    
    render() {
        let products = this.props.searchData
        if (this.props.catName != "All") {
            if (this.props.catName == "fashion") {
                products = products.filter((elm) => elm.category.includes("men") );
            } else {
                products = products.filter((elm) => elm.category == this.props.catName)
            }
        }

        return (
            <>
                <div className="container">
                <div className="row mt-4">
                    {products.map((value,id)=> {
                        return(
                            <div key={value.id} className="text-center rounded col-md-4">
                                <div  className="shadow-lg shadow  mb-5 rounded overflow-hidden">
                                    <div className="cartFather">
                                        <img className="w-100 h-100" src={value.image} />
                                        <div className="carthover d-flex flex-column align-items-center justify-content-center">
                                            <div className="my-2 icon">
                                                <NavLink to={`/viewDetails/${value.category}/${value.id}`} className="btn "
                                                 > ViewDetails </NavLink>
                                            </div>

                                            <div className="rounded-circle icon p-3 my-2">
                                            <i onClick={()=>{
                                                this.props.addItem(value)
                                            }} className="fas fa-cart-plus"></i>
                                            </div>
                                            
                                        </div>    
                                    </div>
                                    <div className="cartTitle pt-3">
                                        <h6 className="my-3">{value.title}</h6>
                                        <span className="col-red">${value.price}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> 
            </>
        )
    }
}
