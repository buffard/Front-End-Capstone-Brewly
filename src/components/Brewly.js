import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import NavbarBrewly from './navbar/NavbarBrewly';
import ApplicationViews from '../components/ApplicationViews';


export default class Brewly extends Component {
  render() {
    return (
      ReactDOM.render(
        <Router>
          <NavbarBrewly />
          {/* <ApplicationViews /> */}
        </Router>,
        document.getElementById('root'))
    )
  }
}

