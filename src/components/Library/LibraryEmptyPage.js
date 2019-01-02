import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'


export default class LibraryEmptyPage extends Component {

  render() {
    return (
      <div className="instructionDiv">
        <Jumbotron>
          <h1 className="display-3">You have no entries!</h1>
          <p className="lead">Click add new coffee to add to your library</p>
          <hr className="my-2" />
          <p>You will be able to use the coffee entries in your journal entries </p>
          <p className="lead">
          </p>
        </Jumbotron>
      </div>
    )
  }
}