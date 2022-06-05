import React, { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./login.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
    };
  }

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
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: this.state.login, password: this.state.password }),
    }).then((res) => {
      if (!res.ok) {
        alert(`Something went wrong, maybe bad login/password ?\nResponse text : ${res.statusText}`);
      }
    });

    this.setState({ login: "", password: "" });
  };

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
            type="password"
            variant="outlined"
            color="warning"
            onChange={this.handlePassword}
            autoComplete="off"
          />

          <Button className="login__button" variant="contained" onClick={this.handleSubmit} type="Reset">
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
