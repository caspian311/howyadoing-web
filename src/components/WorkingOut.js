import React, { Component } from 'react';

import Graph from './Graph.js';
import DataService from '../services/DataService'

import "./WorkingOut.css";
import './colors.css';

class WorkingOut extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: []
        };
    }

    async componentDidMount() {
        try {
            let data = await new DataService().fetchWorkingOutData(this.props.token)

            this.setState(() => ({ data }))
        } catch(err) {
            console.log("Error: ", err)

            if (err.response && err.response.status === 401) {
                this.props.setLoggedInUser()
            }
        }
    }
    
    render() {
        return (<div className="WorkingOut">
            <h2 className="secondary-background">Working Out</h2>
            
            <p>
                <a href="/AddMetric" className="link link-color right" onClick={this.goToAddMetric}>Today's Workout &gt;&gt;</a>
                <a href="/Back" className="link link-color" onClick={this.goBack}>&lt;&lt; Back</a>
            </p>
            
            <Graph data={this.state.data} />
        </div>);
    }
}

export default WorkingOut;
    