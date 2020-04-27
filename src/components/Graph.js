import React, { Component } from 'react';
import './Graph.css';
import {LineChart, Legend, YAxis, XAxis, Tooltip, CartesianGrid, Line} from 'recharts';
import DataService from '../services/DataService'

class Graph extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: []
        };
      }
    
    componentDidMount() {
        new DataService().fetchData()
            .then((data) => {
                this.setState({
                    data
                })
            })
    }

    render() {
        return (      
            <LineChart
                width={500}
                height={300}
                data={this.state.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
                className="Graph"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[ 190, 250 ]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="weight" stroke="#8884d8" strokeWidth="3" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="goal" stroke="#82ca9d" strokeWidth="3" />
            </LineChart>
        )
    }
}

export default Graph