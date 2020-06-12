import React from 'react';
import {ResponsiveContainer, LineChart, Legend, YAxis, XAxis, Tooltip, CartesianGrid, Line} from 'recharts';

import './Graph.css';

function Graph(props)  {
    let values = props.data.map((e) => (e.value))
    let min = Math.min(...values)
    let max = Math.max(...values)
    
    let goals = props.data.map((e) => (e.goal))
    let avgGoal = goals.reduce((v1, v2) => (v1 + v2), 0) / goals.length

    if (avgGoal < min) {
        min = avgGoal
    }

    if (avgGoal > max) {
        max = avgGoal
    }

    return (      
        <ResponsiveContainer width="90%" aspect={4.0/3.0}>
            <LineChart
                data={props.data}
                margin={{
                    top: 10, right: 10, left: 10, bottom: 10,
                }}
                className="Graph"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[ min - 10, max + 10 ]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth="3" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="goal" stroke="#82ca9d" strokeWidth="3" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Graph