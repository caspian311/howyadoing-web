import React, { Component } from 'react';

import Menu from './Menu';

import './Header.css';
import './colors.css';

class Header extends Component {
    render() {
        return <div className="Header primary-background">
            <h1 className="title">How ya doing?</h1>
            <Menu isOpen={this.props.isOpen} toggleMenu={this.props.toggleMenu} />
        </div>
    }    
}

export default Header