import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import "./login.css"

export default class Login extends Component {
  // Set initial state
  state = {
    password: "",
    username: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    // this will first check to make sure all inputs have values
    if (!this.state.username || !this.state.password) {
      alert("please fill out both all forms")
      // If the inputs are filled it will make sure that the username doesnt already exsist
    } else if (this.state.username || this.state.password) {
      DataManager.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`username ${this.state.username} already exits!`)
        // and if it passes the previous two test it will add the users registration to JSON
        } else if (!users.length) {
          DataManager.add("users", newUser).then(user =>{
            sessionStorage.setItem("credentials", parseInt(user.id))
            this.props.setAuth()
          }
          )
        }
      })
    }
  }

  //  handler for login submit
  handleLogin = e => {
    e.preventDefault()
    // this will first check to make sure all inputs have values
    if (!this.state.username || !this.state.password) {
      alert("please fill out both forms")
      // then it will search to find our users login info
    } else if (this.state.username || this.state.password) {
      DataManager.searchLogin(this.state.username, this.state.password).then(
        user => {
          // if it doesn't match it will alert the user
          if (!user.length) {
            alert("Wrong username or password!")
            //if the users login is correct 
          } else if (user.length) {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            this.props.setAuth()
          }
        }
      )
    }
  }

  render() {
    return (
    <form className="loginForm">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername">Username</label>
        <input onChange={this.handleFieldChange} type="username" id="username" placeholder="Username" required="" autoFocus="" />
        <label htmlFor="inputPassword">Password</label>
        <input onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" required="" />
        <button type="submit" onClick={this.handleLogin}>
          Sign in
        </button>
        <button type="submit" onClick={this.handleRegister}>
          Register
        </button>
      </form>
    )
  }
}
