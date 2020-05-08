import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './SideNav.css';
import './colors.css';

class SideNav extends Component {
    sideNavClasses = () => {
        return this.props.isOpen ? 'side-nav terciary-background show' : 'side-nav terciary-background'
    }

    render() {
        return <div className={ this.sideNavClasses() }>
            <ul>
                <li>
                    <Link className="link link-color" to="/goal" onClick={this.props.toggleMenu} >Goal</Link>
                </li>
                <li>
                    <Link className="link link-color" to="/" onClick={this.props.toggleMenu}>Metrics</Link>
                </li>
            </ul>
        </div>
    }    
}

export default SideNav