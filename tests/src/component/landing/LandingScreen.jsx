
import React, { Component } from 'react';
import Header from '../../templates/header/header'


export default class LandingScreen extends Component {

    constructor() {

        super();
        this.state = { nome:'Venturus'};
    }

    render() {
        return (
            <div>
                <Header typeStyle='version1' titulo='Landing screen' hideFields='-hide' fields='hide'/>
            </div>
        )
    }
}