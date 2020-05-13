import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";

import DataService from '../services/DataService';

import "./AddMetric.css";
import './colors.css';

class AddMetric extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          submitted: false,
          newValue: undefined,
          isReadyToSubmit: false
        };
      }

    onSubmit = async (event) => {
        event.preventDefault();

        try {
            await new DataService().addValue(this.state.newValue, this.props.token)
            this.setState(() => ({ submitted: true }));
        } catch (err) {
            console.log("Error: ", err)
            if (err.response && err.response.status === 401) {
                this.props.setLoggedInUser()
            }
        }
    }

    onValueChanged = (event) => {
        let newValue = parseInt(event.target.value);
        
        this.setState(() => ({ 
            newValue: newValue,
            isReadyToSubmit: !isNaN(newValue)
         }));
    }

    render() {
        if (this.state.submitted === true) {
            return <Redirect to='/' />
        }

        return (<div className="AddMetric">
            <h2 className="secondary-background">Add a new metric</h2>

            <form onSubmit={this.onSubmit}>
                <input type="number" name="value" onChange={this.onValueChanged} />
                <input type="submit" value="Add" className="terciary-background" disabled={this.state.isReadyToSubmit ? '' : 'disabled'} />
            </form>

            <p>
                <Link to="/" className="link link-color">Cancel</Link>
            </p>
        </div>);
    }
}

export default AddMetric;