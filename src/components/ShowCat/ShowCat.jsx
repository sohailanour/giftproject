import React, { Component } from 'react'

import img2 from '../../img/slider-2.jpg' 

import img4 from '../../img/slider-3.jpg' 
import Catlogo from '../../img/cat-logo.jpg'

import Catlogo4 from '../../img/cat-logo-4.png'
import styles from './ShowCat.module.css'
export default class ShowCat extends Component {
  render() {
    return (
      <>
 
  <div className="d-flex justify-content-center">
<div>
<div className="row">
 <div className="col-lg-4 col-md-6 col-sm-12   ">
 <div className="first cat">
   <img className="cat-profile-img" src={img2} alt="" />
   <div className="cat-description-bk" />
   <div className="cat-logo">
   <img src={Catlogo} alt="" />
   </div>
   <div className="cat-description">
     <p>Gifts For Woman</p>
   </div>
   <div className="cat-p">
     <p>Lorem ipsum dolor sit amet</p>
   </div>
   <div className="cat-btn">
     <a href="#">Shop Now</a>
   </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 col-sm-12   ">
 <div className="second cat">
   <img className="cat-profile-img" src={img4} alt="" />
   <div className="cat-description-bk" />
   <div className="cat-logo">
     <img src={Catlogo4} alt="" />
   </div>
   <div className="cat-description">
     <p>Gifts For Man</p>
   </div>
   <div className="cat-p">
     <p>Lorem ipsum dolor sit amet</p>
   </div>
   <div className="cat-btn">
     <a href="#">Shop Now</a>
   </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 col-sm-12  ">
 <div className="first cat">
   <img className="cat-profile-img" src={img2} alt="" />
   <div className="cat-description-bk" />
   <div className="cat-logo">
   <img src={Catlogo} alt="" />
   </div>
   <div className="cat-description">
     <p>Gifts For Kids</p>
   </div>
   <div className="cat-p">
     <p>Lorem ipsum dolor sit amet</p>
   </div>
   <div className="cat-btn">
     <a href="#">Shop Now</a>
   </div>
 </div>
 </div>
</div>

 <div className="row">
 <div className="col-lg-4 col-md-6 col-sm-12   ">
 <div className="first cat">
   <img className="cat-profile-img" src={img4} alt="" />
   <div className="cat-description-bk" />
   <div className="cat-logo">
   <img src={Catlogo4} alt="" />
   </div>
   <div className="cat-description">
     <p>Fashion Gifts</p>
   </div>
   <div className="cat-p">
     <p>Lorem ipsum dolor sit amet</p>
   </div>
   <div className="cat-btn">
     <a href="#">Shop Now</a>
   </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 col-sm-12   ">
 <div className="second cat">
   <img className="cat-profile-img" src={img2} alt="" />
   <div className="cat-description-bk" />
   <div className="cat-logo">
     <img src={Catlogo} alt="" />
   </div>
   <div className="cat-description">
     <p>Electronic Gifts</p>
   </div>
   <div className="cat-p">
     <p>Lorem ipsum dolor sit amet</p>
   </div>
   <div className="cat-btn">
     <a href="#">Shop Now</a>
   </div>
 </div>
 </div>
 <div className="col-lg-4 col-md-6 col-sm-12   ">
 <div className="first cat">
   <img className="cat-profile-img" src={img4} alt="" />
   <div className="cat-description-bk" />
   <div className="cat-logo">
   <img src={Catlogo4} alt="" />
   </div>
   <div className="cat-description">
     <p>Personlized Gifts</p>
   </div>
   <div className="cat-p">
     <p>Lorem ipsum dolor sit amet</p>
   </div>
   <div className="cat-btn">
     <a href="#">Shop Now</a>
   </div>
 </div>
 </div>
 </div>



</div>
  </div>

 
  

   
    
  
    
  
 
      </>
    )
  }
}
