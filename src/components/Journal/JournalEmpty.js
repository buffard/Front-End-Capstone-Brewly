import React, { Component } from 'react'
import JournalList from './JournalList.js'
import { Button } from 'reactstrap'

export default class JournalEmpty extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Button type="button" className="btn btn-success" onClick={() => {
            this.props.history.push("/journal/new")
          }}>
            Create New Entry
          </Button>
        </div>
        <div>
          <p>No entries</p>
        </div>
      </React.Fragment>
    )
  }
}