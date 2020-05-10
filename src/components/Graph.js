import React, { Component } from 'react';
import './Graph.css';
import {ResponsiveContainer, LineChart, Legend, YAxis, XAxis, Tooltip, CartesianGrid, Line} from 'recharts';
import DataService from '../services/DataService'

class Graph extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: []
        };
      }
    
    componentDidMount() {
        new DataService().fetchData(this.props.token)
            .then((data) => {
                this.setState({
                    data
                })
            })
    }

    render() {
        return (      
            <ResponsiveContainer width="100%" aspect={4.0/3.0}>
                <LineChart
                    data={this.state.data}
                    margin={{
                        top: 10, right: 10, left: 10, bottom: 10,
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
            </ResponsiveContainer>
        )
    }
}

export default Graph