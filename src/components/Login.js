import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Login.css';
import './colors.css';

import Header from './Header';
import Footer from './Footer';

import SessionService from '../services/SessionService';

class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password: '',
            error: null
        };
      }

    doLogin = async (e) => {
        e.preventDefault()

        try {
            let userSession = await new SessionService().createSession(this.state.email, this.state.password)
            this.props.setLoggedInUser(userSession.token)
        } catch(err) {
            console.log("Error: ", err)
            this.setState((oldState) => ({
                ...oldState,
                error: err.response.data.message
            }))
        }
    }

    updateField = (field, value) => {
        let newState = this.state
        newState[field] =  value
        
        this.setState(() => ({ 
            ...newState, 
        }))
    }

    onEmailChanged = (e) => {
        this.updateField('email', e.target.value)
    }

    onPasswordChanged = (e) => {
        this.updateField('password', e.target.value)
    }
  
    render() {
      return (<div className="Login">
            <Header />
            <h2 className="secondary-background">Login</h2>
            
            { this.state.error ? <ErrorMessage message={this.state.error} /> : '' }
            
            <form>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={this.onEmailChanged} value={this.state.email} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={this.onPasswordChanged} value={this.state.password} />
                </fieldset>

                <input type="submit" className="terciary-background" onClick={this.doLogin} value="Login" />

                Need an account? <Link to="/register" className="link link-color" >Register here</Link>
            </form>
                        
            <Footer />
        </div>);
    }
  }
  
  function ErrorMessage(props) {
      return (
            <div className="error">
                <span>Error:</span>
                {props.message}
            </div>
      );
  }
  
  export default Login;
  