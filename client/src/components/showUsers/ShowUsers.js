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
  render() {
    return (
      <div className="showUsers">
        <div className="showUsers__interface">
          <h1>Show Users</h1>
          <Button variant="contained" className="showUsers__button">
            Show Users
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
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard>
          </Box>
        </div>
      </div>
    );
  }
}

export default ShowUsers;
