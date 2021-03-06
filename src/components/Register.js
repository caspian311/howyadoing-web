import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"

import ProfileService from '../services/ProfileService'
import Header from './Header'
import Footer from './Footer'
import Form from './Form'
import ErrorMessage from './ErrorMessage'

import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            submitted: false,
            error: null
        };
    }

    submitAction = async (formData) => {
        try {
            await new ProfileService().createProfile(formData, this.props.token)
            this.setState(() => ({ submitted: true }))
        } catch(err) {
            this.setState(() => ({ error: err.response.data.message}))
        }
    }

    validate = (formData) => {
        return formData.name.length > 0 &&
            formData.email.length > 0 &&
            formData.password.length > 0 &&
            formData.goal > 0
    }

    render() {
        if (this.state.submitted) return <Redirect to='/' />

        let fields = [
            { name: "name", value: "", type: "text"},
            { name: "email", value: "", type: "text"},
            { name: "password", value: "", type: "password"},
            { name: "goal", value: "", type: "number"},
        ]

        return (
        <div className="Register">
            <Header />
            <h2 className="secondary-background">Register</h2>

            { this.state.error ? <ErrorMessage message={this.state.error} /> : '' }

            <Form 
                fields={ fields } 
                onSubmit={ this.submitAction } 
                onValidate={ this.validate }
                submitButtonText="Create Account" />

            <Link to="/" className="link link-color">Cancel</Link>
            
            <Footer />
        </div>)
    }
}

export default Register