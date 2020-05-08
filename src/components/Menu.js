import React, { Component } from 'react';

import './Menu.css';
import './colors.css';

class Menu extends Component {
    render() {
        return <div className={ this.props.isOpen ? "hamburger-menu open" : "hamburger-menu" }
        onClick={ () => { this.props.toggleMenu() }}>
            <div className = "bar1" > </div> 
            <div className = "bar2" > </div> 
            <div className = "bar3" > </div> 
        </div>
    }
}

export default Menu