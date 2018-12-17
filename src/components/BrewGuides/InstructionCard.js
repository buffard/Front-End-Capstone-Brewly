import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';


export default class InstructionCard extends Component {

  render() {
    return (
      <div className="instructionDiv">
        <Jumbotron>
          <h1 className="display-3">Select a coffee!</h1>
          <p className="lead">Then select from your journal entries. </p>
          <hr className="my-2" />
          <p>This will populate amounts for the amount of water and grounds you will need from your your past coffee journals</p>
          <p className="lead">
          </p>
        </Jumbotron>
      </div>
    )
  }
}