import React, { Component } from 'react'
import ReactTooltip from "react-tooltip";
import './userCard.css'

export class UserCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             trash:""
        }
    }

    handleDelete = () => {
        console.log("Delete working, fetch/refresh to do")
    }
    
    render() {
        return (
            <div className="userCard" data-tip data-for="cardTip" onClick={this.handleDelete}>
                <span style={{float:"left", margin:"10px"}}>Login : {this.props.login}</span>
                <span style={{float:"right", margin:"10px"}}>Num of logins : {this.props.loginNum}</span>

                <ReactTooltip id="cardTip" place="left" effect="solid" backgroundColor="#845EC2">
                    Delete user
                </ReactTooltip>
            </div>
        )
    }
}

export default UserCard
