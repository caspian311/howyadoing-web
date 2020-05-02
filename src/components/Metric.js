import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Graph from './Graph.js';

import "./Metric.css";
import './colors.css';

class Metric extends Component {
    render() {
        return (<div className="Metric">
            <h2 className="secondary-background">Weight Loss</h2>
            
            <p>
                <Link to="/AddMetric" className="link link-color">Record Today's Weight >></Link>
            </p>
            
            <Graph />
        </div>);
    }
}

export default Metric;
    