import React, { Component } from 'react'
import { Button } from 'reactstrap';
import LibraryList from './LibraryList';
import './library.css'

export default class LibraryPage extends Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <Button type="button" className="btn btn-success" onClick={() => {
            this.props.history.push("/library/new")
          }}>
            Add New Coffee
          </Button>
        </div>
        <div >
          <LibraryList {...this.props} />
        </div>
      </React.Fragment>
    )
  }
}