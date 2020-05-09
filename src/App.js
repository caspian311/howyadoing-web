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
  
  setLoggedInUser = (user) => {
    this.setState((oldState) => ({
        ...oldState,
        loggedInUser: user
    }))
  }

  render() {
    if (!this.state.loggedInUser) {
      return <Login setLoggedInUser={this.setLoggedInUser} />;
    } 

    return <MainApp setLoggedInUser={this.setLoggedInUser} />
  }
}

export default App;