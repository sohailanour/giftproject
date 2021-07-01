import React, { Component } from 'react'
import Styles from './Signin.module.css'
import axios from 'axios'


export default class Signup extends Component {
    
    state = {
        errormessage: "",
        }
    
    user = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    }

    getFormData = (e) => {
        this.user[e.target.name] = e.target.value;
    }

    sendData =async (e) => {
        e.preventDefault();
        let { data }=await axios.post("https://route-egypt-api.herokuapp.com/signup",this.user)
        console.log(data);
        if (data.message == "success") {
            e.target.reset();
            this.setState({ disblay : "d-none" });
        }else {
            this.setState({ errormessage: data.message });
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.sendData} id="signupForm" className="w-75 m-auto p-3">
                    <p className="text-center">Creat new account</p>
                    <label>first name <span className="text-danger">*</span></label>
                    <input onBlur = {this.getFormData} type="text" name="first_name" className="form-control mb-4"  required ></input>
                    <label>last name <span className="text-danger">*</span></label>
                    <input onBlur = {this.getFormData} type="text" name="last_name" className="form-control mb-4" required></input>
                    <label>email <span className="text-danger">*</span></label>
                    <input onBlur={this.getFormData} type="email" name="email" className="form-control mb-4" required></input>
                    <label>your phone <span className="text-danger">*</span></label>
                    <input onBlur={this.getFormData} type="phone" name="phone" className="form-control mb-4" required></input>
                    <label>address <span className="text-danger">*</span></label>
                    <input onBlur = {this.getFormData} type="text" name="address" className="form-control mb-4" required></input>
                    {/* <div id="emailValid" className={`alert alert-danger text-center ${this.state.disblay}`}>{this.state.errormessage}</div> */}
                    {this.state.errormessage !== "" ? <div className="alert alert-danger text-center">{this.state.errormessage}</div>
                            : null}
                    <label>Password <span className="text-danger">*</span> </label>
                    <input onBlur = {this.getFormData} type="password" name="password" className="form-control mb-4" required></input>
                    <button type="submit" onClick={this.sendData2} className="btn btn-lg btn-info w-100 text-center mb-5">Sign Up</button>
                </form>
                <p id="haveAcount" className="text-center"> Already have an account?
                    <a  href="/login" className={`${Styles.a_custom} text-danger`} >Login</a>
                </p>
            </div>
        )
    }
}
