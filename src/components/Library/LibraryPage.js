import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class LibraryPage extends Component {
  
  
  
  
  
  
  
  
  
  render() {
    return (
      <React.Fragment>
        <div>
          <Button type="button" className="btn btn-success" onClick={() => {
            this.props.history.push("/library/new")
          }}>
            Create New Entry
          </Button>
        </div>
      </React.Fragment>
    )
  }
}