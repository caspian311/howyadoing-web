import React, { Component } from 'react';

import MainApp from './components/MainApp.js';
import Login from './components/Login.js';
import AuthService from './services/AuthService.js';


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
      return <Login setLoggedInUser={this.setLoggedInUser} />;
    } 

    return <MainApp setLoggedInUser={this.setLoggedInUser} token={this.state.loggedInUser} />
  }
}

export default App;