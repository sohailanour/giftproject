import { Component } from "react";
// _________________ import Commponents _________________________________
import Home from  './components/Home/Home';
import ShowCat from './components/ShowCat/ShowCat'
import ItemView from   './components/ItemView/ItemView';
import MainShopNow from   './components/MainShopNow/MainShopNow';
import Navbar1 from   './components/Navbar1/Navbar1';
import Cart from "./components/cart/Cart";

import Footer from './components/Footer/Footer'

// _________________ import _________________________________

import {BrowserRouter , Route , Switch} from 'react-router-dom'
import { Button } from "bootstrap";
import Trending from "./components/Trending/Trending";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signin/Signup";



class App extends Component{
  
    state = { cartItems: [] }
  
    addToStorege = (data) => {
        localStorage.setItem("data", JSON.stringify(data))
    }
    
  addItem = (item) => {
        let exist= this.state.cartItems.find((elm) => elm.id===item.id)
        if(exist){
            let cart=this.state.cartItems.map((elm)=>elm.id===item.id?{...exist,qty:exist.qty+1}:elm)
            this.setState({cartItems:cart})
            this.addToStorege(cart)
        }else{
            let cart=[...this.state.cartItems,{...item,qty:1}]
            this.setState({cartItems:cart})
            this.addToStorege(cart)
        }
    }
    
    removeItem = (item)=>{
        let exist= this.state.cartItems.find((elm) => elm.id===item.id)
        if(exist.qty > 1){
            let cart=this.state.cartItems.map((elm)=>elm.id===item.id?{...exist,qty:exist.qty-1}:elm)
            this.setState({cartItems:cart})
            this.addToStorege(cart)

        }
    }
    
    deleteItem =(item)=>{
       let cart= this.state.cartItems.filter((elm)=> elm.id !==item.id)
        this.setState({cartItems:cart})
        this.addToStorege(cart)

    }
  
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem('data'))
    if (data != null) {
      this.setState({ cartItems: data })
    }
  }
  
  render() {
    let totalQty=this.state.cartItems.reduce((x,y)=> x + y.qty,0) 
    let totalPrice = this.state.cartItems.reduce((x, y) => x + y.qty * y.price, 0)
    
    return (
      
      <>
        <Navbar1 totalQty={totalQty} />
        
          <Switch>
            <Route path="/home" component={() => <Home addItem={this.addItem}/>} />
            <Route path="/category" component={() => <MainShopNow addItem={this.addItem} totalQty={totalQty} totalPrice={totalPrice} />} />
            <Route path="/viewDetails" component={() => <ItemView addItem={this.addItem}/>} />
            <Route path="/cart" component={() => <Cart addToStorege={this.addToStorege} deleteItem={this.deleteItem} removeItem={this.removeItem} addItem={this.addItem} cartItems={this.state.cartItems}/>  } />
            <Route path="/trending" component={Trending} /> 
            <Route path="/login" component={Signin} /> 
            <Route path="/signup" component={Signup} /> 
            <Route path="/" component={() => <Home addItem={this.addItem}/>} />            
          </Switch>
          
          <Footer/>  
      </>
    )
  }
}

export default App;
