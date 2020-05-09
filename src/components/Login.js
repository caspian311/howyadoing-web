import React, { Component } from 'react';

import '../App.css';
import './colors.css';

class Login extends Component {
    doLogin = () => {
      this.props.setLoggedInUser({ id: 123 })
    }
  
    render() {
      return (<div>
          Login page
  
          <button onClick={this.doLogin}>Login</button>
        </div>);
    }
  }
  
  
  export default Login;
  