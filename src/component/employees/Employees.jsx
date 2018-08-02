
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

    render() {
        return (
           <Header typeStyle='' titulo="" hideFields='' fields='add'
                  filtro="Recursos" ordenar="Exibir período"/>
        )
    }
}

