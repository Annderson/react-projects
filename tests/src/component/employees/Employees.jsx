
import React, { Component } from 'react'
import Header from '../../templates/header/header'


import '../../css/employees.css'


export default class Employees extends Component {

    constructor() {
        super();
        this.state = {
            selectedOption: '',
        }
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // selectedOption can be null when the `x` (close) button is clicked
        if (selectedOption) {
          console.log(`Selected: ${selectedOption.label}`);
        }
    }

    render() {
        const { selectedOption } = this.state;
        return (
           <Header typeStyle='version2' titulo='' hideFields='' fields='add'/>
        )
    }
}

