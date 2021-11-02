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
        fetch("http://192.168.1.51:3001/login" , {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({login:this.state.login, password:this.state.password})
        })
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
                    autoComplete="off"
                    />

                    <TextField 
                    className="login__inputs" 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" color="warning" 
                    onChange={this.handlePassword}
                    autoComplete="off"
                    />

                    <Button className="login__button" variant="contained" onClick={this.handleSubmit}>Login</Button>

                    <h3>Login successful</h3>
                </div>
            </div>
        )
    }
}

export default Login
