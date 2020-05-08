import React, { Component } from 'react';

import './SideNav.css';
import './colors.css';

class SideNav extends Component {
    sideNavClasses = () => {
        return this.props.isOpen ? 'side-nav show' : 'side-nav'
    }

    render() {
        return <div className={ this.sideNavClasses() }>
            <ul>
                <li>Goal</li>
                <li>Metrics</li>
            </ul>
        </div>
    }    
}

export default SideNav