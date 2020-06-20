import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
                <Link to="/AddMetric" className="link link-color">Record for today >></Link>
            </p>
            
            <Graph data={this.state.data} />
        </div>);
    }
}

export default WorkingOut;
    