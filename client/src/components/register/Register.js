import React, { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./register.css";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      login: "",
      password: "",
    };
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleLogin = (e) => {
    this.setState({
      login: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmit = () => {
    fetch("http://192.168.1.51:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: this.state.email, login: this.state.login, password: this.state.password }),
    }).then((res) => {
      if (!res.ok) {
        alert(`Something went wrong, maybe bad login/password ?\nResponse text : ${res.statusText}`);
      } else {
        alert("Register successful");
      }
    });
  };

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
            autoComplete="off"
          />

          <TextField
            className="register__inputs"
            id="outlined-basic"
            label="Login"
            variant="outlined"
            color="warning"
            onChange={this.handleLogin}
            autoComplete="off"
          />

          <TextField
            className="register__inputs"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            color="warning"
            onChange={this.handlePassword}
            autoComplete="off"
            type="password"
          />

          <Button className="register__button" variant="contained" onClick={this.handleSubmit}>
            Register
          </Button>
        </div>
      </div>
    );
  }
}

export default Register;
