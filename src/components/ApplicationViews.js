import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import DataManager from '../module/DataManager'
import JournalPage from './Journal/JournalPage'
import JournalForm from './Journal/JournalForm'
import LibraryPage from './Library/LibraryPage'
import LibraryForm from './Library/LibraryForm'
import LibraryEdit from './Library/LibraryEdit'
import JournalEdit from './Journal/JournalEdit'
import BrewGuidesPage from './BrewGuides/BrewGuidesPage'
import Pourover from './BrewGuides/Pourover'
import Frenchpress from './BrewGuides/Frenchpress'
import Icedcoffee from './BrewGuides/Icedcoffee'
import Home from './Home/Home'

export default class ApplicationViews extends Component {

  state = {
    journal: [],
    library: [],
    brewMethods: []
  }

  addJournal = entries => DataManager.add("journal", entries)
    .then(() => DataManager.getUserData("journal", this.props.activeUser))
    .then(journal => this.setState({
      journal: journal
    })
    )

  addLibrary = entries => DataManager.add("library", entries)
    .then(() => DataManager.getUserData("library", this.props.activeUser))
    .then(library => this.setState({
      library: library
    })
    )

  deleteJournal = id => DataManager.delete("journal", id)
    .then(() => DataManager.getUserData("journal", this.props.activeUser))
    .then(journal => this.setState({
      journal: journal
    }))

  deleteLibrary = id => DataManager.delete("library", id)
    .then(() => DataManager.getUserData("library", this.props.activeUser))
    .then(library => this.setState({
      library: library
    }))

  editJournal = (id, journal) => DataManager.edit("journal", id, journal)
    .then(() => DataManager.getUserData("journal", this.props.activeUser))
    .then(journal => this.setState({
      journal: journal
    }))

  editLibrary = (id, library) => DataManager.edit("library", id, library)
    .then(() => DataManager.getUserData("library", this.props.activeUser))
    .then(library => this.setState({
      library: library
    }))

  componentDidMount() {
    const newState = {}

    DataManager.getUserData("journal", this.props.activeUser)
      .then(allEntries => {
        newState.journal = allEntries
      })

    DataManager.getUserData("library", this.props.activeUser)
      .then(allEntries => {
        newState.library = allEntries
      })

    DataManager.getAll("brewMethods")
      .then(allEntries => {
        newState.brewMethods = allEntries
      })
      .then(() => this.setState(newState))
  }

  render() {
    return !this.state.library.length ? <span>Loading page...</span> : (
      <React.Fragment>

        <Route exact path="/" render={(props) => {
          return <Home {...props}
          activeUser={this.props.activeUser}
          journal={this.state.journal}
          library={this.state.library}

          />
        }} />

        <Route exact path="/journal" render={(props) => {
          return <JournalPage {...props}
            journal={this.state.journal}
            library={this.state.library}
            addJournal={this.addJournal}
            deleteJournal={this.deleteJournal}
            brewMethods={this.state.brewMethods}
            activeUser={this.props.activeUser}
          />
        }} />

        <Route exact path="/journal/new" render={(props) => {
          return <JournalForm {...props}
            journal={this.state.journal}
            addJournal={this.addJournal}
            brewMethods={this.state.brewMethods}
            library={this.state.library}
            activeUser={this.props.activeUser}
          />
        }} />

        <Route exact path="/journal/edit/:journalId(\d+)" render={(props) => {
          return <JournalEdit {...props}
            journal={this.state.journal}
            editJournal={this.editJournal}
            brewMethods={this.state.brewMethods}
            library={this.state.library}
            activeUser={this.props.activeUser}
          />
        }} />

        <Route exact path="/library" render={(props) => {
          return <LibraryPage {...props}
            library={this.state.library}
            addLibrary={this.addLibrary}
            deleteLibrary={this.deleteLibrary}
            brewMethods={this.state.brewMethods}
            activeUser={this.props.activeUser}
          />
        }} />

        <Route exact path="/library/new" render={(props) => {
          return <LibraryForm {...props}
            library={this.state.library}
            addLibrary={this.addLibrary}
            brewMethods={this.state.brewMethods}
            activeUser={this.props.activeUser}
          />
        }} />

        <Route exact path="/library/edit/:libraryId(\d+)" render={(props) => {
          return <LibraryEdit {...props}
            library={this.state.library}
            editLibrary={this.editLibrary}
            brewMethods={this.state.brewMethods}
            activeUser={this.props.activeUser}
          />
        }} />

        <Route exact path="/brewguides" render={(props) => {
          return <BrewGuidesPage {...props}
          />
        }} />

        <Route exact path="/pourover" render={(props) => {
          return <Pourover {...props}
          journal={this.state.journal}
          library={this.state.library}
          activeUser={this.props.activeUser}


          />
        }}/>

        <Route exact path="/frenchpress" render={(props) => {
          return <Frenchpress {...props}
          journal={this.state.journal}
          library={this.state.library}
          activeUser={this.props.activeUser}

          />
        }}/>

        <Route exact path="/icedcoffee" render={(props) => {
          return <Icedcoffee {...props}
          journal={this.state.journal}
          library={this.state.library}
          activeUser={this.props.activeUser}

          />
        }}/>       

      </React.Fragment>
    )
  }
}



