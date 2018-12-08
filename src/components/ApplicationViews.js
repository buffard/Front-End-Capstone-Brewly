import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import DataManager from '../module/DataManager'
import JournalPage from './Journal/JournalPage'
import JournalForm from './Journal/JournalForm'
import LibraryPage from './Library/LibraryPage'
import LibraryForm from './Library/LibraryForm'


export default class ApplicationViews extends Component {

  state = {
    journal: [],
    library: []
  }

  addJournal = entries => DataManager.add("journal", entries)
    .then(() => DataManager.getAll("journal"))
    .then(journal => this.setState({
      journal: journal
    })
    )

  addLibrary = entries => DataManager.add("library", entries)
    .then(() => DataManager.getAll("library"))
    .then(library => this.setState({
      library: library
    })
    )
    
    componentDidMount() {
      const newState = {}

    DataManager.getAll("journal")
      .then(allEntries => {
        newState.journal = allEntries
      })

    DataManager.getAll("library")
      .then(allEntries => {
        newState.library = allEntries
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
            addJournal={this.addJournal} />
        }} />

        <Route exact path="/library" render={(props) => {
          return <LibraryPage {...props}
            library={this.state.library}
            addLibrary={this.addLibrary}
            
             />
        }} />

        <Route exact path="/library/new" render={(props) => {
          return <LibraryForm {...props}
            library={this.state.library}
            addLibrary={this.addLibrary} />
        }} />
      </React.Fragment>
    )
  }
}

