import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";

import ProfileService from '../services/ProfileService';
import Form from './Form';

import "./Profile.css";
import './colors.css';

class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name: '',
            email: '',
            goal: '',
            submitted: false,
        };
    }

    async componentDidMount() {
        try {
            let data = await new ProfileService().fetchProfile(this.props.token)
            this.setState((state) => ({
                ...state,
                name: data.name,
                email: data.email,
                goal: data.goal
            }))
        } catch(err) {
            console.log("Error: ", err)
            if (err.response && err.response.status === 401) {
                this.props.setLoggedInUser()
            }
        }
    }

    onSubmit = async (formData) => {
        try {
            await new ProfileService().updateProfile(formData, this.props.token)
            this.setState(() => ({ submitted: true }))
        } catch(err) {
            console.log("Error: ", err)
            if (err.response && err.response.status === 401) {
                this.props.setLoggedInUser()
            }
        }
    }

    validate = (formData) => {
        console.log('validating: ', formData)

        return formData.name.length > 0 &&
            formData.email.length > 0 &&
            formData.goal > 0
    }

    render() {
        if (this.state.submitted) return <Redirect to='/' />
        
        let fields = [
            { name: "name", value: this.state.name, type: "text"},
            { name: "email", value: this.state.email, type: "text"},
            { name: "goal", value: this.state.goal, type: "number"},
        ]

        return (<div className="Profile">
            <h2 className="secondary-background">Profile</h2>
            
            <Form fields={ fields } 
                onValidate={ this.validate }
                onSubmit={ this.onSubmit }
            />

            <Link to="/" className="link link-color">Cancel</Link>
        </div>);
    }
}

export default Profile