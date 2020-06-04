import React, { Component } from 'react';

import MainApp from './components/MainApp.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import AuthService from './services/AuthService.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function InsecureSide(props) {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Login setLoggedInUser={props.setLoggedInUser} />
        </Route>
      </Switch>
    </Router>
  )
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loggedInUser:  new AuthService().fetchSession()
    };
  }
  
  setLoggedInUser = (session) => {
    new AuthService().setSession(session)

    this.setState((oldState) => ({
        ...oldState,
        loggedInUser: session
    }))
  }

  render() {
    if (!this.state.loggedInUser) {
      return <InsecureSide setLoggedInUser={this.setLoggedInUser} />
    } 

    return <MainApp setLoggedInUser={this.setLoggedInUser} token={this.state.loggedInUser} />
  }
} 

export default App;