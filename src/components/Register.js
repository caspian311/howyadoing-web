import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Header from './Header.js';
import Footer from './Footer.js';


import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        };
      }
    
    render() {
        return (
        <div className="Registation">
            <Header />
            <h2 className="secondary-background">Register</h2>
            <form>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />

                    <label htmlFor="goal">Goal</label>
                    <input type="number" id="goal" name="goal" />
                </fieldset>

                <Link to="/">Cancel</Link>
            </form>
            <Footer />
        </div>)
    }
}

export default Register;
    