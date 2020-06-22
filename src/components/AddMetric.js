import React, { Component } from 'react';

import DataService from '../services/DataService';

import "./AddMetric.css";
import './colors.css';

class AddMetric extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newValue: undefined,
          isReadyToSubmit: false
        };
      }

    onSubmit = async (event) => {
        event.preventDefault()

        try {
            await new DataService().addValue(this.state.newValue, this.props.token)

            this.goBack()
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

    goBack = (e) => {
        if (e) e.preventDefault()

        this.props.history.goBack()
    }

    render() {
        return (<div className="AddMetric">
            <h2 className="secondary-background">Add a new metric</h2>

            <p>
                <a href="/" className="link link-color" onClick={this.goBack}>&lt;&lt; Back</a>
            </p>

            <form onSubmit={this.onSubmit}>
                <input type="number" name="value" onChange={this.onValueChanged} />
                <input type="submit" value="Add" className="terciary-background" disabled={this.state.isReadyToSubmit ? '' : 'disabled'} />
            </form>


        </div>);
    }
}

export default AddMetric;