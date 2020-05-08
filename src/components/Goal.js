import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";

import ProfileService from '../services/ProfileService';

import "./Goal.css";
import './colors.css';

class Goal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          submitted: false,
          isReadyToSubmit: false
        };
      }

    componentDidMount() {
        new ProfileService().fetchProfile()
            .then((data) => {
                this.setState((state) => ({
                    ...state,
                    name: data.name,
                    email: data.email,
                    goal: data.goal
                }))
            })
            .catch((e) => {
                console.log("Error: ", e)
            })
    }

    onSubmit = () => {
        new ProfileService().updateProfile()
            .then(() => {
                this.setState(() => ({ submitted: true }))
            })
            .catch((e) => {
                console.log("Error: ", e)
            })
    }

    validate = (newState) => {
        return newState.name.length > 0 &&
        newState.email.length > 0 &&
        newState.goal > 0;;
    }

    updateField = (field, value) => {
        let newState = this.state
        newState[field] =  value
        
        this.setState(() => ({ 
            ...newState, 
            isReadyToSubmit: this.validate(newState)
        }))
    }

    onGoalChanged = (e) => {
        this.updateField('goal', e.target.value)
    }

    onEmailChanged = (e) => {
        this.updateField('email', e.target.value)
    }

    onNameChanged = (e) => {
        this.updateField('name', e.target.value)
    }

    render() {
        if (this.state.submitted === true) {
            return <Redirect to='/' />
        }

        return (<div className="Goal">
            <h2 className="secondary-background">Goals</h2>
            
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <label htmlFor="goal">Name</label>
                    <input id="name" type="text" name="name" onChange={this.onNameChanged} value={this.state.name} />
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" onChange={this.onEmailChanged} value={this.state.email} />
                    <label htmlFor="goal">Goal</label>
                    <input id="goal" type="number" name="goal" onChange={this.onGoalChanged} value={this.state.goal} />
                    <input type="submit" value="Update" className="terciary-background" disabled={this.state.isReadyToSubmit ? '' : 'disabled'} />
                </fieldset>
            </form>

            <p>
                <Link to="/" className="link link-color">Cancel</Link>
            </p>
        </div>);
    }
}

export default Goal;
    