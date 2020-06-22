import React, { Component } from 'react';

import Graph from './Graph.js';
import DataService from '../services/DataService'

import "./WeightLoss.css";
import './colors.css';

class WeightLoss extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: []
        };
      }
    
    async componentDidMount() {
        try {
            let data = await new DataService().fetchWeightLossData(this.props.token)
            this.setState(() => ({ data }))
        } catch(err) {
            console.log("Error: ", err)
            if (err.response && err.response.status === 401) {
                this.props.setLoggedInUser()
            }
        }
    }

    goToAddMetric = (e) => {
        e.preventDefault()

        this.props.history.push("/AddMetric")
    }

    render() {
        return (<div className="WeightLoss">
            <h2 className="secondary-background">Weight Loss</h2>
            
            <p>
                <a href="/AddMetric" className="link link-color right" onClick={this.goToAddMetric}>Today's Weight &gt;&gt;</a>
                <a href="/Back" className="link link-color" onClick={this.goBack}>&lt;&lt; Back</a>
            </p>
            
            <Graph data={this.state.data} />
        </div>);
    }
}

export default WeightLoss;
    