import React, { Component } from 'react';
import NavbarBrewly from './navbar/NavbarBrewly';
import ApplicationViews from '../components/ApplicationViews';

export default class Brewly extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarBrewly />
        <ApplicationViews />
      </React.Fragment>
    )
  }
}

