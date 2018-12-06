import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class Journal extends Component {
  render () {
    return (
      <React.Fragment>
          <div>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>
        



      </React.Fragment>
    )
  }
}