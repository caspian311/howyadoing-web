import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"

import ProfileService from '../services/ProfileService'
import Header from './Header'
import Footer from './Footer'
import Field from './Field'

import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name: '',
            email: '',
            password: '',
            goal: '',
            isReadyToSubmit: false,
            submitted: false
        }
    }
    
    validate = (newState) => {
        return newState.name.length > 0 &&
            newState.password.length > 0 &&
            newState.email.length > 0 &&
            newState.goal > 0
    }

    onChange = (fieldState) => {
        let newState = this.state
        newState[fieldState.name] = fieldState.value

        this.setState(() => ({
            ...newState, 
            isReadyToSubmit: this.validate(newState)
        }))
    }
    
    onSubmit = async (e) => {
        e.preventDefault()
        this.setState((state) => ({ ...state, isReadyToSubmit: false }))

        try {
            await new ProfileService().createProfile({
                name: this.state.name, 
                email: this.state.email, 
                password: this.state.password,
                goal: this.state.goal
            }, this.props.token)
            this.setState(() => ({ submitted: true }))
        } catch(err) {
            console.log("Error: ", err)
        }
    }

    render() {
        if (this.state.submitted) return <Redirect to='/' />

        return (
        <div className="Register">
            <Header />
            <h2 className="secondary-background">Register</h2>
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <Field name="name" value={this.state.name} onChange={this.onChange} />
                    <Field name="email" value={this.state.email} onChange={this.onChange} />
                    <Field name="password" value={this.state.password} onChange={this.onChange} type="password" />
                    <Field name="goal" value={this.state.goal} onChange={this.onChange} type="number" />
                    <input type="submit" value="Create Account" className="terciary-background" disabled={this.state.isReadyToSubmit ? '' : 'disabled'} />
                </fieldset>

                <Link to="/">Cancel</Link>
            </form>
            <Footer />
        </div>)
    }
}

export default Register