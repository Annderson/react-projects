import React, { Component } from 'react';
import { BrowserRouter, Router, Switch, Route, Redirect } from 'react-router-dom'

//import logo from './logo.svg';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import Login from '../login/login';
import Lista from '../lista/lista';


class App extends Component {
    render() {
        return ( 
            <BrowserRouter>
                 <Switch>
                     <Route exact={true} path="/" component={Login}/>
                     <Route path="/lista" component={Lista}/>
                     <Route />
                     <Redirect to="/"/>
                 </Switch>
            </BrowserRouter>
        )
    }
}

export default App;