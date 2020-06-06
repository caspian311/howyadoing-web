import React, { Component } from 'react'

import Field from './Field'

import { deepEqual } from '../utils/util'

class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            fields: this.props.fields
        }
    }

    componentDidUpdate(prevProps) {
        if (deepEqual(prevProps, this.props)) return

        this.setState(() => ({
            fields: this.props.fields
        }))
    }

    onChange = (fieldState) => {
        let newState = this.state
        newState.fields.find((field) => field.name === fieldState.name).value = fieldState.value

        this.setState(() => ({
            ...newState, 
            isReadyToSubmit: this.validate()
        }))
    }

    validate = () => {
        if (this.props.onValidate === undefined) return

        return this.props.onValidate(this.generateFormData())
    }

    generateFormData = () => {
        let reducer = (orig, element) => {
            if (element.type === "number") {
                orig[element.name] = parseInt(element.value)
            } else {
                orig[element.name] = element.value
            }
            
            return orig 
       }
       return this.state.fields.reduce(reducer, {})
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (this.props.onSubmit === undefined) return

        this.setState((state) => ({ ...state, isReadyToSubmit: false }))

        this.props.onSubmit(this.generateFormData())
    }

    render() {
        if (!this.props.fields) return <div />

        return (<form onSubmit={this.onSubmit}>
                <fieldset>
                    { this.props.fields.map((field, i) => {
                        return <Field key={i} 
                            name={field.name} value={field.value} type={field.type}
                            onChange={this.onChange} />
                    }) }
                    <input type="submit" value="Update" className="terciary-background" disabled={this.state.isReadyToSubmit ? '' : 'disabled'} />
                </fieldset>
            </form>)
    }
}

export default Form