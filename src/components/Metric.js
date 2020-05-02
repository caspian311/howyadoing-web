import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Graph from './Graph.js';

import "./Metric.css";
import './colors.css';

class Metric extends Component {
    render() {
        return (<div class="Metric">
            <h2 class="secondary-background">Weight Loss</h2>
            <Link to="/AddMetric" className="link link-color">Record Today's Weight >></Link>
            <Graph />
        </div>);
    }
}

export default Metric;
    