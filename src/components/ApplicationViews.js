import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import DataManager from '../module/DataManager'
import Journal from './Journal/Journal'


export default class ApplicationViews extends Component {

  state = {
    journal: []
  }

  addJournal = entries => DataManager.add("journal", entries)
  .then(() => DataManager.getAll("journal"))
  .then(journal => this.setState({
    journal: journal
  })
  )

  componentDidMount() {
    const newState = {}

    DataManager.getAll("journal")
      .then(allEntries => {
        newState.journal = allEntries
      })
  
    .then(() => this.setState(newState))
  }




  render() {
    return (
      <React.Fragment>
        <Route exact path="/journal" render={(props) => {
          return <Journal {...props} 
          journal={this.state.journal}
          addJournal={this.addJournal}/>
        }}/>
      </React.Fragment>
      )
  }
}

