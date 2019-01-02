import React, { Component } from 'react'
import { Button } from 'reactstrap'
import LibraryList from './LibraryList'
import LibraryEmptyPage from './LibraryEmptyPage'
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
        {
          this.props.library.length > 0 ? <LibraryList {...this.props} /> : <LibraryEmptyPage />
        }
        </div>
      </React.Fragment>
    )
  }
}