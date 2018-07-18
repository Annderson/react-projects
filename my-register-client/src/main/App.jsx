import React, { Component } from 'react';

import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import Routers from './routers'


class App extends Component {
    render() {
        return ( 
            <div className="container">
                <Routers/>
            </div>
        )
    }
}

export default App;