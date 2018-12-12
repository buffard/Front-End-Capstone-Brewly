import React, { Component } from "react"
import Login from "./Login"
import Brewly from "../Brewly"

export default class IsAuth extends Component {
  //return credentials id from our session storage to activer user
  activeUser = parseInt(sessionStorage.getItem("credentials"))
    


  render() {
    console.log("will you be my AU", this.activeUser)
    return <React.Fragment>
        {this.props.isAuthenticated() ? (
          // take user to our app
        <Brewly activeUser={this.activeUser} {...this.props} />
        ) : (
          // or take to the login page
          <Login {...this.props} />
        )}
      </React.Fragment>
  }
}

