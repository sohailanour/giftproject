import axios from 'axios';
import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import Styles from './Signin.module.css'
import Signup from "./Signup.jsx"

export default class Signin extends Component {
    
    logLayer = "";
    loginForm = "";
    signupForm = "";

    state = { signMessage: "Already have an account? " }
    
    componentDidMount() {
        this.logLayer = document.getElementById("logLayer");
        this.loginForm = document.getElementById("loginForm");
        this.signupForm = document.getElementById("signupForm");
    }

    openForm = () => {
        this.logLayer.style.bottom = 0 ;
    }

    closeForm = () => {
        this.logLayer.style.bottom = `100%`;
    }

    replaceForm = (e) => {        
        this.loginForm.classList.toggle("d-none");
        this.signupForm.classList.toggle("d-none");


        if (e.target.innerHTML == "Sign Up") {
            this.setState({ signMessage : "Already have an account? " });
            e.target.innerHTML = "Login"
        } else {
            this.setState({signMessage : "Don’t have an account yet?"}) ;
            e.target.innerHTML = "Sign Up"
        }

    }

    sendData = async (e) => {
        e.preventDefault();
        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signin", this.user)
        console.log(data);
        console.log(data.message);
        if (data.message == "success") {
            localStorage.setItem("token", data.token);
        } else {
            this.setState({errormessage:data.message});
        }
    }

    render() {
        return (
            <>
                {/* <button onClick={this.openForm} className="btn">login</button> */}
                <li className="nav-item">
                    <a onClick={this.openForm} className="nav-link "><i className="far fa-user fa-1x"></i></a>
                    {/* <a className="nav-link" href="/"><i className="far fa-user fa-2x"></i> </a> */}
                </li>

                <div id="logLayer" className={Styles.fixedlayer} >
                    <div className={`${Styles.w_30} loginForm bg-white p-5 position-relative `}>

                        <form onSubmit={this.sendData}  id="loginForm" className="p-3">
                            <label>email <span className="text-danger">*</span></label>
                            <input type="email" className="form-control mb-4"></input>
                            <label>Password <span className="text-danger">*</span> </label>
                            <input type="password" className="form-control mb-4"></input>
                            <button type="submit" className="btn btn-lg btn-info w-100 text-center mb-5">Login</button>
                        </form>

                        <Signup />

                        <p id="haveAcount" className="text-center"> {this.state.signMessage}
                            <span  onClick={this.replaceForm} className={`${Styles.a_custom} text-danger`} >Sign Up</span>
                        </p>

                        <div className={`${Styles.close_icon}  position-absolute p-4`}>
                            <i onClick={this.closeForm} className="fas fa-times"></i>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

{/* <div className="loginSocial text-center p-3">
    <p className={`position-relative w-100 ${Styles.hr_p}`}>Or Login With</p>                           
    <div type="submit"  className="btn btn-lg btn-primary w-100 text-center mb-3">Continue With Facebook</div>
    <div type="submit"  className="btn btn-lg btn-danger w-100 text-center mb-4">Continue With Google</div>
</div> */}