import React, { Component } from 'react'
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import "./login.css"

export class Login extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              login : "",
              password : "",
         }
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
        console.log("Login submit working, fetch to do")
        // fetch
    }
     

    

    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <div className="login__interface">
                    <TextField 
                    className="login__inputs" 
                    id="outlined-basic" 
                    label="Login" 
                    variant="outlined" 
                    color="warning"
                    onChange={this.handleLogin}
                    />

                    <TextField 
                    className="login__inputs" 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" color="warning" 
                    onChange={this.handlePassword}
                    />

                    <Button className="login__button" variant="contained" onClick={this.handleSubmit}>Login</Button>

                    <h3>Login successful</h3>
                </div>
            </div>
        )
    }
}

export default Login
