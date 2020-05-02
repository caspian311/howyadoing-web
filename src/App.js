import React from 'react';
import './App.css';
import './components/colors.css';
import Header from './components/Header.js';
import Metric from './components/Metric.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Metric />
      <Footer />
    </div>
  );
}

export default App;
