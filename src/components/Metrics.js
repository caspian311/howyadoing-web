import React, { Component } from 'react';

import "./Metrics.css";
import './colors.css';

class Metrics extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: []
        };
    }

    goToWorkingOut = (e) => {
        e.preventDefault()

        this.props.history.push('/WorkingOut')
    }
    
    goToWeightLoss = (e) => {
        e.preventDefault()

        this.props.history.push('/WeightLoss')
    }

    render() {
        return (<div className="Metrics">
            <h2 className="secondary-background">Here's what you're working on...</h2>
            
            <ul>
                <li>
                    <a href="/WeightLoss" className="link link-color" onClick={this.goToWeightLoss}>Weight Loss Goals</a>
                </li>
                <li>
                    <a href="/WorkingOut" className="link link-color" onClick={this.goToWorkingOut}>Working Out Goals</a>
                </li>
            </ul>
        </div>);
    }
}

export default Metrics;
    