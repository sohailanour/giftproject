import React, { Component } from 'react'
import categories from '../../Categories'
import Nav2 from '../Nav2/Nav2'
import Search from '../Search/Search'
import Category from './Category'
import searchFunc from '../Search/searchFunc'
import store from '../../store.js'

export default class MainShopNow extends Component {
    
    state = {
        catName: "All",
        searchData: store
    }
    
    componentDidMount(){

        let pathparts = window.location.pathname.split('/')
        let categoryName = pathparts[pathparts.length - 1].replace("%20", " ")

        if (categoryName != "category") {
            this.setState({ catName: categoryName })
        } 
    }

    changeCatName = (catnmae) => {
        this.setState({ catName: catnmae })
    }
    
    search = () => {
        let searchResult = searchFunc()
        this.setState({ searchData: searchResult })
    }

    render() {

        return (
            <>
                <Nav2 totalPrice={this.props.totalPrice} totalQty={this.props.totalQty}/>
             
                <div className="container">
                    <Search search={this.search} />
                    <div>
                        <ul className="container nav nav-tabs" id="myTab" role="tablist">
                                
                            {categories.map((value, index) => {
                                return (
                                    <li key={index} className="nav-item" role="presentation">
                                        <a className={`nav-link text-capitalize ${this.state.catName == `${value}` ? "active" : ""}`} data-toggle="tab"  onClick={() => (this.changeCatName(`${value}`))} href={`/${value}`} aria-selected="false" >
                                            {value.split(" ")[0].replace("'s", "")}
                                        </a>
                                    </li>
                                )
                            })}
                                
                        </ul>
                
                        <Category catName={this.state.catName} searchData={this.state.searchData} addItem={this.props.addItem}/>
                        
                    </div>
                </div>                               
            </>

        )
    }
}
