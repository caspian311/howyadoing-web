import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./AddMetric.css";
import './colors.css';

class AddMetric extends Component {
    render() {
        return (<div class="AddMetric">
            <p>Add a new metric</p>

            <Link to="/" className="link link-color">Cancel</Link>
        </div>);
    }
}

export default AddMetric;