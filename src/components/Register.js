import React, { Component } from 'react'
import { Link } from "react-router-dom"

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
            goal: ''
        }
    }
    
    onChange = (newFieldState) => {

    }

    render() {  
        return (
        <div className="Register">
            <Header />
            <h2 className="secondary-background">Register</h2>
            <form>
                <fieldset>
                    <Field name="name" value={this.state.name} onChange={this.onChange} />
                    <Field name="email" value={this.state.email} onChange={this.onChange} />
                    <Field name="password" value={this.state.password} onChange={this.onChange} type="password" />
                    <Field name="goal" value={this.state.goal} onChange={this.onChange} type="number" />
                </fieldset>

                <Link to="/">Cancel</Link>
            </form>
            <Footer />
        </div>)
    }
}

export default Register