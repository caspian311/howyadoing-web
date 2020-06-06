import React, { Component } from 'react'
import { Link } from "react-router-dom"

import './Login.css'
import './colors.css'

import Header from './Header'
import Footer from './Footer'
import ErrorMessage from './ErrorMessage'
import Form from './Form'

import SessionService from '../services/SessionService'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error: null
        }
      }

    submitAction = async (formData) => {
        try {
            let userSession = await new SessionService()
                .createSession(formData.email, formData.password)
            this.props.setLoggedInUser(userSession.token)
        } catch(err) {
            this.setState((oldState) => ({
                ...oldState,
                error: err.response.data.message
            }))
        }
    }

    validate = (formData) => {
        return formData.email.length > 0 &&
            formData.password.length > 0
    }

    render() {
      return (<div className="Login">
            <Header />
            <h2 className="secondary-background">Login</h2>
            
            { this.state.error ? <ErrorMessage message={this.state.error} /> : '' }
            
            <Form fields={ [
                    { name: "email", value: "" }, 
                    { name: "password", value: "", type: "password" }
                ] }
                onValidate={ this.validate }
                submitButtonText="Login"
                onSubmit={ this.submitAction } />

            <p>
                Need an account? <Link to="/register" className="link link-color" >Register here</Link>
            </p>
                        
            <Footer />
        </div>)
    }
}
  
export default Login
  