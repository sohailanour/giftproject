import React, { Component } from 'react'
// import search from './searchFunc'

export default class Search extends Component {
   
    render() {
        return (
            
            <div className="container mt-3 mb-5">
                <div className="form-inline justify-content-center w-100 ">
                    <input onKeyUp={this.props.search} id="searchInput" className="form-control w-75" type="search" placeholder="What are you loking for?" aria-label="Search" />
                    <button onClick={this.props.search} className="btn bg-red text-white" type=""><i className="fas fa-search"></i> </button>
                </div>
            </div>            
        )
    }
}
