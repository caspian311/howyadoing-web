import React, { Component } from 'react';

import '../App.css';
import './colors.css';

import Header from './Header.js';
import SideNav from './SideNav.js';
import WeightLoss from './WeightLoss.js';
import Profile from './Profile.js';
import AddMetric from './AddMetric.js';
import Metrics from './Metrics.js';
import WorkingOut from './WorkingOut.js';
import Footer from './Footer.js';

import {
    BrowserRouter,
    Switch,
    Route,
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
          <BrowserRouter>
            <SideNav isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} setLoggedInUser={this.props.setLoggedInUser} />
            <Switch>
              <Route path="/AddMetric" component={(props) => 
                <AddMetric 
                  token={this.props.token}
                  setLoggedInUser={this.props.setLoggedInUser} 
                  history={props.history} /> } />
              <Route path="/Profile" component={(props) => 
                <Profile 
                  token={this.props.token}
                  setLoggedInUser={this.props.setLoggedInUser} 
                  history={props.history} /> } />
              <Route path="/WeightLoss" component={(props) => 
                <WeightLoss 
                  token={this.props.token}
                  setLoggedInUser={this.props.setLoggedInUser} 
                  history={props.history} /> } />
              <Route path="/WorkingOut" component={(props) => 
                <WorkingOut 
                  token={this.props.token} 
                  setLoggedInUser={this.props.setLoggedInUser} 
                  history={props.history} /> } />
              <Route path="/" component={(props) => 
                <Metrics 
                  token={this.props.token} 
                  setLoggedInUser={this.props.setLoggedInUser} 
                  history={props.history} /> } />
            </Switch>
          </BrowserRouter>
          
          <Footer />
        </div>);
    }
  }

  export default MainApp;