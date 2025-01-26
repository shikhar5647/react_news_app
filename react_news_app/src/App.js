import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="container my-3">
          <Routes>
            {/* Default Route */}
            <Route path="/" element={<News />} />
          </Routes>
        </div>
      </Router>
    );
  }
}





