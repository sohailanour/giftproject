import axios from 'axios';
import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import Styles from './Signin.module.css'
import Signup from "./Signup.jsx"

export default class Signin extends Component {
    
    sendData = async (e) => {
        e.preventDefault();
        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signin", this.user)
        console.log(data);
        console.log(data.message);
        if (data.message == "success") {
            localStorage.setItem("token", data.token);
        } 
    }

    render() {
        return (
            <>

                <div id="logLayer" >
                    <div className={`${Styles.w_30} loginForm m-auto bg-white p-5 position-relative `}>

                        <form onSubmit={this.sendData}  id="loginForm" className="p-3">
                            <label>email <span className="text-danger">*</span></label>
                            <input type="email" className="form-control mb-4"></input>
                            <label>Password <span className="text-danger">*</span> </label>
                            <input type="password" className="form-control mb-4"></input>
                            <button type="submit" className="btn btn-lg btn-info w-100 text-center mb-5">Login</button>
                        </form>

                        <p id="haveAcount" className="text-center"> Don’t have an account yet?
                            <a  href="/signup" className={`${Styles.a_custom} text-danger`} >Sign Up</a>
                        </p>

                    </div>
                </div>
            </>
        )
    }
}
