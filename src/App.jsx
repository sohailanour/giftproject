import { Component } from "react";

// _________________ import Commponents _________________________________
import Footer from './components/Footer/Footer'
import Home from  './components/Home/Home';
import ItemView from   './components/ItemView/ItemView';
import MainShopNow from   './components/MainShopNow/MainShopNow';
import Navbar1 from   './components/Navbar1/Navbar1';
import Navbar2 from   './components/Navbar2/Navbar2';
import Signin from   './components/Signin/Signin';
import SubShopNow from   './components/SubShopNow/SubShopNow';
import Subscribe from   './components/Subscribe/Subscribe';

// _________________ import _________________________________

import {route , Switch} from 'react-router-dom'
import { Button } from "bootstrap";

class App extends Component{
  render() {
    return (
      
      <>
        <Navbar1 />
        <Signin />        
      </>
    )
  }
}

export default App;
