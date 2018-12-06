import React, { Component } from "react"
import IsAuth from "./components/Auth/IsAuth"


export default class AppAuth extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null


  state = {
    activeUser: this.isAuthenticated()
  }

  setAuth = () => {
    this.setState({ auth: this.isAuthenticated() })
  }
  render() {
    return <React.Fragment>
            <IsAuth isAuthenticated={this.isAuthenticated} setAuth={this.setAuth} />
          </React.Fragment>
  }
}

