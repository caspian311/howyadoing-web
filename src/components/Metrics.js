import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./Metrics.css";
import './colors.css';

class Metrics extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: []
        };
      }
    
    render() {
        return (<div className="Metrics">
            <h2 className="secondary-background">Here's what you're working on...</h2>
            
            <ul>
                <li>
                    <Link to="/WeightLoss" className="link link-color">Weight Loss Goal</Link>
                </li>
                <li>
                    <Link to="/WorkingOut" className="link link-color">Working Out</Link>
                </li>
            </ul>
        </div>);
    }
}

export default Metrics;
    