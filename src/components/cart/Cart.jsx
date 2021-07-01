import React, { Component } from 'react'

export default class Cart extends Component {

    checkLog = (e) => {
        e.preventdefault()
        console.log(e)
        let token = localStorage.getItem("token");
        if (token) {
            this.props.addToStorege([]);
        } else {
        }
    }

    render() {
        let token = localStorage.getItem("token");
        return (
            <>
                <div className="container text-center py-5">
                    <h3 className=" mb-4">Cart ITEMS</h3>
                   
                    {this.props.cartItems.length != 0 ?
                         <div>
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th  className="text-left title"> Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">QTY</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.cartItems.map((value,index)=> {
                                        return (
                                            <tr key={index} className="w-100">
                                                <th scope="row">{value.id}</th>
                                                <td className="text-left  title">{value.title}</td>
                                                <td>{value.price}</td>
                                                <td><img src={value.image} alt="" /></td>
                                                <td>
                                                    <button onClick={()=>{
                                                            this.props.addItem(value)
                                                        }} className="btn btn-primary"><i className="fas fa-plus-square"></i></button>
                                                <span className="px-3">{value.qty}</span>
                                                <button onClick={()=>{
                                                            this.props.removeItem(value)
                                                        }} className="btn btn-danger "><i className="fas fa-minus-square"></i></button>
                                                </td>
                                                
                                                <td>
                                                    <button onClick={()=>{
                                                            this.props.deleteItem(value)
                                                        }} className="btn btn-danger mx-3"><i className="fa fa-trash-alt"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                
                                </tbody>
                            </table>
                            
                            <a id="aa" onClick={this.checkLog} href={`${token != null?'' : 'login'}`}>
                                <button className="btn btn-success mt-4">PROCEED TO CHECKOUT</button>
                            </a>
                        </div>                        
                        : <p className="text-left bg-warning p-3 rounded">Cart items is currently empty<br />
                            Add items to your cart and view them here before you checkout. <a href="/category">Continue shopping!</a> </p>}                                       
                </div>                
            </>
        )
    }
}
