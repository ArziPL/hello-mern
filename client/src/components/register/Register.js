import React, { Component } from 'react'
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import "./register.css"

export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             login: "",
             password:"",
        }
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleLogin = (e) => {
       this.setState({
           login: e.target.value
       })
   }

   handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
   }
   handleSubmit = () => {
       console.log("Register submit working, fetch to do")
       // fetch
   }

    render() {
        return (
            <div className="register">
                <h1>Register</h1>
                <div className="register__interface">
                    <TextField 
                    className="register__inputs" 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    color="warning"
                    onChange={this.handleEmail}
                    />

                    <TextField 
                    className="register__inputs" 
                    id="outlined-basic" 
                    label="Login" 
                    variant="outlined" 
                    color="warning" 
                    onChange={this.handleLogin}
                    />

                    <TextField 
                    className="register__inputs" 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    color="warning" 
                    onChange={this.handlePassword}
                    />

                    <Button className="register__button" variant="contained" onClick={this.handleSubmit}>Register</Button>

                    <h3>Registration successful </h3>
                </div>
            </div>
        )
    }
}

export default Register
