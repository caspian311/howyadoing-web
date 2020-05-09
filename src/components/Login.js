import React, { Component } from 'react';

import './Login.css';
import './colors.css';

import Header from './Header';
import Footer from './Footer';

class Login extends Component {
    doLogin = () => {
      this.props.setLoggedInUser({ id: 123 })
    }
  
    render() {
      return (<div className="Login">
            <Header />
            <h2 className="secondary-background">Login</h2>
            
            <form>
                <fieldset>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" />

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" />
                </fieldset>

                <input type="submit" className="terciary-background" onClick={this.doLogin} value="Login" />
            </form>
                        
            <Footer />
        </div>);
    }
  }
  
  
  export default Login;
  