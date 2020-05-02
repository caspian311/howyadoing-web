import React from 'react';
import './App.css';
import './components/colors.css';
import Header from './components/Header.js';
import Metric from './components/Metric.js';
import AddMetric from './components/AddMetric.js';
import Footer from './components/Footer.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
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
    </div>
  );
}

export default App;
