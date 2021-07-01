import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
              
              <footer id="contact" className="text-center text-lg-start bg-light text-muted py-5 mt-5">
 
                <div className="me-5 d-none d-lg-block">
                  <span>Get connected with us on social networks:</span>
                </div>

                <div className="container p-2  pb-0">

                  <section className="mb-2">
                    <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                    <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#55acee'}} href="#!" role="button"><i className="fab fa-twitter" /></a>
                    <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><i className="fab fa-google" /></a>
                    <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><i className="fab fa-instagram" /></a>
                    <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
                    <a className="btn text-white btn-floating m-1" style={{backgroundColor: '#333333'}} href="#!" role="button"><i className="fab fa-github" /></a>
                  </section>
                
                </div>

                {/* Section: Social media */}

                <section>
                  <div className="container text-center text-md-start mt-5">
                    
                    <div className="row mt-3">
                    
                      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">                      
                        <h6 className="text-uppercase fw-bold mb-4"> <i className="fas fa-gem me-3" />the gift shop </h6>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, voluptatum!</p>
                      </div>
                      
                      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        {/* Links */}
                        <h6 className="text-uppercase fw-bold mb-4"> Products </h6>
                        <p><a href="#!" className="text-reset">Electronics</a> </p>
                        <p><a href="#!" className="text-reset">perfumes</a> </p>
                        <p><a href="#!" className="text-reset">Boxes</a></p>                     
                      </div>
                    
                      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        {/* Links */}
                        <h6 className="text-uppercase fw-bold mb-4">Our Services</h6>
                        <p><a href="#!" className="text-reset">Pricing</a></p>
                        <p><a href="#!" className="text-reset">Free Shipping</a> </p>                      
                      </div>
                    
                      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        {/* Links */}
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
                        <p><i className="fas fa-envelope me-3" />info@example.com </p>
                        <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
                        <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
                      </div>
                      {/* Grid column */}
                    </div>
                    {/* Grid row */}
                  </div>
                </section>
                {/* Section: Links  */}

                {/* Copyright */}

                <div className="text-center p-4"> © 2021 The GiftShop. </div>

              </footer>


            </>
        )
    }
}

