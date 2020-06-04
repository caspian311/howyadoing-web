import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Graph from './Graph.js';
import DataService from '../services/DataService'

import "./Metric.css";
import './colors.css';

class Metric extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: []
        };
      }
    
    async componentDidMount() {
        try {
            let data = await new DataService().fetchData(this.props.token)
            this.setState(() => ({ data }))
        } catch(err) {
            console.log("Error: ", err)
            if (err.response && err.response.status === 401) {
                this.props.setLoggedInUser()
            }
        }
    }

    render() {
        return (<div className="Metric">
            <h2 className="secondary-background">Weight Loss</h2>
            
            <p>
                <Link to="/AddMetric" className="link link-color">Record Today's Weight >></Link>
            </p>
            
            <Graph data={this.state.data} />
        </div>);
    }
}

export default Metric;
    