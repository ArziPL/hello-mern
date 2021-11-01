import React, { Component } from 'react'
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import "./register.css"

export class Register extends Component {
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
                    />

                    <TextField 
                    className="register__inputs" 
                    id="outlined-basic" 
                    label="Login" 
                    variant="outlined" 
                    color="warning" 
                    />

                    <TextField 
                    className="register__inputs" 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    color="warning" 
                    />

                    <Button className="register__button" variant="contained">Register</Button>

                    <h3>Registration successful </h3>
                </div>
            </div>
        )
    }
}

export default Register
