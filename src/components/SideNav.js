import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './SideNav.css';
import './colors.css';

class SideNav extends Component {
    sideNavClasses = () => {
        return this.props.isOpen ? 'side-nav terciary-background show' : 'side-nav terciary-background'
    }

    logout = (e) => {
        e.preventDefault()
        this.props.setLoggedInUser(null)
    }

    render() {
        return <div className={ this.sideNavClasses() }>
            <ul>
                <li>
                    <Link className="link link-color" to="/Profile" onClick={this.props.toggleMenu} >Profile</Link>
                </li>
                <li>
                    <Link className="link link-color" to="/" onClick={this.props.toggleMenu}>Metrics</Link>
                </li>
                <li>
                    <a className="link link-color" href="/logout" onClick={this.logout}>Logout</a>
                </li>
            </ul>
        </div>
    }    
}

export default SideNav