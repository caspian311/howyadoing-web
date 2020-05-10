import React, { Component } from 'react';

import MainApp from './components/MainApp.js';
import Login from './components/Login.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loggedInUser: null
    };
  }
  
  setLoggedInUser = (session) => {
    this.setState((oldState) => ({
        ...oldState,
        loggedInUser: session
    }))
  }

  render() {
    if (!this.state.loggedInUser) {
      return <Login setLoggedInUser={this.setLoggedInUser} />;
    } 

    return <MainApp setLoggedInUser={this.setLoggedInUser} token={this.state.loggedInUser.token} />
  }
}

export default App;