import React, { Component } from 'react';
import './App.css';
import './components/colors.css';
import Header from './components/Header.js';
import SideNav from './components/SideNav.js';
import Metric from './components/Metric.js';
import AddMetric from './components/AddMetric.js';
import Footer from './components/Footer.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isOpen: false
    };
  }

  toggleMenu = () => {
    let previousState = this.state.isOpen;

    this.setState(() => {
        return { isOpen: !previousState }
    })
  }

  render() {
    return (<div className="App">
      <Header isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
      <SideNav isOpen={this.state.isOpen} />
      <Router>
        <Switch>
          <Route path="/AddMetric">
            <AddMetric />
          </Route>
          <Route path="/">
            <Metric />
          </Route>
        </Switch>
      </Router>
      
      <Footer />
    </div>);
  }
}

export default App;
