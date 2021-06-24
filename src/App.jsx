import { Component } from "react";

// _________________ import Commponents _________________________________
import Home from  './components/Home/Home';
import ShowCat from './components/ShowCat/ShowCat'
import ItemView from   './components/ItemView/ItemView';
import MainShopNow from   './components/MainShopNow/MainShopNow';
import Navbar1 from   './components/Navbar1/Navbar1';
import Navbar2 from   './components/Navbar2/Navbar2';
import SubShopNow from   './components/SubShopNow/SubShopNow';
import Subscribe from   './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer'

// _________________ import _________________________________

import {route , Switch} from 'react-router-dom'
import { Button } from "bootstrap";

class App extends Component{
  render() {
    return (
      
      <>
{/* <<<<<<< HEAD */}
        <Navbar1 />       
{/* ======= */}
        <Navbar1 />
      {/* <Signin /> */}
       
        <Home /> 
        
        <ShowCat /> 
        <SubShopNow/>
        <Footer />      
{/* >>>>>>> ed9da38454f2bb090e4edff41baaa34c08aec573 */}
      </>
    )
  }
}

export default App;
