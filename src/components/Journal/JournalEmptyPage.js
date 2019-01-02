import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'


export default class JournalEmptyPage extends Component {

  render() {
    return (
      <div className="instructionDiv">
        <Jumbotron>
          <h1 className="display-3">You have no entries!</h1>
          <p className="lead">Make sure to create entries in your coffee library before you starts</p>
          <hr className="my-2" />
          <p>When you create a journal entry you will be able to select from your coffee library</p>
          <p className="lead">
          </p>
        </Jumbotron>
      </div>
    )
  }
}