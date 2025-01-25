import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
      </Router>
    );
  }
}




