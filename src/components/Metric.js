import React, { Component } from 'react';

import Graph from './Graph.js';

import "./Metric.css";
import './colors.css';

class Metric extends Component {
    render() {
        return (<div class="Metric">
            <h2 class="secondary-background">Weight Loss</h2>
            <Graph />
        </div>);
    }
}

export default Metric;
    