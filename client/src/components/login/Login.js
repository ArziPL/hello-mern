import React, { Component } from 'react'
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import "./login.css"

export class Login extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              date: new Date(),
         }
     }
     

    componentDidMount() {
        fetch('http://192.168.56.1:3001/login', {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(this.state.date)
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
                    />

                    <TextField 
                    className="login__inputs" 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" color="warning" 
                    />

                    <Button className="login__button" variant="contained">Login</Button>

                    <h3>Login successful</h3>
                </div>
            </div>
        )
    }
}

export default Login
