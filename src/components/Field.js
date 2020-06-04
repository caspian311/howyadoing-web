import React, { Component } from 'react';


class Field extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name: props.name,
            value: props.value
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value === this.props.value) return

        this.setState((state) => ({
            ...state,
            value: this.props.value
        }))
    }

    onValueChanged = (e) => {
        let newValue = e.target.value

        this.setState(() => ({ 
            value: newValue
        }), () => {
            this.props.onChange(this.state)
        })
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.displayName}</label>
                <input id={this.props.name} 
                    type={this.props.type || "text"} 
                    name={this.props.name} 
                    onChange={this.onValueChanged} 
                    value={this.state.value} />
            </div>
        )
    }
}

export default Field