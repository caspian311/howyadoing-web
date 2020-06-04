import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";

import ProfileService from '../services/ProfileService';
import Field from './Field';

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
            isReadyToSubmit: false
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

    onSubmit = async (e) => {
        e.preventDefault()
        this.setState((state) => ({ ...state, isReadyToSubmit: false }))

        try {
            await new ProfileService().updateProfile({
                name: this.state.name, 
                email: this.state.email, 
                goal: this.state.goal
            }, this.props.token)
            this.setState(() => ({ submitted: true }))
        } catch(err) {
            console.log("Error: ", err)
            if (err.response && err.response.status === 401) {
                this.props.setLoggedInUser()
            }
        }
    }

    validate = (newState) => {
        return newState.name.length > 0 &&
            newState.email.length > 0 &&
            newState.goal > 0;;
    }

    onChange = (fieldState) => {
        let newState = this.state
        newState[fieldState.name] = fieldState.value

        this.setState(() => ({
            ...newState, 
            isReadyToSubmit: this.validate(newState)
        }))
    }

    render() {
        if (this.state.submitted === true) {
            return <Redirect to='/' />
        }

        return (<div className="Profile">
            <h2 className="secondary-background">Profile</h2>
            
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <Field name="name" displayName="Name" value={this.state.name} onChange={this.onChange} />
                    <Field name="email" displayName="Email" value={this.state.email} onChange={this.onChange} />
                    <Field name="goal" displayName="Goal" value={this.state.goal} onChange={this.onChange} type="number" />
                    <input type="submit" value="Update" className="terciary-background" disabled={this.state.isReadyToSubmit ? '' : 'disabled'} />
                </fieldset>
            </form>

            <p>
                <Link to="/" className="link link-color">Cancel</Link>
            </p>
        </div>);
    }
}

export default Profile