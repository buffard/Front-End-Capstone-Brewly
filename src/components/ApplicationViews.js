import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import DataManager from '../module/DataManager'
import JournalPage from './Journal/JournalPage'
import JournalForm from './Journal/JournalForm'


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
          return <JournalPage {...props}
            journal={this.state.journal}
            addJournal={this.addJournal} />
        }} />

        <Route exact path="/journal/new" render={(props) => {
          return <JournalForm {...props}
          journal={this.state.journal}
          addJournal={this.addJournal}/>
        }} />


      </React.Fragment>
    )
  }
}

