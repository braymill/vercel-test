import React, { Component, Text, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MidLanding from './landing.js';
import AboutMe from '.about-me.js';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: false
    }
  }

  getPageTheme = (color) => {
    if (color) {
      return {
        background: '#D1EAFF'
      }
    } else {
      return {
        background: '#FFF'
      }
    }
  }
  render() {
    let pageStyle = { backgroundColor: '#D1EAFF' };
    let isColorPageTheme = this.state.color;

    return (
      <Router style={pageStyle}>
        {/* <NavBar></NavBar> */}
        <Switch>
          <Route exact path='/' component={(props) => <MidLanding {...props} isColorPageTheme={isColorPageTheme} />} />
          <Route exact path='/about-me' component={(props) => <AboutMe {...props} isColorPageTheme={isColorPageTheme} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;