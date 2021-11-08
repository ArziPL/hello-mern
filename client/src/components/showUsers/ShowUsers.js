import React, { Component } from "react";
import UserCard from "./userCard/UserCard"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./showUsers.css";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#845EC2",
      second: "#0081CF",
    },
  },
});

export class ShowUsers extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       users : [],
    }
  }

  handleButton = () => {
    console.log("Show users working, fetch/setstate to do")
    fetch("http://192.168.1.51:3001/getUsers" , {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        }).then(res => {
          return res.json()
        }).then(users => {
          this.setState({users:users})
        })
        console.log(this.state.users)
  }
  
  render() {
    return (
      <div className="showUsers">
        <div className="showUsers__interface">
          <h1>Show Users</h1>
          <Button variant="contained" className="showUsers__button"
          onClick={this.handleButton}>
            Get Users
          </Button>
          <Box
            className="showUsers__box"
            theme={theme}
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.second",
              },
            }}
          >
            <UserCard id="123" login="ArZi" loginNum="23"></UserCard>

            {this.state.users.map((user,index) => 
              <UserCard key={this.state.users[index]._id} login={this.state.users[index].login} loginNum={this.state.users[index].numOfLogins}></UserCard>)}
          </Box>
        </div>
      </div>
    );
  }
}

export default ShowUsers;
