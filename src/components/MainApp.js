import React, { Component } from 'react';

import '../App.css';
import './colors.css';

import Header from './Header.js';
import SideNav from './SideNav.js';
import WeightLoss from './WeightLoss.js';
import Profile from './Profile.js';
import AddMetric from './AddMetric.js';
import Footer from './Footer.js';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class MainApp extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
          isOpen: false
      };
    }
  
    toggleMenu = () => {
      let newIsOpen = !this.state.isOpen;
  
      this.setState((oldState) => ({ ...oldState, isOpen: newIsOpen }))
    }
  
    render() {
      return (<div className="App">
          <Header isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} showMenu={true}/>
          <Router>
            <SideNav isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} setLoggedInUser={this.props.setLoggedInUser} />
            <Switch>
              <Route path="/AddMetric">
                <AddMetric token={this.props.token} setLoggedInUser={this.props.setLoggedInUser} />
              </Route>
              <Route path="/Profile">
                <Profile token={this.props.token} setLoggedInUser={this.props.setLoggedInUser} />
              </Route>
              <Route path="/">
                <WeightLoss token={this.props.token} setLoggedInUser={this.props.setLoggedInUser} />
              </Route>
            </Switch>
          </Router>
          
          <Footer />
        </div>);
    }
  }

  export default MainApp;