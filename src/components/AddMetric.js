import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";

import DataService from '../services/DataService';

import "./AddMetric.css";
import './colors.css';

class AddMetric extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          submitted: false
        };
      }

    onSubmit = (event) => {
        event.preventDefault();
        new DataService().addValue(123)
            .then(() => {
                console.log('setting submitted to true')
                this.setState(() => ({ submitted: true }));
            })
            .catch((e) => {
                console.log('something went wrong',e )
            })
    }

    render() {
        if (this.state.submitted === true) {
        return <Redirect to='/dashboard' />
        }

        return (<div className="AddMetric">
            <h2 className="secondary-background">Add a new metric</h2>

            <form onSubmit={this.onSubmit}>
                <input type="number" name="value" className="foo" />
                <input type="submit" value="Add" className="bar" />
            </form>

            <p>
                <Link to="/" className="link link-color">Cancel</Link>
            </p>
        </div>);
    }
}

export default AddMetric;